import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowUpRight, Globe, FileEdit } from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon } from './IslamicMotif.tsx';
import { translations } from '../translations.ts';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  lang,
  setLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageView }[] = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.learning, id: 'learning' },
    { label: t.nav.admission, id: 'admission' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ur' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top information bar - Royal Emerald with Gold Hairline */}
      <div className="bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#041A10] text-[#E7E2D8] text-xs py-2 px-4 border-b border-[#C99738]/30 shadow-xs relative">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 relative">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-emerald-100/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#ECC876] drop-shadow-[0_0_4px_rgba(236,200,118,0.5)]" />
              {t.instituteLocation}
            </span>
            <span className="hidden sm:inline-block text-[#C99738]/60">•</span>
            <span className="hidden sm:inline-block text-[#F3E5AB]/80 tracking-wide">
              {t.instituteCategory}
            </span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              id="top-bar-phone-link"
              href="tel:+923094884183"
              dir="ltr"
              className="flex items-center gap-1.5 text-[#F5E1A4] hover:text-white font-semibold transition-all hover:drop-shadow-[0_0_8px_rgba(245,225,164,0.6)]"
            >
              <Phone className="w-3.5 h-3.5 text-[#ECC876]" />
              <span className="tracking-wide">+92 309 4884183</span>
            </a>

            {/* Language Switcher in Top Bar */}
            <button
              id="top-bar-lang-toggle"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#0D5C3A]/80 to-[#145738]/80 hover:from-[#145738] hover:to-[#0D5C3A] text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 hover:border-[#ECC876] shadow-xs hover:shadow-[0_0_12px_rgba(201,151,56,0.35)] transition-all cursor-pointer"
              title={lang === 'en' ? "اردو میں دیکھیں" : "Switch to English"}
            >
              <Globe className="w-3 h-3 text-[#ECC876]" />
              <span className={lang === 'en' ? 'font-urdu text-[11px]' : 'font-sans'}>
                {t.nav.switchLang}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar - Frosted Luxury Glass */}
      <nav
        className={`w-full bg-[#FAF7F2]/95 backdrop-blur-xl transition-all duration-300 border-b ${
          isScrolled 
            ? 'border-[#C99738]/30 shadow-[0_8px_30px_rgba(7,43,27,0.08)] py-3' 
            : 'border-[#C99738]/20 shadow-[0_2px_15px_rgba(7,43,27,0.03)] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 text-start group focus:outline-none focus:ring-2 focus:ring-[#C99738]/40 rounded-xl p-1 transition-all"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white via-[#FAF7F2] to-[#F3EFE6] p-1 shadow-md border-2 border-[#C99738]/40 ring-1 ring-[#C99738]/20 group-hover:border-[#C99738] group-hover:shadow-[0_0_15px_rgba(201,151,56,0.35)] transition-all shrink-0 flex items-center justify-center overflow-hidden">
              <img 
                src="/src/assets/images/logo.png" 
                alt="Al-Ikhlas Islamic Institute Logo" 
                className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className={`block font-bold tracking-tight text-[#072B1B] group-hover:text-[#0D5C3A] transition-colors ${
                lang === 'ur' ? 'font-urdu-title text-sm sm:text-lg md:text-xl text-start leading-snug sm:leading-relaxed py-0.5' : 'font-display text-base sm:text-lg md:text-xl leading-tight'
              }`}>
                {t.instituteName}
              </span>
              <span className={`block text-[9px] sm:text-[11px] font-bold text-[#9C7524] ${
                lang === 'ur' ? 'font-urdu tracking-normal' : 'tracking-[0.2em] uppercase'
              }`}>
                {t.instituteCategory}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-2xl bg-white/60 border border-[#C99738]/15 shadow-xs">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const isAdmission = item.id === 'admission';
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 relative ${
                    lang === 'ur' ? 'font-urdu text-base' : 'font-semibold'
                  } ${
                    isActive
                      ? 'text-[#072B1B] bg-gradient-to-b from-[#FAF7F2] to-white font-bold shadow-xs border border-[#C99738]/40'
                      : isAdmission
                        ? 'text-[#0D5C3A] font-bold hover:bg-[#0D5C3A]/10 hover:text-[#072B1B]'
                        : 'text-slate-700 hover:text-[#072B1B] hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-[#C99738]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons & Language Switch */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            {/* Language Switch Button */}
            <button
              id="nav-lang-toggle-btn"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#C99738]/30 bg-white/80 hover:bg-[#FAF7F2] text-slate-700 hover:text-[#072B1B] text-xs font-semibold shadow-xs hover:border-[#C99738] transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#C99738]" />
              <span className={lang === 'en' ? 'font-urdu text-xs' : 'font-sans'}>
                {t.nav.switchLang}
              </span>
            </button>

            {/* Admission Button in Navbar */}
            <button
              id="nav-admission-btn"
              onClick={() => handleNavClick('admission')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#F5E1A4] bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_4px_16px_rgba(201,151,56,0.3)] rounded-xl border border-[#C99738]/50 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileEdit className="w-3.5 h-3.5 text-[#ECC876]" />
              <span>{t.nav.admission}</span>
            </button>

            {/* Contact Button - Majestic Gold Metallic */}
            <button
              id="nav-contact-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#072B1B] bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] active:scale-[0.98] rounded-xl shadow-[0_4px_16px_rgba(201,151,56,0.3)] hover:shadow-[0_6px_22px_rgba(201,151,56,0.45)] border border-[#FFF0C2]/50 transition-all cursor-pointer"
            >
              <span>{t.nav.contactUs}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 text-[#072B1B] ${lang === 'ur' ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              id="mobile-header-lang-btn"
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 text-xs font-bold text-[#072B1B] bg-white rounded-xl border border-[#C99738]/30 flex items-center gap-1 shadow-xs"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C99738]" />
              <span className={lang === 'en' ? 'font-urdu text-xs' : 'font-sans'}>
                {lang === 'en' ? 'اردو' : 'EN'}
              </span>
            </button>

            <a
              id="mobile-header-call-btn"
              href="tel:+923094884183"
              className="p-2 text-[#F5E1A4] bg-gradient-to-r from-[#072B1B] to-[#0D5C3A] rounded-xl border border-[#C99738]/40 shadow-xs"
              aria-label="Call Al-Ikhlas Islamic Institute"
            >
              <Phone className="w-4 h-4 text-[#ECC876]" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-slate-700 hover:bg-[#FAF7F2] border border-transparent hover:border-[#C99738]/30 focus:outline-none transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#072B1B]" /> : <Menu className="w-6 h-6 text-[#072B1B]" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#C99738]/20 bg-[#FAF7F2]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const isAdmission = item.id === 'admission';
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-start px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                      lang === 'ur' ? 'font-urdu' : ''
                    } ${
                      isActive
                        ? 'bg-gradient-to-r from-[#072B1B] to-[#0D5C3A] text-[#F5E1A4] font-bold border border-[#C99738]/40 shadow-xs'
                        : isAdmission
                          ? 'text-[#0D5C3A] font-bold bg-[#0D5C3A]/10 border border-[#0D5C3A]/20'
                          : 'text-slate-700 hover:bg-white hover:text-[#072B1B]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <div className="w-2 h-2 rounded-full bg-[#ECC876] shadow-[0_0_6px_rgba(236,200,118,0.8)]" />
                    ) : isAdmission ? (
                      <span className="text-[10px] uppercase font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#072B1B] px-2 py-0.5 rounded-full shadow-xs">New</span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#C99738]/20 space-y-2">
              <button
                id="mobile-dropdown-lang-btn"
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-[#C99738]/30 shadow-xs"
              >
                <Globe className="w-4 h-4 text-[#C99738]" />
                <span>{lang === 'en' ? 'اردو زبان میں دیکھیں (Urdu)' : 'View in English'}</span>
              </button>

              <button
                id="mobile-dropdown-admission-btn"
                onClick={() => handleNavClick('admission')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-[#F5E1A4] bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] border border-[#C99738]/40 shadow-md"
              >
                <FileEdit className="w-4 h-4 text-[#ECC876]" />
                <span>{t.nav.admission}</span>
              </button>

              <a
                id="mobile-dropdown-call-now"
                href="tel:+923094884183"
                dir="ltr"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#072B1B] bg-white border border-[#C99738]/30 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#0D5C3A]" />
                <span>+92 309 4884183</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
