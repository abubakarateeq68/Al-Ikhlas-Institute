-- ========================================================================
-- Al-Ikhlas Islamic Institute (الاخلاص اسلامک انسٹیٹیوٹ)
-- Supabase Database Schema: Admissions & Course Updates
-- ========================================================================
-- Instructions:
-- 1. Open your Supabase Dashboard: https://supabase.com/dashboard
-- 2. Select your Project -> Click on "SQL Editor" on the left menu.
-- 3. Click "New Query", paste the entire code below, and click "RUN".
-- ========================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================================================
-- 1. ADMISSIONS TABLE
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.admissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ref_number VARCHAR(64) UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    father_or_guardian_name TEXT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    age VARCHAR(10) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    whatsapp VARCHAR(30) NOT NULL,
    email TEXT,
    city_area TEXT NOT NULL,
    program VARCHAR(100) NOT NULL,
    preferred_timing VARCHAR(50) NOT NULL,
    hifz_session VARCHAR(50),
    education_background TEXT,
    previous_islamic_study TEXT,
    additional_notes TEXT,
    agreed_to_terms BOOLEAN NOT NULL DEFAULT true,
    status VARCHAR(30) NOT NULL DEFAULT 'pending', -- 'pending', 'under_review', 'accepted', 'contacted'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index on ref_number & created_at for fast retrieval
CREATE INDEX IF NOT EXISTS idx_admissions_ref_number ON public.admissions(ref_number);
CREATE INDEX IF NOT EXISTS idx_admissions_created_at ON public.admissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admissions_program ON public.admissions(program);

-- Enable Row Level Security (RLS)
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors (public) to insert new admission applications
DROP POLICY IF EXISTS "Allow public anonymous insert to admissions" ON public.admissions;
CREATE POLICY "Allow public anonymous insert to admissions"
    ON public.admissions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow reading admissions data in dashboard and queries
DROP POLICY IF EXISTS "Allow authenticated read admissions" ON public.admissions;
DROP POLICY IF EXISTS "Allow read admissions" ON public.admissions;
CREATE POLICY "Allow read admissions"
    ON public.admissions
    FOR SELECT
    TO anon, authenticated
    USING (true);


-- ========================================================================
-- 2. COURSE UPDATES & ANNOUNCEMENTS TABLE (For "Our Courses" page)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.course_updates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    title_ur TEXT,
    poster_url TEXT, -- Link to course poster image (from Supabase Storage or online)
    badge TEXT DEFAULT 'New Course',
    badge_ur TEXT DEFAULT 'نیا کورس',
    category VARCHAR(50) NOT NULL DEFAULT 'new', -- 'new', 'upcoming', 'regular', 'short_course'
    description TEXT NOT NULL,
    description_ur TEXT,
    start_date VARCHAR(100),
    deadline VARCHAR(100),
    duration VARCHAR(50),
    timing VARCHAR(100),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure poster_url column exists if table was created previously
ALTER TABLE public.course_updates ADD COLUMN IF NOT EXISTS poster_url TEXT;

-- Enable RLS
ALTER TABLE public.course_updates ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public anon & authenticated) to read active course announcements
DROP POLICY IF EXISTS "Allow public read course updates" ON public.course_updates;
CREATE POLICY "Allow public read course updates"
    ON public.course_updates
    FOR SELECT
    TO anon, authenticated
    USING (is_active = true);

-- Allow admin to insert, update, and delete course updates & posters
DROP POLICY IF EXISTS "Allow authenticated manage course updates" ON public.course_updates;
DROP POLICY IF EXISTS "Allow manage course updates" ON public.course_updates;
CREATE POLICY "Allow manage course updates"
    ON public.course_updates
    FOR ALL
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);


