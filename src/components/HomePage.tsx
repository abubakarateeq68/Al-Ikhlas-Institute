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
  FileEdit
} from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon, GeometricDivider, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';

interface HomePageProps {
  setCurrentPage: (page: PageView) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, lang }) => {
  const heroImage = "/src/assets/images/institute_hero_visual_1786878730473.jpg";
  const learningImage = "/src/assets/images/learning_ambiance_1786878742181.jpg";
  const t = translations[lang];

  const iconList = [BookOpen, HeartHandshake, Sparkles, Users];

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. HERO SECTION - Royal Emerald & Gold Luxury */}
      <section className="relative overflow-hidden pt-8 pb-18 lg:py-24 bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#C99738]/20">
        {/* Subtle geometric backdrop with radiant gold ambient glow */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-80 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial from-[#ECC876]/15 via-[#0D5C3A]/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SubtleBismillahOrnament className="mb-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Main Content Area */}
            <div className={`lg:col-span-7 space-y-6 ${lang === 'ur' ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] border border-[#C99738]/50 text-[#F5E1A4] text-xs font-semibold shadow-sm">
                <IslamicStarIcon size={14} className="text-[#ECC876] drop-shadow-[0_0_6px_rgba(236,200,118,0.6)]" />
                <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.home.badge}</span>
              </div>

              <h1 className={`font-bold tracking-tight text-[#072B1B] ${
                lang === 'ur' 
                  ? 'font-urdu-title text-2xl sm:text-4xl lg:text-5xl drop-shadow-xs leading-[2.1] py-1' 
                  : 'font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.25]'
              }`}>
                {t.home.heroHeadlinePart1} <br className="hidden sm:inline" />
                <span className={`text-[#0D5C3A] ${lang === 'ur' ? 'inline-block text-[#0D5C3A]' : 'underline decoration-[#C99738]/60 decoration-wavy decoration-1 underline-offset-8'}`}>
                  {t.home.heroHeadlinePart2}
                </span>
              </h1>

              <p className={`text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
              }`}>
                {t.home.heroSubtext}
              </p>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center ${lang === 'ur' ? 'lg:justify-start' : 'lg:justify-start'} gap-3.5 pt-2`}>
                <button
                  id="hero-admission-btn"
                  onClick={() => handleNav('admission')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:from-[#093C26] hover:to-[#093C26] text-[#F5E1A4] font-bold text-sm shadow-[0_8px_20px_rgba(7,43,27,0.3)] hover:shadow-[0_12px_28px_rgba(201,151,56,0.35)] hover:scale-[1.02] active:scale-[0.98] border border-[#C99738]/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FileEdit className="w-4 h-4 text-[#ECC876]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.heroBtnAdmission}</span>
                  <ArrowRight className={`w-4 h-4 text-[#ECC876] transition-transform ${lang === 'ur' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => handleNav('contact')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#072B1B] font-bold text-sm shadow-[0_4px_16px_rgba(201,151,56,0.3)] hover:shadow-[0_6px_22px_rgba(201,151,56,0.45)] border border-[#FFF0C2]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.heroBtnContact}</span>
                </button>

                <button
                  id="hero-learn-more-btn"
                  onClick={() => handleNav('about')}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-[#072B1B] hover:text-[#C59B27] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.heroBtnLearnMore}</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className={`pt-6 border-t border-[#C99738]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#072B1B] bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#C99738]/25 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] shrink-0" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.sincere}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#072B1B] bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#C99738]/25 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] shrink-0" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.values}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#072B1B] bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#C99738]/25 shadow-2xs col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] shrink-0" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.quickPointers.welcoming}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card - Gilded Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame with gold metallic glow */}
                <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/50 via-[#0D5C3A]/20 to-[#ECC876]/40 blur-md" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C99738]/60 bg-[#072B1B] ring-2 ring-[#C99738]/20">
                  <img
                    src={heroImage}
                    alt="Al-Ikhlas Islamic Institute peaceful learning visual"
                    className="w-full h-[320px] sm:h-[390px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041A10]/90 via-[#041A10]/20 to-transparent" />
                  
                  {/* Floating badge inside visual - Luxury Dark Glass */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#072B1B]/90 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-[#C99738]/40">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D5C3A] to-[#041A10] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/50 shadow-xs">
                        <IslamicStarIcon size={20} className="text-[#ECC876]" />
                      </div>
                      <div>
                        <p className={`font-bold text-[#F5E1A4] ${lang === 'ur' ? 'font-urdu text-base' : 'font-display text-sm'}`}>
                          {t.home.heroImageCaptionTitle}
                        </p>
                        <p className={`text-emerald-100/70 ${lang === 'ur' ? 'font-urdu text-xs' : 'text-xs'}`}>
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

      {/* 2. WELCOME SECTION */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#9C7524] text-xs font-bold uppercase tracking-widest border border-[#C99738]/40 shadow-xs">
            <IslamicStarIcon size={12} className="text-[#ECC876]" />
            <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.welcomeBadge}</span>
          </div>

          <h2 className={`font-bold text-[#072B1B] max-w-3xl mx-auto ${
            lang === 'ur' ? 'font-urdu-title text-xl sm:text-3xl lg:text-4xl leading-[2] py-1' : 'font-display text-2xl sm:text-3xl lg:text-4xl leading-snug'
          }`}>
            {t.home.welcomeTitle}
          </h2>

          <p className={`text-slate-600 leading-relaxed max-w-3xl mx-auto ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {t.home.welcomeText}
          </p>

          <div className="pt-3">
            <button
              id="welcome-read-more-btn"
              onClick={() => handleNav('about')}
              className="text-[#0D5C3A] hover:text-[#072B1B] font-bold text-sm inline-flex items-center gap-2 group px-5 py-2 rounded-xl bg-white border border-[#C99738]/30 shadow-xs hover:border-[#C99738] transition-all cursor-pointer"
            >
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.welcomeReadMore}</span>
              <ArrowRight className={`w-4 h-4 text-[#C99738] transition-transform ${lang === 'ur' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        </div>
      </section>

      <GeometricDivider />

      {/* 3. WHY CHOOSE US / VALUE CARDS - Luxury Gilded Cards */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.home.whyBadge}</span>
            </div>
            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl lg:text-4xl' : 'font-display text-2xl sm:text-3xl lg:text-4xl'
            }`}>
              {t.home.whyTitle}
            </h2>
            <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-sm sm:text-base' : 'text-sm sm:text-base'}`}>
              {t.home.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.whyCards.map((card, index) => {
              const Icon = iconList[index % iconList.length];
              return (
                <div
                  key={index}
                  id={`feature-card-${index}`}
                  className="luxury-card rounded-3xl p-7 flex flex-col justify-between group text-start bg-white"
                >
                  <div className="space-y-4">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center border border-[#C99738]/40 shadow-md group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(201,151,56,0.4)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`font-bold text-[#072B1B] group-hover:text-[#0D5C3A] transition-colors ${lang === 'ur' ? 'font-urdu text-xl' : 'font-display text-lg'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="pt-5 mt-4 border-t border-[#C99738]/15 flex items-center text-xs font-bold text-[#0D5C3A]">
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
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-[#FAF7F2] to-[#F3EFE6] rounded-3xl p-8 sm:p-12 border-2 border-[#C99738]/30 shadow-xl relative overflow-hidden">
          {/* Subtle gold watermark */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-radial from-[#C99738]/10 to-transparent blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
            
            <div className={`lg:col-span-7 space-y-6 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D5C3A]/10 border border-[#0D5C3A]/25 text-[#0D5C3A] text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#C99738]" />
                <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.home.learningBadge}</span>
              </div>

              <h2 className={`font-bold text-[#072B1B] ${
                lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl lg:text-4xl' : 'font-display text-2xl sm:text-3xl lg:text-4xl'
              }`}>
                {t.home.learningTitle}
              </h2>

              <p className={`text-slate-700 leading-relaxed ${lang === 'ur' ? 'font-urdu text-base' : 'text-base'}`}>
                {t.home.learningText1}
              </p>

              <div className="text-slate-700 leading-relaxed bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-[#C99738]/30 shadow-2xs">
                <p className={lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}>
                  {t.home.learningText2}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <button
                  id="learning-admission-btn"
                  onClick={() => handleNav('admission')}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_8px_20px_rgba(7,43,27,0.35)] text-[#F5E1A4] font-bold text-sm border border-[#C99738]/50 shadow-sm transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileEdit className="w-4 h-4 text-[#ECC876]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.learningBtn}</span>
                  <ArrowRight className={`w-4 h-4 text-[#ECC876] ${lang === 'ur' ? 'rotate-180' : ''}`} />
                </button>

                <button
                  id="learning-contact-institute-btn"
                  onClick={() => handleNav('contact')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#072B1B] font-bold text-sm border-2 border-[#C99738]/40 shadow-xs hover:border-[#C99738] transition-all cursor-pointer"
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
                  className="w-full h-[270px] sm:h-[320px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL-TO-ACTION SECTION - Opulent Royal Emerald & Gold */}
      <section className="bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#03150D] text-white py-16 sm:py-20 relative overflow-hidden border-y border-[#C99738]/40">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-[#ECC876]/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-7">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#0D5C3A] to-[#041A10] text-[#ECC876] flex items-center justify-center border-2 border-[#C99738] shadow-[0_0_30px_rgba(201,151,56,0.35)]">
            <IslamicStarIcon size={30} className="text-[#ECC876]" />
          </div>

          <h2 className={`font-bold tracking-tight text-[#FAF7F2] ${
            lang === 'ur' ? 'font-urdu-title text-xl sm:text-3xl lg:text-4xl leading-[2] py-1' : 'font-display text-2xl sm:text-3xl lg:text-4xl leading-tight'
          }`}>
            {t.home.ctaTitle}
          </h2>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {t.home.ctaSubtext}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-admission-btn"
              onClick={() => handleNav('admission')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-base shadow-[0_10px_25px_rgba(201,151,56,0.4)] hover:shadow-[0_15px_35px_rgba(201,151,56,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer border border-[#FFF0C2]/50"
            >
              <FileEdit className="w-4 h-4 text-[#041A10]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.ctaAdmissionBtn}</span>
              <ArrowRight className={`w-4 h-4 text-[#041A10] ${lang === 'ur' ? 'rotate-180' : ''}`} />
            </button>

            <button
              id="cta-contact-us-btn"
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5E1A4] font-bold text-base border border-[#C99738]/50 backdrop-blur-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-[#ECC876]"
            >
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.ctaBtn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. CONTACT PREVIEW SECTION - Concierge Luxury Card */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-[#FAF7F2] to-white rounded-3xl p-7 sm:p-10 border-2 border-[#C99738]/30 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className={`flex items-center gap-5 text-center ${lang === 'ur' ? 'md:text-right' : 'md:text-left'}`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/50 shadow-md">
                <Phone className="w-8 h-8 text-[#ECC876]" />
              </div>
              <div className="space-y-1">
                <h3 className={`font-bold text-[#072B1B] ${
                  lang === 'ur' ? 'font-urdu-title text-2xl' : 'font-display text-xl sm:text-2xl'
                }`}>
                  {t.instituteName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 flex items-center justify-center md:justify-start gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C99738]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.contactPreviewLocation}</span>
                </p>
                <p dir="ltr" className="text-lg sm:text-xl font-extrabold text-[#0D5C3A] tracking-wider">
                  +92 309 4884183
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
              <button
                id="contact-preview-admission-btn"
                onClick={() => handleNav('admission')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_6px_20px_rgba(7,43,27,0.3)] text-[#F5E1A4] font-bold text-sm shadow-sm flex items-center justify-center gap-2 border border-[#C99738]/40 transition-all cursor-pointer"
              >
                <FileEdit className="w-4 h-4 text-[#ECC876]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
              </button>

              <a
                id="contact-preview-call-now-btn"
                href="tel:+923094884183"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#072B1B] font-bold text-sm transition-all border-2 border-[#C99738]/40 hover:border-[#C99738] shadow-xs flex items-center justify-center gap-2 cursor-pointer"
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
