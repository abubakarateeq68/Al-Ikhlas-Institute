/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Globe, FileEdit } from 'lucide-react';
import { PageView, Language } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './components/HomePage.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { OurCoursesPage } from './components/OurCoursesPage.tsx';
import { LearningPage } from './components/LearningPage.tsx';
import { AdmissionPage } from './components/AdmissionPage.tsx';
import { ContactPage } from './components/ContactPage.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { translations } from './translations.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<Language>('ur'); // Default in Urdu as requested by user

  useEffect(() => {
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handlePageChange = (page: PageView, program?: string) => {
    if (program) {
      setSelectedProgram(program);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[lang];

  return (
    <div 
      dir={lang === 'ur' ? 'rtl' : 'ltr'} 
      className={`min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#C99738]/30 selection:text-[#072B1B] ${
        lang === 'ur' ? 'font-urdu' : 'font-body'
      }`}
    >
      
      {/* Sticky Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-0 overflow-x-hidden">
        {currentPage === 'home' && <HomePage setCurrentPage={handlePageChange} lang={lang} />}
        {currentPage === 'about' && <AboutPage setCurrentPage={handlePageChange} lang={lang} />}
        {currentPage === 'courses' && <OurCoursesPage setCurrentPage={handlePageChange} lang={lang} />}
        {currentPage === 'learning' && <LearningPage setCurrentPage={handlePageChange} lang={lang} />}
        {currentPage === 'admission' && <AdmissionPage setCurrentPage={handlePageChange} lang={lang} selectedProgram={selectedProgram} />}
        {currentPage === 'contact' && <ContactPage setCurrentPage={handlePageChange} lang={lang} />}
      </main>

      {/* Persistent Footer */}
      <Footer 
        setCurrentPage={handlePageChange} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton lang={lang} />

      {/* Mobile Sticky Quick Action Bar - Royal Emerald & Gold */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-gradient-to-r from-[#041A10]/95 via-[#072B1B]/95 to-[#041A10]/95 backdrop-blur-xl text-white p-2 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-[#C99738]/40 flex items-center justify-between gap-1.5 ring-1 ring-[#C99738]/20">
        <button
          id="mobile-sticky-admission-btn"
          onClick={() => handlePageChange('admission')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:brightness-110 text-[#041A10] text-xs font-extrabold transition-all shadow-sm"
        >
          <FileEdit className="w-3.5 h-3.5 text-[#041A10] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
        </button>

        <a
          id="mobile-sticky-call-btn"
          href="tel:+923094884183"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-[#072B1B] to-[#0D5C3A] hover:bg-[#147249] text-white text-xs font-bold border border-[#C99738]/30 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#ECC876] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.callNow}</span>
        </a>

        <button
          id="mobile-sticky-inquire-btn"
          onClick={() => handlePageChange('contact')}
          className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-[#C99738]/30 transition-colors shrink-0"
          title={t.nav.contactUs}
        >
          <MessageSquare className="w-4 h-4 text-[#ECC876]" />
        </button>

        <button
          id="mobile-sticky-lang-btn"
          onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
          className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#ECC876] border border-[#C99738]/30 transition-colors shrink-0"
          title="Toggle Language"
        >
          <Globe className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
