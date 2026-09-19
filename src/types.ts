export type PageView = 'home' | 'about' | 'learning' | 'admission' | 'contact';

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


