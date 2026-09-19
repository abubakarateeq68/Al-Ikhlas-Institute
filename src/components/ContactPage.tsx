import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { ContactFormData, Language } from '../types.ts';
import { IslamicStarIcon, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { translations } from '../translations.ts';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneOrEmail: '',
    inquiryType: t.contact.subjectOptions.general,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.fullName.trim()) {
      setFormError(t.contact.validationName);
      return;
    }
    if (!formData.phoneOrEmail.trim()) {
      setFormError(t.contact.validationContact);
      return;
    }
    if (!formData.message.trim()) {
      setFormError(t.contact.validationMsg);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phoneOrEmail: '',
        inquiryType: t.contact.subjectOptions.general,
        message: ''
      });
    }, 800);
  };

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

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Information */}
          <div className={`lg:col-span-5 space-y-8 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
            
            {/* We'd Love to Hear From You */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D5C3A] bg-[#0D5C3A]/10 px-3.5 py-1.5 rounded-full border border-[#0D5C3A]/20">
                <MessageSquare className="w-3.5 h-3.5 text-[#C99738]" />
                <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>{t.contact.hearFromYouBadge}</span>
              </div>

              <h2 className={`font-bold text-[#072B1B] ${
                lang === 'ur' ? 'font-urdu-title text-2xl sm:text-3xl' : 'font-display text-2xl sm:text-3xl'
              }`}>
                {t.contact.hearFromYouTitle}
              </h2>

              <p className={`text-slate-700 leading-relaxed ${
                lang === 'ur' ? 'font-urdu text-base' : 'text-sm sm:text-base'
              }`}>
                {t.contact.hearFromYouText}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Telephone Card */}
              <div className="luxury-card p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/40 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider font-bold text-[#9C7524] ${lang === 'ur' ? 'font-urdu text-[11px]' : ''}`}>
                      {t.contact.phoneLabel}
                    </p>
                    <a
                      id="contact-page-phone-link"
                      href="tel:+923094884183"
                      dir="ltr"
                      className="text-lg font-bold text-[#072B1B] hover:text-[#0D5C3A] transition-colors tracking-wide"
                    >
                      +92 309 4884183
                    </a>
                  </div>
                </div>

                <a
                  id="contact-call-now-button"
                  href="tel:+923094884183"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] hover:shadow-[0_4px_16px_rgba(7,43,27,0.3)] text-[#F5E1A4] text-xs font-bold shadow-xs transition-all shrink-0 flex items-center gap-2 border border-[#C99738]/40 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ECC876]" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.home.callNow}</span>
                </a>
              </div>

              {/* WhatsApp Direct Card */}
              <div className="luxury-card p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-[#25D366]/40 hover:border-[#25D366]">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                    <WhatsAppIcon className="w-6 h-6 fill-[#128C7E] text-[#128C7E]" />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider font-bold text-slate-500 ${lang === 'ur' ? 'font-urdu text-[11px]' : ''}`}>
                      {lang === 'ur' ? 'واٹس ایپ رابطہ' : 'WhatsApp Chat'}
                    </p>
                    <a
                      id="contact-page-whatsapp-link"
                      href={`https://wa.me/923094884183?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے الْإِخْلَاص اسلامک انسٹیٹیوٹ کے بارے میں معلومات حاصل کرنی ہیں۔' : 'Assalamu Alaikum! I would like to inquire about Al-Ikhlas Islamic Institute.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="text-lg font-bold text-[#072B1B] hover:text-[#128C7E] transition-colors tracking-wide"
                    >
                      +92 309 4884183
                    </a>
                  </div>
                </div>

                <a
                  id="contact-whatsapp-chat-button"
                  href={`https://wa.me/923094884183?text=${encodeURIComponent(lang === 'ur' ? 'السلام علیکم! مجھے الْإِخْلَاص اسلامک انسٹیٹیوٹ کے بارے میں معلومات حاصل کرنی ہیں۔' : 'Assalamu Alaikum! I would like to inquire about Al-Ikhlas Islamic Institute.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{lang === 'ur' ? 'چیٹ شروع کریں' : 'Chat Now'}</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="luxury-card p-6 sm:p-7 rounded-2xl flex items-center gap-4 bg-white">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center shrink-0 border border-[#C99738]/40 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider font-bold text-[#9C7524] ${lang === 'ur' ? 'font-urdu text-[11px]' : ''}`}>
                    {t.contact.locationLabel}
                  </p>
                  <p className={`text-base font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {t.instituteLocation}
                  </p>
                  <p className={`text-xs text-slate-500 ${lang === 'ur' ? 'font-urdu text-xs' : ''}`}>
                    {t.instituteName}
                  </p>
                </div>
              </div>

            </div>

            {/* Respectful Note */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#C99738]/35 shadow-xs space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-bold text-[#072B1B]">
                <IslamicStarIcon size={16} className="text-[#ECC876]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.contact.noteTitle}</span>
              </div>
              <p className={`text-slate-700 leading-relaxed ${lang === 'ur' ? 'font-urdu text-xs sm:text-sm' : 'text-xs'}`}>
                {t.contact.noteText}
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-[#C99738]/30 shadow-xl relative overflow-hidden">
              <div className={`space-y-2 mb-7 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
                <h3 className={`font-bold text-[#072B1B] ${
                  lang === 'ur' ? 'font-urdu-title text-2xl' : 'font-display text-xl sm:text-2xl'
                }`}>
                  {t.contact.formTitle}
                </h3>
                <p className={`text-slate-600 ${lang === 'ur' ? 'font-urdu text-xs sm:text-sm' : 'text-xs sm:text-sm'}`}>
                  {t.contact.formSubtitle}
                </p>
              </div>

              {isSuccess ? (
                <div 
                  id="contact-form-success"
                  className="p-8 rounded-2xl bg-[#FAF7F2] border-2 border-[#C99738]/40 text-center space-y-4 shadow-sm"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center border border-[#C99738]/40 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu-title text-2xl' : 'font-display text-xl'}`}>
                      {t.contact.successTitle}
                    </h4>
                    <p className={`text-slate-700 max-w-md mx-auto ${lang === 'ur' ? 'font-urdu text-sm' : 'text-sm'}`}>
                      {t.contact.successDesc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      id="contact-send-another-btn"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#072B1B] via-[#0D5C3A] to-[#072B1B] text-[#F5E1A4] text-xs font-bold hover:shadow-md transition-all cursor-pointer border border-[#C99738]/40"
                    >
                      <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.contact.sendAnotherBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className={`space-y-5 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span className={lang === 'ur' ? 'font-urdu' : ''}>{formError}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="fullName" 
                      className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}
                    >
                      {t.contact.nameLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/25 text-slate-800 text-sm bg-[#FAF7F2]/50 hover:border-[#C99738]/40 outline-none transition-all"
                    />
                  </div>

                  {/* Phone or Email Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="phoneOrEmail" 
                      className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}
                    >
                      {t.contact.phoneEmailLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="phoneOrEmail"
                      name="phoneOrEmail"
                      required
                      placeholder={t.contact.phoneEmailPlaceholder}
                      value={formData.phoneOrEmail}
                      onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/25 text-slate-800 text-sm bg-[#FAF7F2]/50 hover:border-[#C99738]/40 outline-none transition-all"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="inquiryType" 
                      className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}
                    >
                      {t.contact.subjectLabel}
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/25 text-slate-800 text-sm bg-[#FAF7F2]/50 hover:border-[#C99738]/40 outline-none transition-all"
                    >
                      <option value={t.contact.subjectOptions.general}>{t.contact.subjectOptions.general}</option>
                      <option value={t.contact.subjectOptions.programs}>{t.contact.subjectOptions.programs}</option>
                      <option value={t.contact.subjectOptions.family}>{t.contact.subjectOptions.family}</option>
                      <option value={t.contact.subjectOptions.other}>{t.contact.subjectOptions.other}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="message" 
                      className={`block text-xs font-bold uppercase tracking-wider text-slate-700 ${lang === 'ur' ? 'font-urdu' : ''}`}
                    >
                      {t.contact.messageLabel} <span className="text-emerald-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/25 text-slate-800 text-sm bg-[#FAF7F2]/50 hover:border-[#C99738]/40 outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF0C2] hover:via-[#ECC876] hover:to-[#D4AF37] text-[#041A10] font-bold text-sm sm:text-base shadow-[0_6px_20px_rgba(201,151,56,0.4)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-75 cursor-pointer border border-[#FFF0C2]/50 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#041A10] border-t-transparent rounded-full animate-spin" />
                          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.contact.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.contact.submitBtn}</span>
                          <Send className={`w-4 h-4 text-[#041A10] ${lang === 'ur' ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

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
