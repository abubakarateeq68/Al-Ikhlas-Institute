import React from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Phone, 
  ArrowRight, 
  Sparkles,
  FileEdit,
  GraduationCap,
  Clock,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Layers
} from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon, GeometricDivider, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';

interface LearningPageProps {
  setCurrentPage: (page: PageView) => void;
  lang: Language;
}

export const LearningPage: React.FC<LearningPageProps> = ({ setCurrentPage, lang }) => {
  const heroImage = "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop";
  const t = translations[lang];

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCourseWhatsAppLink = (courseTitle: string) => {
    const message = lang === 'ur'
      ? `السلام علیکم! مجھے الْإِخْلَاص اسلامک انسٹیٹیوٹ کے کورس "${courseTitle}" کے داخلے، شیڈول اور فیس کے بارے میں رہنمائی درکار ہے۔`
      : `Assalam-o-Alaikum! I would like to inquire about admission, timing, and details for the "${courseTitle}" course at Al-Ikhlas Islamic Institute.`;
    return `https://wa.me/923094884183?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. Header Banner - Royal Emerald & Gold */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#041A10] text-white overflow-hidden border-b border-[#C99738]/30">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial from-[#ECC876]/15 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-4">
          <SubtleBismillahOrnament className="mb-3 text-[#ECC876]" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D5C3A]/60 text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
            <IslamicStarIcon size={14} className="text-[#ECC876]" />
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.learning.pageBadge}</span>
          </div>

          <h1 className={`font-bold tracking-tight text-white ${
            lang === 'ur' ? 'font-urdu-title text-3xl sm:text-4xl lg:text-5xl drop-shadow-xs' : 'font-display text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {t.learning.pageTitle}
          </h1>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {t.learning.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Narrative & Inquiries */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className={`lg:col-span-7 space-y-6 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-widest text-[#9C7524] bg-white border border-[#C99738]/40 shadow-xs px-3.5 py-1.5 rounded-full ${
                lang === 'ur' ? 'font-urdu' : ''
              }`}>
                {t.learning.mainBadge}
              </span>
            </div>

            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl lg:text-4xl' : 'font-display text-2xl sm:text-3xl lg:text-4xl'
            }`}>
              {t.learning.mainTitle}
            </h2>

            <p className={`text-slate-700 leading-relaxed ${lang === 'ur' ? 'font-urdu text-base' : 'text-base sm:text-lg'}`}>
              {t.learning.mainText1}
            </p>

            {/* Clear notice about inquiries & Admission */}
            <div className="bg-white border-2 border-[#C99738]/40 rounded-3xl p-5 sm:p-7 space-y-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#ECC876]/15 to-transparent blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 text-[#072B1B] relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] flex items-center justify-center shrink-0 border border-[#C99738]/40">
                  <HelpCircle className="w-5 h-5 text-[#ECC876]" />
                </div>
                <h3 className={`font-bold ${lang === 'ur' ? 'font-urdu text-lg' : 'font-display text-base'}`}>
                  {t.learning.infoBoxTitle}
                </h3>
              </div>
              <p className={`text-slate-600 leading-relaxed relative ${
                lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'
              }`}>
                {t.learning.infoBoxText}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 relative">
                <button
                  id="ask-programs-btn"
                  onClick={() => handleNav('admission')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_4px_16px_rgba(7,43,27,0.3)] text-[#F5E1A4] font-bold text-xs shadow-xs transition-all flex items-center gap-2 border border-[#C99738]/40 cursor-pointer"
                >
                  <FileEdit className="w-3.5 h-3.5 text-[#ECC876]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.learning.askProgramsBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#ECC876] ${lang === 'ur' ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href="tel:+923094884183"
                  dir="ltr"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#072B1B] border-2 border-[#C99738]/30 font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-2xs hover:border-[#C99738]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0D5C3A]" />
                  <span>+92 309 4884183</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C99738]/40 ring-2 ring-[#C99738]/20 bg-[#072B1B]">
              <img
                src={heroImage}
                alt="Al-Ikhlas Islamic Institute learning atmosphere"
                className="w-full h-[320px] sm:h-[370px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 sm:p-6 bg-white/95 backdrop-blur-md border-t border-[#C99738]/30">
                <p className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-lg' : 'font-display text-sm'}`}>
                  {t.learning.spaceTitle}
                </p>
                <p className={`text-slate-500 mt-1 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs' : 'text-xs'}`}>
                  {t.learning.spaceDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OFFERED COURSES & PROGRAMS SECTION */}
      <section id="courses-section" className="py-18 sm:py-24 bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#F2ECE1] border-y border-[#C99738]/25 relative">
        <div className="absolute inset-0 bg-islamic-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
              <GraduationCap className="w-4 h-4 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.learning.coursesBadge}</span>
            </div>
            
            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl lg:text-4xl' : 'font-display text-2xl sm:text-3xl lg:text-4xl'
            }`}>
              {t.learning.coursesTitle}
            </h2>
            
            <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-base' : 'text-base sm:text-lg'}`}>
              {t.learning.coursesSubtitle}
            </p>
          </div>

          {/* Grid of 7 Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {t.learning.courses.map((course, index) => {
              const isHighlight = index === 0 || index === 1; // Tajweed and Tafseer as key highlights
              return (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className={`luxury-card rounded-3xl flex flex-col justify-between overflow-hidden bg-white text-start transition-all duration-300 ${
                    isHighlight 
                      ? 'border-2 border-[#C99738]/60 ring-2 ring-[#C99738]/20 shadow-md' 
                      : 'border border-[#C99738]/30 shadow-xs'
                  }`}
                >
                  {/* Top Decorative Header */}
                  <div className="p-5 sm:p-7 pb-4 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center font-bold text-sm shadow-md border border-[#C99738]/40 shrink-0">
                        <IslamicStarIcon size={22} className="text-[#ECC876]" />
                      </div>

                      <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-white text-[#0D5C3A] border border-[#C99738]/30 shadow-2xs">
                        {course.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className={`font-bold text-[#072B1B] text-xl sm:text-2xl ${
                        lang === 'ur' ? 'font-urdu-title leading-[2] py-1' : 'font-display'
                      }`}>
                        {course.title}
                      </h3>
                      
                      <p className={`text-xs font-bold text-[#9C7524] mt-1 ${
                        lang === 'ur' ? 'font-urdu' : ''
                      }`}>
                        {course.subtitle}
                      </p>
                    </div>

                    <p className={`text-slate-600 text-sm leading-relaxed ${
                      lang === 'ur' ? 'font-urdu text-sm' : ''
                    }`}>
                      {course.description}
                    </p>

                    {/* Duration & Mode Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF7F2] text-slate-700 border border-[#C99738]/20 font-semibold shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-[#0D5C3A]" />
                        <span>{course.duration}</span>
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF7F2] text-slate-700 border border-[#C99738]/20 font-semibold shadow-2xs">
                        <Calendar className="w-3.5 h-3.5 text-[#C99738]" />
                        <span>{course.mode}</span>
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="pt-3 border-t border-[#C99738]/15 space-y-2">
                      {course.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A] shrink-0 mt-0.5" />
                          <span className={lang === 'ur' ? 'font-urdu leading-relaxed' : ''}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="p-4 sm:p-6 pt-3 bg-gradient-to-r from-white via-[#FAF7F2] to-white border-t border-[#C99738]/20 flex flex-col sm:flex-row items-center gap-2">
                    <button
                      id={`course-apply-btn-${course.id}`}
                      onClick={() => handleNav('admission')}
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_4px_16px_rgba(7,43,27,0.3)] text-[#F5E1A4] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs border border-[#C99738]/40 cursor-pointer"
                    >
                      <FileEdit className="w-3.5 h-3.5 text-[#ECC876]" />
                      <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.learning.coursesEnrollBtn}</span>
                    </button>

                    <a
                      id={`course-whatsapp-btn-${course.id}`}
                      href={getCourseWhatsAppLink(course.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      title={t.learning.coursesWhatsappBtn}
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span className="sm:hidden">{t.learning.coursesWhatsappBtn}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Banner Below Courses */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#041A10] via-[#072B1B] to-[#03150D] text-white shadow-2xl relative overflow-hidden border-2 border-[#C99738]/40">
            <div className="absolute inset-0 bg-islamic-pattern-dark opacity-30 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#ECC876] text-xs font-semibold border border-[#ECC876]/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>داخلے جاری ہیں | آن لائن و بالمشافہ کلاسز</span>
                </div>
                <h3 className={`font-bold text-white text-xl sm:text-2xl ${
                  lang === 'ur' ? 'font-urdu-title' : 'font-display'
                }`}>
                  {lang === 'ur' 
                    ? 'کسی بھی کورس میں داخلے یا معلومات کے لیے ابھی فارم جمع کروائیں' 
                    : 'Enroll Today or Inquire Directly for Any Learning Program'}
                </h3>
                <p className={`text-emerald-100/80 text-sm ${lang === 'ur' ? 'font-urdu' : ''}`}>
                  {lang === 'ur'
                    ? 'ہمارے تمام کورسز میں معیاری نصاب، شفیق اساتذہ اور انفرادی توجہ کی ضمانت دی جاتی ہے۔'
                    : 'All courses feature structured syllabi, caring instructors, and dedicated individual attention.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <button
                  id="banner-admission-btn"
                  onClick={() => handleNav('admission')}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-xs sm:text-sm shadow-[0_6px_20px_rgba(201,151,56,0.4)] transition-all flex items-center gap-2 border border-[#FFF0C2]/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileEdit className="w-4 h-4 text-[#041A10]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.admission.pageTitle}</span>
                </button>

                <a
                  id="banner-call-btn"
                  href="tel:+923094884183"
                  dir="ltr"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5E1A4] font-bold text-xs sm:text-sm border border-[#C99738]/50 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#ECC876]" />
                  <span>+92 309 4884183</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Educational Approach & Pillars */}
      <section className="py-18 bg-[#FAF7F2] border-b border-[#C99738]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
              <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.learning.approachBadge}</span>
            </div>
            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
            }`}>
              {t.learning.approachTitle}
            </h2>
            <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm sm:text-base'}`}>
              {t.learning.approachSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.learning.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-7 text-start bg-white"
              >
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center mb-5 border border-[#C99738]/40 shadow-sm">
                  <IslamicStarIcon size={24} className="text-[#ECC876]" />
                </div>
                <h3 className={`font-bold text-[#072B1B] mb-2 ${lang === 'ur' ? 'font-urdu text-xl' : 'font-display text-lg'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Inquiry Steps */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className={`font-bold text-[#072B1B] ${
            lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
          }`}>
            {t.learning.stepsTitle}
          </h2>
          <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm sm:text-base'}`}>
            {t.learning.stepsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.learning.steps.map((step, idx) => (
            <div key={idx} className="luxury-card relative rounded-2xl p-7 text-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] font-bold text-base flex items-center justify-center mb-4 border border-[#C99738]/50 shadow-sm">
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{step.number}</span>
              </div>
              <h3 className={`font-bold text-[#072B1B] mb-2 ${lang === 'ur' ? 'font-urdu text-xl' : 'font-display text-base'}`}>
                {step.title}
              </h3>
              <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action card */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#03150D] text-white text-center space-y-5 border-2 border-[#C99738]/40 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />
          <h3 className={`font-bold text-white relative ${lang === 'ur' ? 'font-urdu-title text-xl sm:text-2xl' : 'font-display text-xl'}`}>
            {t.home.ctaTitle}
          </h3>
          <p className={`text-emerald-100/90 max-w-xl mx-auto relative ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
            {t.learning.infoBoxText}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 relative">
            <button
              onClick={() => handleNav('admission')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-sm shadow-[0_6px_20px_rgba(201,151,56,0.4)] transition-all inline-flex items-center gap-2 cursor-pointer border border-[#FFF0C2]/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileEdit className="w-4 h-4 text-[#041A10]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.learningBtn}</span>
              <ArrowRight className={`w-4 h-4 text-[#041A10] ${lang === 'ur' ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5E1A4] font-bold text-sm border border-[#C99738]/50 backdrop-blur-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.contactUs}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
