import React from 'react';
import { 
  BookOpen, 
  HeartHandshake, 
  Sparkles, 
  Users, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  FileEdit,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon, GeometricDivider, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';

interface HomePageProps {
  setCurrentPage: (page: PageView) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, lang }) => {
  const heroImage = "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop";
  const learningImage = "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop";
  const t = translations[lang];

  const iconList = [BookOpen, HeartHandshake, Sparkles, Users];

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. HERO SECTION - Royal Emerald & Gold Luxury */}
      <section className="relative overflow-hidden pt-6 sm:pt-8 pb-10 sm:pb-18 lg:py-24 bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#C99738]/20">
        {/* Subtle geometric backdrop with radiant gold ambient glow */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-80 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial from-[#ECC876]/15 via-[#0D5C3A]/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <SubtleBismillahOrnament className="mb-3 sm:mb-4 text-[#0D5C3A]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Main Content Area */}
            <div className={`lg:col-span-7 space-y-5 sm:space-y-6 ${lang === 'ur' ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] border border-[#C99738]/50 text-[#F5E1A4] text-[11px] sm:text-xs font-semibold shadow-sm">
                <IslamicStarIcon size={13} className="text-[#ECC876] drop-shadow-[0_0_6px_rgba(236,200,118,0.6)]" />
                <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.home.badge}</span>
              </div>

              <h1 className={`font-bold tracking-tight text-[#072B1B] ${
                lang === 'ur' 
                  ? 'font-urdu-title text-xl xs:text-2xl sm:text-4xl lg:text-5xl drop-shadow-xs leading-[1.85] sm:leading-[2.1] py-1' 
                  : 'font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl leading-[1.25]'
              }`}>
                {t.home.heroHeadlinePart1} <br className="hidden sm:inline" />
                <span className={`text-[#0D5C3A] ${lang === 'ur' ? 'inline-block text-[#0D5C3A]' : 'underline decoration-[#C99738]/60 decoration-wavy decoration-1 underline-offset-8'}`}>
                  {t.home.heroHeadlinePart2}
                </span>
              </h1>

              <p className={`text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                lang === 'ur' ? 'font-urdu text-sm sm:text-lg' : 'text-sm sm:text-lg'
              }`}>
                {t.home.heroSubtext}
              </p>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center ${lang === 'ur' ? 'lg:justify-start' : 'lg:justify-start'} gap-2.5 sm:gap-3.5 pt-1 sm:pt-2`}>
                <button
                  id="hero-admission-btn"
                  onClick={() => handleNav('admission')}
                  className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:from-[#093C26] hover:to-[#093C26] text-[#F5E1A4] font-bold text-xs sm:text-sm shadow-[0_8px_20px_rgba(7,43,27,0.3)] hover:shadow-[0_12px_28px_rgba(201,151,56,0.35)] hover:scale-[1.02] active:scale-[0.98] border border-[#C99738]/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FileEdit className="w-4 h-4 text-[#ECC876]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.heroBtnAdmission}</span>
                  <ArrowRight className={`w-4 h-4 text-[#ECC876] transition-transform ${lang === 'ur' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => handleNav('contact')}
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#072B1B] font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(201,151,56,0.3)] hover:shadow-[0_6px_22px_rgba(201,151,56,0.45)] border border-[#FFF0C2]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.heroBtnContact}</span>
                </button>

                <button
                  id="hero-learn-more-btn"
                  onClick={() => handleNav('about')}
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3.5 rounded-xl text-[#072B1B] hover:text-[#C59B27] font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.heroBtnLearnMore}</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className={`pt-4 sm:pt-6 border-t border-[#C99738]/20 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#072B1B] bg-white/75 backdrop-blur-xs p-2.5 rounded-xl border border-[#C99738]/25 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] shrink-0" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.sincere}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#072B1B] bg-white/75 backdrop-blur-xs p-2.5 rounded-xl border border-[#C99738]/25 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] shrink-0" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.values}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#072B1B] bg-white/75 backdrop-blur-xs p-2.5 rounded-xl border border-[#C99738]/25 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] shrink-0" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.welcoming}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card - Gilded Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame with gold metallic glow */}
                <div className="absolute -inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#D4AF37]/50 via-[#0D5C3A]/20 to-[#ECC876]/40 blur-md" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C99738]/60 bg-[#072B1B] ring-2 ring-[#C99738]/20">
                  <img
                    src={heroImage}
                    alt="Al-Ikhlas Islamic Institute peaceful learning visual"
                    className="w-full h-[220px] xs:h-[260px] sm:h-[390px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041A10]/90 via-[#041A10]/20 to-transparent" />
                  
                  {/* Floating badge inside visual - Luxury Dark Glass */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-[#072B1B]/92 backdrop-blur-xl rounded-xl p-2.5 sm:p-4 shadow-xl border border-[#C99738]/40">
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0D5C3A] to-[#041A10] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/50 shadow-xs">
                        <IslamicStarIcon size={16} className="text-[#ECC876]" />
                      </div>
                      <div>
                        <p className={`font-bold text-[#F5E1A4] ${lang === 'ur' ? 'font-urdu text-sm sm:text-base' : 'font-display text-xs sm:text-sm'}`}>
                          {t.home.heroImageCaptionTitle}
                        </p>
                        <p className={`text-emerald-100/70 ${lang === 'ur' ? 'font-urdu text-[11px] sm:text-xs' : 'text-[11px] sm:text-xs'}`}>
                          {t.home.heroImageCaptionSub}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL INSTITUTE INTRODUCTION SECTION - ادارے کا جامع تعارف */}
      <section className="py-10 sm:py-20 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-b from-white via-[#FAF7F2] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border-2 border-[#ECC876]/60 shadow-xl relative overflow-hidden space-y-6 sm:space-y-10">
          
          {/* Subtle Islamic ambient glow backdrop */}
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-radial from-[#ECC876]/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-radial from-[#0D5C3A]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Header & Inception Pill */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#041A10] text-[#ECC876] text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#C99738]/50 shadow-xs">
                <IslamicStarIcon size={12} className="text-[#ECC876]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.welcomeBadge}</span>
              </div>

              {/* Founding Date Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-[#FAF7F2] text-[#072B1B] text-[11px] sm:text-xs font-extrabold border border-[#C99738]/40 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-[#C99738]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.welcomeFoundation}</span>
              </div>
            </div>

            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-xl sm:text-3xl lg:text-4xl leading-[1.8] sm:leading-[2.1] py-1' : 'font-display text-xl sm:text-3xl lg:text-4xl leading-snug'
            }`}>
              {t.home.welcomeTitle}
            </h2>

            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#C99738] to-transparent mx-auto rounded-full" />
          </div>

          {/* Paragraph 1: Main Introduction */}
          <div className={`p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#FAF7F2]/90 border border-[#C99738]/30 shadow-2xs ${
            lang === 'ur' ? 'text-right' : 'text-left'
          }`}>
            <p className={`text-slate-700 leading-relaxed font-medium ${
              lang === 'ur' ? 'font-urdu text-sm sm:text-lg sm:leading-[2.2]' : 'text-sm sm:text-lg leading-relaxed'
            }`}>
              <strong className="text-[#072B1B] font-extrabold">{lang === 'ur' ? 'الْإِخْلَاص اسلامک انسٹیٹیوٹ' : 'Al-Ikhlas Islamic Institute'}</strong>{' '}
              {t.home.welcomeIntroP1.replace(lang === 'ur' ? 'الْإِخْلَاص اسلامک انسٹیٹیوٹ ' : 'Al-Ikhlas Islamic Institute ', '')}
            </p>
          </div>

          {/* Featured Courses Showcase Grid */}
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center justify-between gap-3 border-b border-[#C99738]/20 pb-2.5 sm:pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shadow-xs shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-base sm:text-xl' : 'font-display text-sm sm:text-lg'}`}>
                  {t.home.welcomeProgramsTitle}
                </h3>
              </div>
              <button
                onClick={() => handleNav('courses')}
                className="text-xs font-extrabold text-[#0D5C3A] hover:text-[#072B1B] flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              >
                <span>{lang === 'ur' ? 'تمام کورسز دیکھیں' : 'View All Courses'}</span>
                <ArrowRight className={`w-3.5 h-3.5 text-[#C99738] ${lang === 'ur' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5">
              {t.home.welcomeProgramsList.map((prog, idx) => (
                <div
                  key={idx}
                  onClick={() => handleNav('courses')}
                  className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#C99738]/25 hover:border-[#C99738] hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#FAF7F2] text-[#072B1B] font-mono text-[11px] font-extrabold flex items-center justify-center border border-[#C99738]/30">
                        0{idx + 1}
                      </span>
                      {prog.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0D5C3A]/10 text-[#0D5C3A] border border-[#0D5C3A]/20">
                          {prog.badge}
                        </span>
                      )}
                    </div>
                    <h4 className={`font-bold text-[#072B1B] group-hover:text-[#0D5C3A] transition-colors ${lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'font-semibold text-sm'}`}>
                      {prog.title}
                    </h4>
                    <p className={`text-slate-600 text-xs leading-relaxed ${lang === 'ur' ? 'font-urdu' : ''}`}>
                      {prog.desc}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0D5C3A]">
                    <span>{lang === 'ur' ? 'تفصیلات دیکھیں' : 'Learn more'}</span>
                    <ArrowRight className={`w-3 h-3 text-[#C99738] transition-transform ${lang === 'ur' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Paragraph 2: Vision & Character Building */}
          <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-50/70 via-white to-emerald-50/70 border border-emerald-200/60 shadow-2xs ${
            lang === 'ur' ? 'text-right' : 'text-left'
          }`}>
            <p className={`text-slate-700 leading-relaxed font-medium ${
              lang === 'ur' ? 'font-urdu text-sm sm:text-lg sm:leading-[2.2]' : 'text-sm sm:text-lg leading-relaxed'
            }`}>
              {t.home.welcomeIntroP2}
            </p>
          </div>

          {/* Motto Banner / شعار */}
          <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#041A10] p-4 sm:p-8 text-center text-white border-2 border-[#ECC876]/70 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ECC876]/20 text-[#ECC876] flex items-center justify-center mx-auto border border-[#ECC876]/40">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC876]" />
              </div>
              <p className={`font-bold text-[#F5E1A4] tracking-wide ${
                lang === 'ur' ? 'font-urdu-title text-lg sm:text-2xl md:text-3xl leading-[2] sm:leading-[2.2]' : 'font-display text-base sm:text-xl md:text-2xl'
              }`}>
                {t.home.welcomeMotto}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5">
            <button
              onClick={() => handleNav('admission')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:brightness-110 text-[#F5E1A4] font-bold text-xs sm:text-sm shadow-md border border-[#C99738]/50 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileEdit className="w-4 h-4 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
              <ArrowRight className={`w-4 h-4 text-[#ECC876] ${lang === 'ur' ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => handleNav('courses')}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:brightness-110 text-[#072B1B] font-bold text-xs sm:text-sm shadow-sm border border-[#FFF0C2]/50 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4 text-[#072B1B]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.courses}</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 hover:border-[#C99738] shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.welcomeReadMore}</span>
            </button>
          </div>

        </div>
      </section>

      <GeometricDivider />

      {/* 3. WHY CHOOSE US / VALUE CARDS - Luxury Gilded Cards */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.home.whyBadge}</span>
            </div>
            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-xl sm:text-3xl lg:text-4xl' : 'font-display text-xl sm:text-3xl lg:text-4xl'
            }`}>
              {t.home.whyTitle}
            </h2>
            <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-xs sm:text-base' : 'text-xs sm:text-base'}`}>
              {t.home.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.home.whyCards.map((card, index) => {
              const Icon = iconList[index % iconList.length];
              return (
                <div
                  key={index}
                  id={`feature-card-${index}`}
                  className="luxury-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between group text-start bg-white"
                >
                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center border border-[#C99738]/40 shadow-md group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(201,151,56,0.4)] transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className={`font-bold text-[#072B1B] group-hover:text-[#0D5C3A] transition-colors ${lang === 'ur' ? 'font-urdu text-lg sm:text-xl' : 'font-display text-base sm:text-lg'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs sm:text-sm' : 'text-xs sm:text-sm'}`}>
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-[#C99738]/15 flex items-center text-xs font-bold text-[#0D5C3A]">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#ECC876] mx-2 shrink-0 shadow-[0_0_4px_rgba(236,200,118,0.8)]" />
                    <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.sincere}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LEARNING SECTION */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-[#FAF7F2] to-[#F3EFE6] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border-2 border-[#C99738]/30 shadow-xl relative overflow-hidden">
          {/* Subtle gold watermark */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-radial from-[#C99738]/10 to-transparent blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative">
            
            <div className={`lg:col-span-7 space-y-4 sm:space-y-6 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0D5C3A]/10 border border-[#0D5C3A]/25 text-[#0D5C3A] text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#C99738]" />
                <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.home.learningBadge}</span>
              </div>

              <h2 className={`font-bold text-[#072B1B] ${
                lang === 'ur' ? 'font-urdu-title text-xl sm:text-3xl lg:text-4xl' : 'font-display text-xl sm:text-3xl lg:text-4xl'
              }`}>
                {t.home.learningTitle}
              </h2>

              <p className={`text-slate-700 leading-relaxed ${lang === 'ur' ? 'font-urdu text-sm sm:text-base' : 'text-sm sm:text-base'}`}>
                {t.home.learningText1}
              </p>

              <div className="text-slate-700 leading-relaxed bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#C99738]/30 shadow-2xs">
                <p className={lang === 'ur' ? 'font-urdu text-xs sm:text-sm' : 'text-xs sm:text-sm'}>
                  {t.home.learningText2}
                </p>
              </div>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3.5">
                <button
                  id="learning-admission-btn"
                  onClick={() => handleNav('admission')}
                  className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_8px_20px_rgba(7,43,27,0.35)] text-[#F5E1A4] font-bold text-xs sm:text-sm border border-[#C99738]/50 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileEdit className="w-4 h-4 text-[#ECC876]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.learningBtn}</span>
                  <ArrowRight className={`w-4 h-4 text-[#ECC876] ${lang === 'ur' ? 'rotate-180' : ''}`} />
                </button>

                <button
                  id="learning-contact-institute-btn"
                  onClick={() => handleNav('contact')}
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#072B1B] font-bold text-xs sm:text-sm border-2 border-[#C99738]/40 shadow-xs hover:border-[#C99738] transition-all cursor-pointer flex items-center justify-center"
                >
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.ctaBtn}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-[#C99738]/40 shadow-xl ring-2 ring-[#C99738]/20 bg-[#072B1B]">
                <img
                  src={learningImage}
                  alt="Islamic study library ambiance"
                  className="w-full h-[200px] xs:h-[240px] sm:h-[320px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL-TO-ACTION SECTION - Opulent Royal Emerald & Gold */}
      <section className="bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#03150D] text-white py-12 sm:py-20 relative overflow-hidden border-y border-[#C99738]/40">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-[#ECC876]/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative text-center space-y-5 sm:space-y-7">
          <div className="w-13 h-13 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#0D5C3A] to-[#041A10] text-[#ECC876] flex items-center justify-center border-2 border-[#C99738] shadow-[0_0_30px_rgba(201,151,56,0.35)]">
            <IslamicStarIcon size={26} className="text-[#ECC876]" />
          </div>

          <h2 className={`font-bold tracking-tight text-[#FAF7F2] ${
            lang === 'ur' ? 'font-urdu-title text-xl sm:text-3xl lg:text-4xl leading-[1.8] sm:leading-[2] py-1' : 'font-display text-xl sm:text-3xl lg:text-4xl leading-tight'
          }`}>
            {t.home.ctaTitle}
          </h2>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-sm sm:text-lg' : 'text-sm sm:text-lg'
          }`}>
            {t.home.ctaSubtext}
          </p>

          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              id="cta-admission-btn"
              onClick={() => handleNav('admission')}
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(201,151,56,0.4)] hover:shadow-[0_15px_35px_rgba(201,151,56,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer border border-[#FFF0C2]/50"
            >
              <FileEdit className="w-4 h-4 text-[#041A10]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.ctaAdmissionBtn}</span>
              <ArrowRight className={`w-4 h-4 text-[#041A10] ${lang === 'ur' ? 'rotate-180' : ''}`} />
            </button>

            <button
              id="cta-contact-us-btn"
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5E1A4] font-bold text-sm sm:text-base border border-[#C99738]/50 backdrop-blur-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-[#ECC876]"
            >
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.ctaBtn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. CONTACT PREVIEW SECTION - Concierge Luxury Card */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-[#FAF7F2] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border-2 border-[#C99738]/30 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            
            <div className={`flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 text-center ${lang === 'ur' ? 'sm:text-right' : 'sm:text-left'}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/50 shadow-md">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#ECC876]" />
              </div>
              <div className="space-y-1">
                <h3 className={`font-bold text-[#072B1B] ${
                  lang === 'ur' ? 'font-urdu-title text-lg sm:text-2xl' : 'font-display text-lg sm:text-2xl'
                }`}>
                  {t.instituteName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C99738]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.contactPreviewLocation}</span>
                </p>
                <p dir="ltr" className="text-base sm:text-xl font-extrabold text-[#0D5C3A] tracking-wider">
                  +92 309 4884183
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3.5 w-full md:w-auto">
              <button
                id="contact-preview-admission-btn"
                onClick={() => handleNav('admission')}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_6px_20px_rgba(7,43,27,0.3)] text-[#F5E1A4] font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 border border-[#C99738]/40 transition-all cursor-pointer"
              >
                <FileEdit className="w-4 h-4 text-[#ECC876]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
              </button>

              <a
                id="contact-preview-call-now-btn"
                href="tel:+923094884183"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#072B1B] font-bold text-xs sm:text-sm transition-all border-2 border-[#C99738]/40 hover:border-[#C99738] shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0D5C3A]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.callNow}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
