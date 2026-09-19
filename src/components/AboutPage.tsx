import React from 'react';
import { 
  BookOpen, 
  Heart, 
  Sparkles, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon, GeometricDivider, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';

interface AboutPageProps {
  setCurrentPage: (page: PageView) => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, lang }) => {
  const libraryImage = "/src/assets/images/learning_ambiance_1786878742181.jpg";
  const heroImage = "/src/assets/images/institute_hero_visual_1786878730473.jpg";
  const t = translations[lang];

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
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.about.pageBadge}</span>
          </div>

          <h1 className={`font-bold tracking-tight text-white ${
            lang === 'ur' ? 'font-urdu-title text-3xl sm:text-4xl lg:text-5xl drop-shadow-xs' : 'font-display text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {t.about.pageTitle}
          </h1>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {t.about.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Institute Purpose & Introduction */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className={`lg:col-span-7 space-y-6 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-widest text-[#9C7524] bg-white border border-[#C99738]/40 shadow-xs px-3.5 py-1.5 rounded-full ${
                lang === 'ur' ? 'font-urdu' : ''
              }`}>
                {t.about.purposeBadge}
              </span>
            </div>

            <h2 className={`font-bold text-[#072B1B] ${
              lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl lg:text-4xl' : 'font-display text-2xl sm:text-3xl lg:text-4xl'
            }`}>
              {t.about.purposeTitle}
            </h2>

            <p className={`text-slate-700 leading-relaxed ${
              lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
            }`}>
              {t.about.purposeText1}
            </p>

            <p className={`text-slate-600 leading-relaxed ${
              lang === 'ur' ? 'font-urdu text-base' : 'text-base'
            }`}>
              {t.about.purposeText2}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#C99738]/30 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] flex items-center justify-center shrink-0 border border-[#C99738]/40 shadow-xs">
                <MapPin className="w-5 h-5 text-[#ECC876]" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {t.about.purposeHighlight}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C99738]/40 ring-2 ring-[#C99738]/20 relative bg-[#072B1B]">
              <img
                src={libraryImage}
                alt="Study materials and peaceful library atmosphere"
                className="w-full h-[320px] sm:h-[390px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#C99738]/30">
                <p className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-base' : 'font-display text-sm'}`}>
                  {t.about.libraryCaptionTitle}
                </p>
                <p className={`text-slate-500 italic ${lang === 'ur' ? 'font-urdu text-xs' : 'text-xs'}`}>
                  {t.about.libraryCaptionSub}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission Section */}
      <section className="py-18 bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#F2ECE1] border-y border-[#C99738]/25 relative">
        <div className="absolute inset-0 bg-islamic-pattern opacity-60 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shadow-md border-2 border-[#C99738]/50">
            <IslamicStarIcon size={26} className="text-[#ECC876]" />
          </div>

          <h2 className={`font-bold text-[#072B1B] ${
            lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
          }`}>
            {t.about.missionTitle}
          </h2>

          <GeometricDivider />

          <p className={`text-[#072B1B] italic max-w-3xl mx-auto font-serif-luxury leading-relaxed font-medium ${
            lang === 'ur' ? 'font-urdu text-lg sm:text-xl' : 'text-lg sm:text-xl'
          }`}>
            {t.about.missionText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="luxury-card p-6 rounded-2xl text-center space-y-2.5 bg-white">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] mx-auto flex items-center justify-center border border-[#C99738]/40 shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-base' : 'font-display text-sm'}`}>
                {t.about.missionCards.knowledgeTitle}
              </h3>
              <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs' : 'text-xs'}`}>
                {t.about.missionCards.knowledgeDesc}
              </p>
            </div>

            <div className="luxury-card p-6 rounded-2xl text-center space-y-2.5 bg-white">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] mx-auto flex items-center justify-center border border-[#C99738]/40 shadow-xs">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-base' : 'font-display text-sm'}`}>
                {t.about.missionCards.characterTitle}
              </h3>
              <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs' : 'text-xs'}`}>
                {t.about.missionCards.characterDesc}
              </p>
            </div>

            <div className="luxury-card p-6 rounded-2xl text-center space-y-2.5 bg-white">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] mx-auto flex items-center justify-center border border-[#C99738]/40 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-base' : 'font-display text-sm'}`}>
                {t.about.missionCards.growthTitle}
              </h3>
              <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs' : 'text-xs'}`}>
                {t.about.missionCards.growthDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.about.valuesBadge}</span>
          </div>
          <h2 className={`font-bold text-[#072B1B] ${
            lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
          }`}>
            {t.about.valuesTitle}
          </h2>
          <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm sm:text-base'}`}>
            {t.about.valuesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.about.valuesList.map((val, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex items-start gap-4 text-start bg-white"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 mt-1 border border-[#C99738]/40 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu text-xl' : 'font-display text-base sm:text-lg'}`}>
                  {val.title}
                </h3>
                <p className={`text-slate-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Connection Banner */}
      <section className="bg-[#FAF7F2] pb-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#03150D] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border-2 border-[#C99738]/40 shadow-2xl">
          <div className="absolute inset-0 bg-islamic-pattern-dark opacity-30 pointer-events-none" />
          
          <h2 className={`font-bold text-white relative ${
            lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
          }`}>
            {t.about.commitmentTitle}
          </h2>

          <p className={`text-emerald-100/90 max-w-xl mx-auto leading-relaxed relative ${
            lang === 'ur' ? 'font-urdu text-base' : 'text-sm sm:text-base'
          }`}>
            {t.about.commitmentText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative pt-2">
            <button
              onClick={() => {
                setCurrentPage('learning');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-sm shadow-[0_6px_20px_rgba(201,151,56,0.4)] transition-all flex items-center gap-2 cursor-pointer border border-[#FFF0C2]/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.about.exploreProgramsBtn}</span>
              <ArrowRight className={`w-4 h-4 text-[#041A10] ${lang === 'ur' ? 'rotate-180' : ''}`} />
            </button>

            <a
              href="tel:+923094884183"
              dir="ltr"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5E1A4] font-bold text-sm border border-[#C99738]/50 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#ECC876]" />
              <span>+92 309 4884183</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
