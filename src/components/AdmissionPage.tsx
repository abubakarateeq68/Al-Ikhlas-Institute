import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  MapPin, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Printer, 
  Send, 
  RotateCcw, 
  HelpCircle, 
  AlertCircle,
  FileText,
  Calendar,
  Sparkles
} from 'lucide-react';
import { PageView, Language, AdmissionFormData } from '../types.ts';
import { IslamicStarIcon, GeometricDivider, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';

interface AdmissionPageProps {
  lang: Language;
  setCurrentPage: (page: PageView) => void;
}

export const AdmissionPage: React.FC<AdmissionPageProps> = ({ lang, setCurrentPage }) => {
  const t = translations[lang];

  const initialFormState: AdmissionFormData = {
    fullName: '',
    fatherOrGuardianName: '',
    gender: '',
    age: '',
    phone: '',
    whatsapp: '',
    email: '',
    cityArea: '',
    program: '',
    preferredTiming: 'flexible',
    educationBackground: '',
    previousIslamicStudy: '',
    additionalNotes: '',
    agreedToTerms: false
  };

  const [formData, setFormData] = useState<AdmissionFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    data: AdmissionFormData;
    refNumber: string;
    submittedAt: string;
  } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const generateRefNumber = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    return `IKHLAS-2026-${randomDigits}`;
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setFormError(t.admission.validationName);
      return false;
    }
    if (!formData.fatherOrGuardianName.trim()) {
      setFormError(t.admission.validationFather);
      return false;
    }
    if (!formData.gender) {
      setFormError(t.admission.validationGender);
      return false;
    }
    if (!formData.age.trim()) {
      setFormError(t.admission.validationAge);
      return false;
    }
    if (!formData.phone.trim()) {
      setFormError(t.admission.validationPhone);
      return false;
    }
    if (!formData.cityArea.trim()) {
      setFormError(t.admission.validationCity);
      return false;
    }
    if (!formData.program) {
      setFormError(t.admission.validationProgram);
      return false;
    }
    if (!formData.agreedToTerms) {
      setFormError(t.admission.validationTerms);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!validateForm()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const now = new Date();
      const dateString = now.toLocaleDateString(lang === 'ur' ? 'ur-PK' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setSubmittedData({
        data: { ...formData },
        refNumber: generateRefNumber(),
        submittedAt: dateString
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setFormError(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const programOptions = [
    { value: 'tajweed', label: t.admission.programs.tajweed },
    { value: 'tafseer', label: t.admission.programs.tafseer },
    { value: 'hifz', label: t.admission.programs.hifz },
    { value: 'shortDarsNizami', label: t.admission.programs.shortDarsNizami },
    { value: 'fahmDeen', label: t.admission.programs.fahmDeen },
    { value: 'shortCourses', label: t.admission.programs.shortCourses },
    { value: 'weeklyDarsQuran', label: t.admission.programs.weeklyDarsQuran },
    { value: 'general', label: t.admission.programs.general }
  ];

  const timingOptions = [
    { value: 'morning', label: t.admission.timingOptions.morning },
    { value: 'afternoon', label: t.admission.timingOptions.afternoon },
    { value: 'evening', label: t.admission.timingOptions.evening },
    { value: 'weekend', label: t.admission.timingOptions.weekend },
    { value: 'flexible', label: t.admission.timingOptions.flexible }
  ];

  return (
    <div className="w-full bg-[#FAF7F2]">
      
      {/* 1. Page Header - Royal Emerald & Gold */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#041A10] text-white overflow-hidden border-b border-[#C99738]/30 print:hidden">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial from-[#ECC876]/15 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-4">
          <SubtleBismillahOrnament className="mb-3 text-[#ECC876]" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D5C3A]/60 text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
            <IslamicStarIcon size={14} className="text-[#ECC876]" />
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.admission.pageBadge}</span>
          </div>

          <h1 className={`font-bold tracking-tight text-white ${
            lang === 'ur' ? 'font-urdu-title text-3xl sm:text-4xl lg:text-5xl drop-shadow-xs' : 'font-display text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {t.admission.pageTitle}
          </h1>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {t.admission.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SUCCESS CONFIRMATION SLIP */}
        {submittedData ? (
          <div id="admission-success-slip" className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Slip Header Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-7 md:p-10 border-2 border-[#C99738]/40 shadow-lg relative overflow-hidden">
              
              <div className="text-center space-y-3 pb-6 border-b border-slate-100">
                <SubtleBismillahOrnament className="mx-auto text-[#0D5C3A]" />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-[#0D5C3A] flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h2 className={`font-bold text-[#083822] ${
                  lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
                }`}>
                  {t.admission.successTitle}
                </h2>
                
                <p className={`text-slate-600 max-w-xl mx-auto ${
                  lang === 'ur' ? 'font-urdu text-base' : 'text-sm sm:text-base'
                }`}>
                  {t.admission.successDesc}
                </p>
              </div>

              {/* Reference & Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 p-4 rounded-2xl bg-[#FAF8F5] border border-emerald-900/10">
                <div className="text-center sm:text-start p-2">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    {t.admission.refNoLabel}
                  </p>
                  <p className="text-base sm:text-lg font-mono font-bold text-[#0D5C3A] tracking-wider mt-0.5">
                    {submittedData.refNumber}
                  </p>
                </div>

                <div className="text-center sm:text-start p-2 border-y sm:border-y-0 sm:border-x border-slate-200">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    {t.admission.dateLabel}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {submittedData.submittedAt}
                  </p>
                </div>

                <div className="text-center sm:text-start p-2">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    {t.admission.statusLabel}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mt-1">
                    {t.admission.statusValue}
                  </span>
                </div>
              </div>

              {/* Application Details Summary */}
              <div className="space-y-4 pt-2">
                <h3 className={`font-bold text-[#083822] flex items-center gap-2 border-b border-slate-100 pb-2 ${
                  lang === 'ur' ? 'font-urdu-title text-xl' : 'font-display text-lg'
                }`}>
                  <FileText className="w-5 h-5 text-[#C99738]" />
                  <span>{t.admission.applicantSummaryTitle}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.fullNameLabel}:</span>
                    <span className="font-semibold text-slate-800 text-base">{submittedData.data.fullName}</span>
                  </div>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.fatherNameLabel}:</span>
                    <span className="font-semibold text-slate-800 text-base">{submittedData.data.fatherOrGuardianName}</span>
                  </div>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.genderLabel} & {t.admission.ageLabel}:</span>
                    <span className="font-semibold text-slate-800">
                      {submittedData.data.gender === 'male' ? t.admission.genderMale : t.admission.genderFemale} • {submittedData.data.age} {lang === 'ur' ? 'سال' : 'Years'}
                    </span>
                  </div>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.phoneLabel}:</span>
                    <span className="font-semibold text-[#0D5C3A]" dir="ltr">{submittedData.data.phone}</span>
                  </div>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.programLabel}:</span>
                    <span className="font-bold text-[#083822]">
                      {programOptions.find(p => p.value === submittedData.data.program)?.label || submittedData.data.program}
                    </span>
                  </div>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.timingLabel}:</span>
                    <span className="font-semibold text-slate-800">
                      {timingOptions.find(opt => opt.value === submittedData.data.preferredTiming)?.label || submittedData.data.preferredTiming}
                    </span>
                  </div>

                  <div className="sm:col-span-2 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">{t.admission.cityAreaLabel}:</span>
                    <span className="font-semibold text-slate-800">{submittedData.data.cityArea}</span>
                  </div>
                </div>
              </div>

              {/* Next Steps Guidance */}
              <div className="mt-8 p-6 rounded-2xl bg-[#093C26] text-white space-y-3">
                <h4 className={`font-bold text-[#E2B755] flex items-center gap-2 ${
                  lang === 'ur' ? 'font-urdu text-lg' : 'font-display text-base'
                }`}>
                  <IslamicStarIcon size={18} className="text-[#E2B755]" />
                  <span>{t.admission.nextStepsTitle}</span>
                </h4>
                
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90 list-disc list-inside">
                  {t.admission.nextSteps.map((step, idx) => (
                    <li key={idx} className={lang === 'ur' ? 'font-urdu' : ''}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons on Slip */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
                <button
                  id="print-admission-slip-btn"
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0D5C3A] hover:bg-[#083822] text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.admission.printBtn}</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="tel:+923094884183"
                    dir="ltr"
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white border border-emerald-900/15 text-[#0D5C3A] font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+92 309 4884183</span>
                  </a>

                  <button
                    id="new-admission-form-btn"
                    onClick={() => {
                      setSubmittedData(null);
                      handleReset();
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.admission.newApplicationBtn}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* MAIN ADMISSION FORM */
          <div className="space-y-8">
            
            {/* Guidance banner - Luxury Pearl White */}
            <div className="bg-white border-2 border-[#C99738]/40 rounded-3xl p-4 sm:p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#ECC876]/15 to-transparent blur-xl pointer-events-none" />
              <div className="flex items-start gap-3.5 relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 mt-0.5 border border-[#C99738]/40 shadow-xs">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-lg' : 'font-display text-base'}`}>
                    {t.admission.formNoticeTitle}
                  </h3>
                  <p className={`text-slate-600 mt-1 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs sm:text-sm' : 'text-xs sm:text-sm'}`}>
                    {t.admission.formNoticeDesc}
                  </p>
                </div>
              </div>

              <a
                id="admission-help-phone-btn"
                href="tel:+923094884183"
                dir="ltr"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] text-[#F5E1A4] text-xs font-bold border border-[#C99738]/40 shadow-xs hover:shadow-[0_4px_16px_rgba(7,43,27,0.3)] transition-all shrink-0 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#ECC876]" />
                <span>+92 309 4884183</span>
              </a>
            </div>

            {/* Main Form Container */}
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-4 sm:p-7 md:p-10 border-2 border-[#C99738]/30 shadow-xl space-y-8 relative overflow-hidden">
              
              {/* Form Validation Alert */}
              {formError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{formError}</span>
                </div>
              )}

              {/* SECTION 1: Student Information */}
              <div className="space-y-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-950/10">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5C3A] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h3 className={`font-bold text-[#083822] ${lang === 'ur' ? 'font-urdu-title text-xl' : 'font-display text-lg'}`}>
                    {t.admission.sectionStudent}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentFullName" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.fullNameLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentFullName"
                      name="fullName"
                      required
                      placeholder={t.admission.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Father / Guardian Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fatherGuardianName" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.fatherNameLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="fatherGuardianName"
                      name="fatherOrGuardianName"
                      required
                      placeholder={t.admission.fatherNamePlaceholder}
                      value={formData.fatherOrGuardianName}
                      onChange={(e) => setFormData({ ...formData, fatherOrGuardianName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Gender */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentGender" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.genderLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <select
                      id="studentGender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    >
                      <option value="">{t.admission.genderSelectPlaceholder}</option>
                      <option value="male">{t.admission.genderMale}</option>
                      <option value="female">{t.admission.genderFemale}</option>
                    </select>
                  </div>

                  {/* Age */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentAge" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.ageLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentAge"
                      name="age"
                      required
                      placeholder={t.admission.agePlaceholder}
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Guardian & Contact Details */}
              <div className="space-y-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-950/10">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5C3A] text-white flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h3 className={`font-bold text-[#083822] ${lang === 'ur' ? 'font-urdu-title text-xl' : 'font-display text-lg'}`}>
                    {t.admission.sectionGuardian}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentPhone" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.phoneLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="tel"
                      id="studentPhone"
                      name="phone"
                      required
                      placeholder={t.admission.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentWhatsApp" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.whatsappLabel}
                    </label>
                    <input
                      type="tel"
                      id="studentWhatsApp"
                      name="whatsapp"
                      placeholder={t.admission.whatsappPlaceholder}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentEmail" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="studentEmail"
                      name="email"
                      placeholder={t.admission.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Area Address in Lahore */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentAddress" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.cityAreaLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentAddress"
                      name="cityArea"
                      required
                      placeholder={t.admission.cityAreaPlaceholder}
                      value={formData.cityArea}
                      onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Course Selection & Shift */}
              <div className="space-y-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-950/10">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5C3A] text-white flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h3 className={`font-bold text-[#083822] ${lang === 'ur' ? 'font-urdu-title text-xl' : 'font-display text-lg'}`}>
                    {t.admission.sectionProgram}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Desired Program */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="desiredProgram" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.programLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <select
                      id="desiredProgram"
                      name="program"
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all font-medium"
                    >
                      <option value="">{t.admission.programSelectPlaceholder}</option>
                      {programOptions.map((prog) => (
                        <option key={prog.value} value={prog.value}>
                          {prog.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Timing */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="preferredTiming" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.timingLabel}
                    </label>
                    <select
                      id="preferredTiming"
                      name="preferredTiming"
                      value={formData.preferredTiming}
                      onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    >
                      {timingOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 4: Educational Background */}
              <div className="space-y-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-950/10">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5C3A] text-white flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <h3 className={`font-bold text-[#083822] ${lang === 'ur' ? 'font-urdu-title text-xl' : 'font-display text-lg'}`}>
                    {t.admission.sectionEducation}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="educationBackground" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.educationBackgroundLabel}
                    </label>
                    <input
                      type="text"
                      id="educationBackground"
                      name="educationBackground"
                      placeholder={t.admission.educationBackgroundPlaceholder}
                      value={formData.educationBackground}
                      onChange={(e) => setFormData({ ...formData, educationBackground: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="previousIslamicStudy" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.previousIslamicStudyLabel}
                    </label>
                    <input
                      type="text"
                      id="previousIslamicStudy"
                      name="previousIslamicStudy"
                      placeholder={t.admission.previousIslamicStudyPlaceholder}
                      value={formData.previousIslamicStudy}
                      onChange={(e) => setFormData({ ...formData, previousIslamicStudy: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="additionalNotes" className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {t.admission.additionalNotesLabel}
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={3}
                      placeholder={t.admission.additionalNotesPlaceholder}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 text-slate-800 text-sm bg-[#FAF8F5]/50 outline-none transition-all resize-y"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 5: Sincerity Declaration & Submit */}
              <div className="space-y-6 pt-4 border-t border-[#C99738]/20">
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#C99738]/40 flex items-start gap-3.5 shadow-2xs">
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    className="w-5 h-5 rounded text-[#0D5C3A] focus:ring-[#C99738] mt-0.5 shrink-0 cursor-pointer accent-[#0D5C3A]"
                  />
                  <label htmlFor="agreedToTerms" className={`text-xs sm:text-sm text-slate-800 leading-relaxed cursor-pointer font-semibold ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {t.admission.termsDeclaration}
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    id="admission-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-sm sm:text-base shadow-[0_6px_20px_rgba(201,151,56,0.4)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-70 group cursor-pointer border border-[#FFF0C2]/50 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#041A10] border-t-transparent rounded-full animate-spin" />
                        <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.admission.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.admission.submitBtn}</span>
                        <Send className={`w-4 h-4 text-[#041A10] ${lang === 'ur' ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-[#FAF7F2] text-slate-700 font-semibold text-sm transition-colors flex items-center justify-center gap-2 border border-[#C99738]/30 shadow-xs cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-[#C99738]" />
                    <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.admission.resetBtn}</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

      </section>

      {/* 3. Location & Direct Help Banner - Royal Emerald */}
      <section className="py-12 bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#041A10] text-white border-t border-[#C99738]/30 print:hidden relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-25 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start relative">
          <div>
            <p className={`font-bold text-[#F5E1A4] ${lang === 'ur' ? 'font-urdu text-base' : 'font-display text-base sm:text-lg'}`}>
              {t.admission.instituteCallBanner}
            </p>
            <p className="text-xs text-emerald-100/70 mt-1 tracking-wide">
              Al-Ikhlas Islamic Institute • Lahore, Pakistan
            </p>
          </div>

          <a
            id="bottom-admission-call-link"
            href="tel:+923094884183"
            dir="ltr"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] text-[#041A10] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#FFF0C2]/50"
          >
            <Phone className="w-4 h-4 text-[#041A10]" />
            <span>+92 309 4884183</span>
          </a>
        </div>
      </section>

    </div>
  );
};
