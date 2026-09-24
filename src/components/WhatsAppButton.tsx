import React, { useState } from 'react';
import { Language } from '../types.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface WhatsAppButtonProps {
  lang: Language;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "923094884183";
  
  const urduMessage = "السلام علیکم! مجھے الاخلاص اسلامک انسٹیٹیوٹ لاہور کے کورسز اور آن لائن داخلے کے بارے میں رہنمائی درکار ہے۔";
  const englishMessage = "Assalamu Alaikum! I would like to inquire about courses and admissions at Al-Ikhlas Islamic Institute Lahore.";
  
  const selectedMessage = lang === 'ur' ? urduMessage : englishMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(selectedMessage)}`;

  return (
    <div 
      className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 flex items-center gap-3 select-none"
      dir="ltr"
    >
      {/* Floating expanded badge on desktop or hover */}
      <div 
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-emerald-950/10 text-slate-800 transition-all duration-300 transform ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-90 hover:opacity-100'
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className={`text-xs font-semibold text-[#083822] ${lang === 'ur' ? 'font-urdu' : ''}`}>
          {lang === 'ur' ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp'}
        </span>
      </div>

      {/* Main Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={lang === 'ur' ? 'واٹس ایپ پر رابطہ کریں' : 'Chat with us on WhatsApp'}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/35 hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-40" />

        {/* Real WhatsApp Brand Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200" />

        {/* Online Status Dot */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
