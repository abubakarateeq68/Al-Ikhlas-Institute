export type PageView = 'home' | 'about' | 'courses' | 'learning' | 'admission' | 'contact';

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
