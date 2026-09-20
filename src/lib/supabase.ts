import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AdmissionFormData } from '../types.ts';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

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