-- ========================================================================
-- 3. SEED INITIAL SAMPLE COURSE UPDATES
-- ========================================================================
INSERT INTO public.course_updates (title, title_ur, badge, badge_ur, category, description, description_ur, start_date, deadline, duration, timing, is_active)
VALUES 
(
    'Special Ramadan Tajweed & Tarteel Intensive',
    'خصوصی تجوید و ترتیل رمضان انٹینسیو کورس',
    'New Batch',
    'نیا بیچ',
    'new',
    'Intensive Tajweed & Quran recitation workshop focusing on Makharij, Sifaat, and fluent recitation before the blessed month.',
    'ماہ مبارک کے پیش نظر تجوید و ترتیل کا خصوصی شارٹ ورکشاپ، درست مخارج اور خوبصورت تلاوت قرآن کے لیے۔',
    '15th of Next Month',
    'Limited Seats - Enroll Today',
    '4 Weeks',
    'Saturday & Sunday (Evening)',
    true
),
(
    'Weekend Fahm-ul-Quran & Tafseer for Professionals',
    'وک اینڈ فہم القرآن و تفسیر کورس برائے ملازمت پیشہ و طلباء',
    'Upcoming Course',
    'جلد شروع ہونے والا',
    'upcoming',
    'Comprehensive weekend study of Selected Surahs, essential Islamic rulings, and practical life lessons.',
    'منتخب سورتوں کا باقاعدہ فہم، اخلاقی و عملی اسباق اور روزمرہ احکام کی تفہیم، خاص طور پر نوجوانوں اور پروفیشنلز کے لیے۔',
    'First Sunday of the Month',
    'Registration Open',
    '3 Months',
    'Sunday 10:00 AM - 1:00 PM',
    true
)
ON CONFLICT DO NOTHING;


-- ========================================================================
-- 4. STORAGE BUCKET FOR COURSE POSTERS (To upload images)
-- ========================================================================
-- This creates a public storage bucket named 'course-posters'
INSERT INTO storage.buckets (id, name, public)
VALUES ('course-posters', 'course-posters', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow anyone to view poster images
DROP POLICY IF EXISTS "Public View Course Posters" ON storage.objects;
CREATE POLICY "Public View Course Posters"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'course-posters');

-- Allow uploading and managing posters in bucket
DROP POLICY IF EXISTS "Public Upload Course Posters" ON storage.objects;
DROP POLICY IF EXISTS "Public Manage Course Posters" ON storage.objects;
CREATE POLICY "Public Manage Course Posters"
ON storage.objects FOR ALL
TO anon, authenticated
USING (bucket_id = 'course-posters')
WITH CHECK (bucket_id = 'course-posters');


-- ========================================================================
-- 5. ADMISSIONS MANAGEMENT POLICIES
-- ========================================================================
-- Allow admin to update status and delete admissions
DROP POLICY IF EXISTS "Allow manage admissions" ON public.admissions;
CREATE POLICY "Allow manage admissions"
    ON public.admissions
    FOR ALL
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);


-- ========================================================================
-- 6. ADMIN USERS TABLE (For Admin Portal Login Credentials)
-- ========================================================================
-- You can change, add, or edit usernames and passwords directly in
-- Supabase Dashboard -> Table Editor -> admin_users
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT DEFAULT 'Administrator',
    role VARCHAR(50) DEFAULT 'super_admin',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow reading admin users for login authentication
DROP POLICY IF EXISTS "Allow read admin_users for authentication" ON public.admin_users;
CREATE POLICY "Allow read admin_users for authentication"
    ON public.admin_users
    FOR SELECT
    TO anon, authenticated
    USING (is_active = true);

-- Allow managing admin users
DROP POLICY IF EXISTS "Allow manage admin_users" ON public.admin_users;
CREATE POLICY "Allow manage admin_users"
    ON public.admin_users
    FOR ALL
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Insert initial Admin User (Change username / password anytime in Table Editor)
INSERT INTO public.admin_users (username, password, name, role, is_active)
VALUES ('admin', 'ikhlas2026', 'Al-Ikhlas Admin', 'super_admin', true)
ON CONFLICT (username) DO NOTHING;



