import React from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types.ts';
import { IslamicStarIcon, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { translations } from '../translations.ts';

interface ContactPageProps {
  lang: Language;
  setCurrentPage?: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, setCurrentPage }) => {
  const t = translations[lang];

  return (
    <div className="w-full bg-[#FAF7F2]">
      
      {/* Page Header - Royal Emerald & Gold */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#041A10] text-white overflow-hidden border-b border-[#C99738]/30">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial from-[#ECC876]/15 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-4">
          <SubtleBismillahOrnament className="mb-3 text-[#ECC876]" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D5C3A]/60 text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
            <IslamicStarIcon size={14} className="text-[#ECC876]" />
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.contact.pageBadge}</span>
          </div>

          <h1 className={`font-bold tracking-tight text-white ${
            lang === 'ur' ? 'font-urdu-title text-3xl sm:text-4xl lg:text-5xl drop-shadow-xs' : 'font-display text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {t.contact.pageTitle}
          </h1>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {t.contact.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Contact Section (Direct Communication Hub) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className={`max-w-3xl mb-12 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D5C3A] bg-[#0D5C3A]/10 px-3.5 py-1.5 rounded-full border border-[#0D5C3A]/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#C99738]" />
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.contact.hearFromYouBadge}</span>
          </div>

          <h2 className={`font-bold text-[#072B1B] ${
            lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl lg:text-4xl' : 'font-display text-2xl sm:text-3xl'
          }`}>
            {t.contact.hearFromYouTitle}
          </h2>

          <p className={`text-slate-700 leading-relaxed mt-2 ${
            lang === 'ur' ? 'font-urdu text-base' : 'text-sm sm:text-base'
          }`}>
            {t.contact.hearFromYouText}
          </p>
        </div>

        {/* 3-Column Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Telephone Card */}
          <div className="luxury-card p-7 rounded-3xl flex flex-col justify-between bg-white border border-[#C99738]/30 shadow-md hover:shadow-xl transition-all space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/40 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-wider font-bold text-[#9C7524] ${lang === 'ur' ? 'font-urdu text-[11px]' : ''}`}>
                  {t.contact.phoneLabel}
                </p>
                <a
                  id="contact-phone-direct-link"
                  href="tel:+923094884183"
                  dir="ltr"
                  className="text-xl font-bold text-[#072B1B] hover:text-[#0D5C3A] transition-colors tracking-wide block mt-1"
                >
                  +92 309 4884183
                </a>
              </div>
              <p className={`text-xs text-slate-500 leading-relaxed ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'پیر تا ہفتہ، صبح 8 بجے سے شام 8 بجے تک' : 'Monday to Saturday, 8:00 AM - 8:00 PM'}
              </p>
            </div>

            <a
              id="contact-call-btn"
              href="tel:+923094884183"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_4px_16px_rgba(7,43,27,0.3)] text-[#F5E1A4] text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 border border-[#C99738]/40 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.callNow}</span>
            </a>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="luxury-card p-7 rounded-3xl flex flex-col justify-between bg-white border border-[#25D366]/40 hover:border-[#25D366] shadow-md hover:shadow-xl transition-all space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center shrink-0 border border-[#25D366]/30 shadow-xs">
                <WhatsAppIcon className="w-7 h-7 fill-[#128C7E] text-[#128C7E]" />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-wider font-bold text-[#128C7E] ${lang === 'ur' ? 'font-urdu text-[11px]' : ''}`}>
                  {lang === 'ur' ? 'واٹس ایپ فوری رابطہ' : 'Instant WhatsApp'}
                </p>
                <a
                  id="contact-whatsapp-direct-link"
                  href={`https://wa.me/923094884183?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے الْإِخْلَاص اسلامک انسٹیٹیوٹ کے بارے میں معلومات حاصل کرنی ہیں۔' : 'Assalamu Alaikum! I would like to inquire about Al-Ikhlas Islamic Institute.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="text-xl font-bold text-[#072B1B] hover:text-[#128C7E] transition-colors tracking-wide block mt-1"
                >
                  +92 309 4884183
                </a>
              </div>
              <p className={`text-xs text-slate-500 leading-relaxed ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'براہِ راست چیٹ اور تعلیمی مشاورت' : 'Direct 24/7 Chat & Academic Counseling'}
              </p>
            </div>

            <a
              id="contact-whatsapp-btn"
              href={`https://wa.me/923094884183?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے الْإِخْلَاص اسلامک انسٹیٹیوٹ کے بارے میں معلومات حاصل کرنی ہیں۔' : 'Assalamu Alaikum! I would like to inquire about Al-Ikhlas Islamic Institute.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{lang === 'ur' ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp'}</span>
            </a>
          </div>

          {/* Location / Campus Card */}
          <div className="luxury-card p-7 rounded-3xl flex flex-col justify-between bg-white border border-[#C99738]/30 shadow-md hover:shadow-xl transition-all space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/40 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-wider font-bold text-[#9C7524] ${lang === 'ur' ? 'font-urdu text-[11px]' : ''}`}>
                  {t.contact.locationLabel}
                </p>
                <p className={`text-xl font-bold text-[#072B1B] mt-1 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                  {t.instituteLocation}
                </p>
              </div>
              <p className={`text-xs text-slate-500 leading-relaxed ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {t.instituteName} — {lang === 'ur' ? 'پنجاب، پاکستان' : 'Punjab, Pakistan'}
              </p>
            </div>

            <a
              id="contact-map-scroll-btn"
              href="#lahore-map-section"
              className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#072B1B] text-sm font-bold border border-[#C99738]/40 shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#0D5C3A]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{lang === 'ur' ? 'نقشہ دیکھیں' : 'View on Map'}</span>
            </a>
          </div>

        </div>

        {/* 2-Column Banner: Online Admission Callout & Respectful Guidance Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Official Admission Highlight Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#041A10] via-[#072B1B] to-[#041A10] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#C99738]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-islamic-pattern-dark opacity-30 pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#ECC876]/40 text-[#ECC876] text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{lang === 'ur' ? 'داخلہ فارم دستیاب ہے' : 'Online Admission Form'}</span>
              </div>

              <h3 className={`font-bold text-[#FAF7F2] ${lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl'}`}>
                {lang === 'ur' ? 'کیا آپ داخلہ لینا چاہتے ہیں؟' : 'Looking to Enroll in Our Programs?'}
              </h3>

              <p className={`text-emerald-100/90 leading-relaxed text-sm sm:text-base ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {lang === 'ur' 
                  ? 'آن لائن داخلے کے لیے ہمارا باقاعدہ داخلہ فارم موجود ہے۔ آپ اپنی تعلیمی معلومات اور مطلوبہ کورس منتخب کر کے باآسانی درخواست جمع کروا سکتے ہیں۔'
                  : 'Our dedicated online admission portal is open. You can select your desired program, provide your details, and submit your official application online.'}
              </p>
            </div>

            <div className="pt-6 relative z-10">
              {setCurrentPage ? (
                <button
                  id="contact-go-to-admission-btn"
                  onClick={() => setCurrentPage('admission')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#072B1B] font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(201,151,56,0.35)] transition-all flex items-center justify-center gap-3 cursor-pointer border border-[#FFF0C2]/50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <GraduationCap className="w-5 h-5 text-[#072B1B]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
                  <ArrowRight className={`w-4 h-4 text-[#072B1B] transition-transform ${lang === 'ur' ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <a
                  id="contact-go-to-admission-link"
                  href="#admission"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] text-[#072B1B] font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(201,151,56,0.35)] transition-all flex items-center justify-center gap-3 border border-[#FFF0C2]/50"
                >
                  <GraduationCap className="w-5 h-5 text-[#072B1B]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
                  <ArrowRight className={`w-4 h-4 text-[#072B1B] transition-transform ${lang === 'ur' ? 'rotate-180' : ''}`} />
                </a>
              )}
            </div>
          </div>

          {/* Respectful Guidance Note Card */}
          <div className="lg:col-span-5 luxury-card bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#C99738]/35 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#072B1B]">
                <IslamicStarIcon size={18} className="text-[#ECC876]" />
                <span className={`text-base text-[#072B1B] ${lang === 'ur' ? 'font-urdu' : ''}`}>{t.contact.noteTitle}</span>
              </div>
              <p className={`text-slate-700 leading-relaxed ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
                {t.contact.noteText}
              </p>
            </div>

            <div className="pt-4 border-t border-[#C99738]/20 flex items-center gap-3 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-[#0D5C3A] shrink-0" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>
                {lang === 'ur' ? 'تشریف آوری سے قبل فون یا واٹس ایپ پر وقت مقرر فرمائیں۔' : 'Kindly schedule an appointment prior to in-person visits.'}
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* MAP SECTION FOR LAHORE, PAKISTAN */}
      <section className="py-14 bg-[#FAF7F2] border-t border-[#C99738]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className={lang === 'ur' ? 'text-right' : 'text-left'}>
              <h3 className={`font-bold text-[#072B1B] ${
                lang === 'ur' ? 'font-urdu-title text-xl' : 'font-display text-xl'
              }`}>
                {t.contact.mapTitle}
              </h3>
              <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-xs sm:text-sm' : 'text-xs sm:text-sm'}`}>
                {t.contact.mapSubtitle}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#072B1B] bg-white px-4 py-2 rounded-full border border-[#C99738]/40 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.contact.mapBadge}</span>
            </div>
          </div>

          {/* Interactive Map Embed for Lahore */}
          <div className="rounded-3xl overflow-hidden border-2 border-[#C99738]/40 shadow-xl ring-2 ring-[#C99738]/20 h-[300px] sm:h-[370px] bg-slate-100 relative">
            <iframe
              id="lahore-location-map"
              title="Lahore Pakistan Map Location"
              src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
