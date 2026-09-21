import React from 'react';
import { Phone, MapPin, ArrowUp, Globe, FileEdit } from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon, GeometricDivider } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';
import logoImg from '../assets/images/logo.png';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, lang, setLang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04180F] text-slate-200 border-t border-[#C99738]/30 relative overflow-hidden">
      {/* Decorative ambient top border with radiant gold glow */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ECC876] to-transparent shadow-[0_0_12px_rgba(236,200,118,0.8)]" />
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 sm:pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-12 border-b border-[#C99738]/20">
          
          {/* Institute Brand & Motto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-lg border-2 border-[#C99738]/50 ring-1 ring-[#C99738]/25 shrink-0 flex items-center justify-center overflow-hidden">
                <img 
                  src={logoImg} 
                  alt="Al-Ikhlas Islamic Institute Logo" 
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className={`font-bold text-white tracking-wide ${
                  lang === 'ur' ? 'font-urdu-title text-2xl' : 'font-display text-xl'
                }`}>
                  {t.instituteName}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#ECC876] font-bold">
                  {t.instituteLocation}
                </p>
              </div>
            </div>

            <p className={`italic text-[#F5E1A4] tracking-wide pt-1 ${
              lang === 'ur' ? 'font-urdu text-base' : 'font-display text-sm'
            }`}>
              {t.footer.motto}
            </p>

            <p className={`text-emerald-100/70 max-w-md leading-relaxed ${
              lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'
            }`}>
              {t.footer.desc}
            </p>

            {/* Language Switch Button in Footer */}
            <div className="pt-2">
              <button
                id="footer-lang-toggle"
                onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D5C3A]/40 hover:bg-[#0D5C3A]/70 text-[#F5E1A4] border border-[#C99738]/40 text-xs font-semibold shadow-xs hover:border-[#ECC876] transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#ECC876]" />
                <span>{lang === 'en' ? 'اردو میں دیکھیں (Urdu)' : 'View in English'}</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ECC876] border-b border-[#C99738]/20 pb-2">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNav('home')}
                  className={`text-slate-300 hover:text-[#ECC876] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 group ${
                    lang === 'ur' ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-[#C99738] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.home}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNav('about')}
                  className={`text-slate-300 hover:text-[#ECC876] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 group ${
                    lang === 'ur' ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-[#C99738] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-courses"
                  onClick={() => handleNav('courses')}
                  className={`text-slate-300 hover:text-[#ECC876] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 group ${
                    lang === 'ur' ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-[#C99738] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.courses}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-learning"
                  onClick={() => handleNav('learning')}
                  className={`text-slate-300 hover:text-[#ECC876] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 group ${
                    lang === 'ur' ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-[#C99738] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.learning}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-admission"
                  onClick={() => handleNav('admission')}
                  className={`text-slate-300 hover:text-[#ECC876] font-semibold transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 group ${
                    lang === 'ur' ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <FileEdit className="w-3.5 h-3.5 text-[#ECC876]" />
                  <span>{t.nav.admission}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNav('contact')}
                  className={`text-slate-300 hover:text-[#ECC876] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 group ${
                    lang === 'ur' ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-[#C99738] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.contact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Admission Action */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ECC876] border-b border-[#C99738]/20 pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#ECC876] shrink-0 mt-0.5" />
                <span className={lang === 'ur' ? 'font-urdu text-sm' : ''}>{t.instituteLocation}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ECC876] shrink-0 mt-0.5" />
                <a
                  id="footer-phone-link"
                  href="tel:+923094884183"
                  dir="ltr"
                  className="text-white hover:text-[#ECC876] font-bold tracking-wide transition-colors"
                >
                  +92 309 4884183
                </a>
              </div>
              
              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  id="footer-admission-cta-btn"
                  onClick={() => handleNav('admission')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] shadow-[0_4px_16px_rgba(201,151,56,0.35)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileEdit className="w-3.5 h-3.5 text-[#041A10]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.footer.applyAdmissionBtn}</span>
                </button>

                <button
                  id="footer-inquire-btn"
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center text-xs font-bold px-4 py-2.5 rounded-xl bg-[#0D5C3A]/50 hover:bg-[#0D5C3A] text-[#F5E1A4] border border-[#C99738]/40 hover:border-[#ECC876] transition-all cursor-pointer"
                >
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.footer.reachOutBtn}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p id="copyright-text" className={lang === 'ur' ? 'font-urdu text-xs' : ''}>
            {t.footer.copyright}
          </p>

          {/* Developer Credit */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-100/80" dir="ltr">
            <span>Developed by</span>
            <a
              id="developer-credit-link"
              href="https://www.kaleemullahzahid.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ECC876] hover:text-white font-semibold underline underline-offset-4 decoration-[#ECC876]/50 hover:decoration-white transition-colors"
            >
              Kaleem Ullah Zahid
            </a>
          </div>

          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#ECC876] transition-colors group cursor-pointer"
          >
            <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ECC876] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
