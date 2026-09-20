import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AdmissionFormData, AdmissionRecord } from '../types.ts';

// Supabase Project: dnqayqnedrfanjjemgem
const DEFAULT_SUPABASE_URL = 'https://dnqayqnedrfanjjemgem.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_V57_YuJtqc2_uIa_o_7z7g_SydEBqi4';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('placeholder') &&
  !supabaseAnonKey.includes('placeholder')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface AdmissionRecordPayload {
  ref_number: string;
  full_name: string;
  father_or_guardian_name: string;
  gender: string;
  age: string;
  phone: string;
  whatsapp: string;
  email: string | null;
  city_area: string;
  program: string;
  preferred_timing: string;
  hifz_session: string | null;
  education_background: string | null;
  previous_islamic_study: string | null;
  additional_notes: string | null;
  agreed_to_terms: boolean;
  status?: string;
}

export interface SupabaseResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  isMock?: boolean;
}

/**
 * Submit admission application to Supabase 'admissions' table.
 * If Supabase is not configured yet, it gracefully simulates success so testing is never blocked.
 */
export async function submitAdmissionToSupabase(
  formData: AdmissionFormData,
  refNumber: string
): Promise<SupabaseResponse> {
  const payload: AdmissionRecordPayload = {
    ref_number: refNumber,
    full_name: formData.fullName.trim(),
    father_or_guardian_name: formData.fatherOrGuardianName.trim(),
    gender: formData.gender,
    age: formData.age.trim(),
    phone: formData.phone.trim(),
    whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
    email: formData.email.trim() || null,
    city_area: formData.cityArea.trim(),
    program: formData.program,
    preferred_timing: formData.preferredTiming,
    hifz_session: formData.program === 'hifz' ? (formData.hifzSession || null) : null,
    education_background: formData.educationBackground.trim() || null,
    previous_islamic_study: formData.previousIslamicStudy.trim() || null,
    additional_notes: formData.additionalNotes.trim() || null,
    agreed_to_terms: formData.agreedToTerms,
    status: 'pending'
  };

  if (!isSupabaseConfigured || !supabase) {
    console.warn(
      '[Supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not configured. Saving in local demo mode.'
    );
    // Return mock success with flag
    return {
      success: true,
      data: payload,
      isMock: true
    };
  }

  try {
    const { error } = await supabase
      .from('admissions')
      .insert([payload]);

    if (error) {
      console.error('[Supabase Insert Error]:', error);
      return {
        success: false,
        error: error.message || 'Database insert failed'
      };
    }

    return {
      success: true,
      data: payload
    };
  } catch (err: any) {
    console.error('[Supabase Unexpected Error]:', err);
    return {
      success: false,
      error: err?.message || 'Network or connection error occurred'
    };
  }
}

export interface LiveCourseUpdate {
  id: string;
  title: string;
  title_ur?: string;
  badge?: string;
  badge_ur?: string;
  category: 'new' | 'upcoming' | 'regular' | 'short_course';
  description: string;
  description_ur?: string;
  poster_url?: string;
  start_date?: string;
  deadline?: string;
  duration?: string;
  timing?: string;
  is_active: boolean;
  created_at?: string;
}

/**
 * Fetch live course updates/announcements from Supabase 'course_updates' table if available.
 */
export async function fetchLiveCourseUpdates(): Promise<LiveCourseUpdate[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('course_updates')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('[Supabase Course Updates]:', error.message);
      return [];
    }

    return (data as LiveCourseUpdate[]) || [];
  } catch (err) {
    console.warn('[Supabase Course Updates Fetch Failed]:', err);
    return [];
  }
}

/**
 * Fetch ALL admissions for the Admin Portal
 */
export async function fetchAdmissions(): Promise<AdmissionRecord[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('admissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[Fetch Admissions Error]:', error);
      return [];
    }

    return (data as AdmissionRecord[]) || [];
  } catch (err) {
    console.error('[Fetch Admissions Exception]:', err);
    return [];
  }
}

/**
 * Update the status of an admission (e.g. 'pending', 'reviewed', 'contacted', 'approved')
 */
export async function updateAdmissionStatus(
  id: string,
  status: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase is not configured' };
  }

  try {
    const { data, error } = await supabase
      .from('admissions')
      .update({ 
        status, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', id)
      .select('id, status');

    if (error) {
      console.error('[Update Admission Status Error]:', error);
      return { success: false, error: error.message };
    }

    if (!data || data.length === 0) {
      return { 
        success: false, 
        error: 'Supabase میں UPDATE کی اجازت (RLS Policy) فعال نہیں ہے، جس کی وجہ سے اسٹیٹس ڈیٹا بیس میں محفوظ نہیں ہو سکا۔' 
      };
    }

    return { success: true };
  } catch (err: any) {
    console.error('[Update Admission Status Exception]:', err);
    return { success: false, error: err?.message || 'Failed to update status' };
  }
}

/**
 * Delete an admission record (e.g. spam or test entries)
 */
export async function deleteAdmission(
  id: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase is not configured' };
  }

  try {
    const { error } = await supabase
      .from('admissions')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to delete record' };
  }
}

