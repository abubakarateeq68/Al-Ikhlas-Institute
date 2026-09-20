export type PageView = 'home' | 'about' | 'courses' | 'learning' | 'admission' | 'contact' | 'admin';

export type Language = 'en' | 'ur';

export interface ContactFormData {
  fullName: string;
  phoneOrEmail: string;
  inquiryType: string;
  message: string;
}

export interface AdmissionFormData {
  fullName: string;
  fatherOrGuardianName: string;
  gender: string;
  age: string;
  phone: string;
  whatsapp: string;
  email: string;
  cityArea: string;
  program: string;
  preferredTiming: string;
  hifzSession?: string;
  educationBackground: string;
  previousIslamicStudy: string;
  additionalNotes: string;
  agreedToTerms: boolean;
}

export interface AdmissionRecord {
  id: string;
  ref_number: string;
  full_name: string;
  father_or_guardian_name: string;
  gender: string;
  age: string;
  phone: string;
  whatsapp: string;
  email?: string | null;
  city_area: string;
  program: string;
  preferred_timing: string;
  hifz_session?: string | null;
  education_background?: string | null;
  previous_islamic_study?: string | null;
  additional_notes?: string | null;
  agreed_to_terms: boolean;
  status: string;
  created_at: string;
}

export interface CourseDetailItem {
  id: string;
  badge: string;
  badgeUr: string;
  title: string;
  titleUr: string;
  subtitle: string;
  subtitleUr: string;
  description: string;
  descriptionUr: string;
  category: 'new' | 'upcoming' | 'regular' | 'short_course';
  duration: string;
  durationUr: string;
  mode: string;
  modeUr: string;
  schedule: string;
  scheduleUr: string;
  isNew?: boolean;
  features: string[];
  featuresUr: string[];
}