/**
 * Upload a course poster image to Supabase Storage 'course-posters' bucket
 */
export async function uploadCoursePoster(
  file: File
): Promise<{ success: boolean; url?: string; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase is not configured' };
  }

  try {
    const fileExt = file.name.split('.').pop() || 'png';
    const cleanFileName = `poster_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `posters/${cleanFileName}`;

    const { error } = await supabase.storage
      .from('course-posters')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('[Storage Upload Error]:', error);
      return { success: false, error: error.message };
    }

    const { data: publicUrlData } = supabase.storage
      .from('course-posters')
      .getPublicUrl(filePath);

    return {
      success: true,
      url: publicUrlData.publicUrl
    };
  } catch (err: any) {
    console.error('[Upload Exception]:', err);
    return { success: false, error: err?.message || 'File upload failed' };
  }
}

/**
 * Create a new course announcement with poster in 'course_updates' table
 */
export async function createCourseWithPoster(payload: {
  title: string;
  title_ur?: string;
  poster_url: string;
  badge?: string;
  badge_ur?: string;
  category?: string;
  description?: string;
  description_ur?: string;
  start_date?: string;
  deadline?: string;
  timing?: string;
  duration?: string;
}): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase is not configured' };
  }

  try {
    const { error } = await supabase
      .from('course_updates')
      .insert([
        {
          title: payload.title.trim(),
          title_ur: (payload.title_ur || payload.title).trim(),
          poster_url: payload.poster_url.trim(),
          badge: payload.badge || 'New Batch',
          badge_ur: payload.badge_ur || 'نیا کورس',
          category: payload.category || 'new',
          description: payload.description || '',
          description_ur: payload.description_ur || '',
          start_date: payload.start_date || null,
          deadline: payload.deadline || null,
          timing: payload.timing || null,
          duration: payload.duration || null,
          is_active: true
        }
      ]);

    if (error) {
      console.error('[Create Course Error]:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('[Create Course Exception]:', err);
    return { success: false, error: err?.message || 'Failed to publish course' };
  }
}

/**
 * Delete a course update / poster
 */
export async function deleteCourse(
  id: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase is not configured' };
  }

  try {
    const { error } = await supabase
      .from('course_updates')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to delete course' };
  }
}

/**
 * Toggle active status of a course poster
 */
export async function toggleCourseActive(
  id: string,
  isActive: boolean
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase is not configured' };
  }

  try {
    const { error } = await supabase
      .from('course_updates')
      .update({ is_active: isActive })
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to update status' };
  }
}

/**
 * Verify Admin Login credentials from Supabase 'admin_users' table.
 * If the table exists in Supabase, it verifies against the database record.
 * If the table is not created yet or network fails, it gracefully checks the env/default credentials.
 */
export async function verifyAdminLogin(
  usernameInput: string,
  passwordInput: string
): Promise<{ success: boolean; user?: { username: string; name?: string }; error?: string }> {
  const cleanUser = usernameInput.trim();
  const cleanPass = passwordInput.trim();

  const fallbackUser = (import.meta.env.VITE_ADMIN_USERNAME || 'admin').trim().toLowerCase();
  const fallbackPass = (import.meta.env.VITE_ADMIN_PASSWORD || import.meta.env.VITE_ADMIN_PASSCODE || 'ikhlas2026').trim();

  // 1. Check Supabase 'admin_users' table if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .ilike('username', cleanUser)
        .limit(1);

      if (!error && data && data.length > 0) {
        const adminRecord = data[0];
        if (adminRecord.password === cleanPass) {
          return {
            success: true,
            user: { username: adminRecord.username, name: adminRecord.name || 'Admin' }
          };
        } else {
          return {
            success: false,
            error: 'غلط پاس ورڈ درج کیا گیا ہے۔ براہ کرم درست پاس ورڈ لکھیں۔'
          };
        }
      }
    } catch (e) {
      // If table doesn't exist yet, fall through to fallback check
    }
  }

  // 2. Fallback check against env / default credentials
  if (cleanUser.toLowerCase() === fallbackUser && cleanPass === fallbackPass) {
    return {
      success: true,
      user: { username: cleanUser, name: 'Administrator' }
    };
  }

  return {
    success: false,
    error: 'غلط یوزر نیم یا پاس ورڈ! براہ کرم درست معلومات درج کریں۔'
  };
}

