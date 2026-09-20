import React, { useState, useEffect } from 'react';
import { 
  FileEdit, 
  RefreshCw, 
  ZoomIn, 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  Image as ImageIcon,
  ExternalLink,
  Info
} from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { IslamicStarIcon, SubtleBismillahOrnament } from './IslamicMotif.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { translations } from '../translations.ts';
import { fetchLiveCourseUpdates, LiveCourseUpdate } from '../lib/supabase.ts';

interface OurCoursesPageProps {
  setCurrentPage: (page: PageView, selectedProgram?: string) => void;
  lang: Language;
}

export const OurCoursesPage: React.FC<OurCoursesPageProps> = ({ setCurrentPage, lang }) => {
  const t = translations[lang];
  const [courses, setCourses] = useState<LiveCourseUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPoster, setSelectedPoster] = useState<{
    url: string;
    title: string;
    desc?: string;
    programKey?: string;
  } | null>(null);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const data = await fetchLiveCourseUpdates();
      // Filter ONLY items that have a poster_url uploaded from Supabase
      const postersOnly = data.filter(
        (item) => Boolean(item.poster_url && item.poster_url.trim())
      );
      setCourses(postersOnly);
    } catch (err) {
      console.error('Failed to load courses from Supabase:', err);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPoster(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleApplyCourse = (programTitle: string) => {
    setCurrentPage('admission', programTitle);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCourseWhatsAppLink = (courseTitle: string) => {
    const message = lang === 'ur'
      ? `السلام علیکم! مجھے الْإِخْلَاص اسلامک انسٹیٹیوٹ کے کورس "${courseTitle}" کے داخلے، شیڈول اور فیس کی تفصیلات درکار ہیں۔ براہِ کرم رہنمائی فرمائیں۔`
      : `Assalam-o-Alaikum! I saw the poster for "${courseTitle}" at Al-Ikhlas Islamic Institute and would like to inquire about admission, timing, and fee details.`;
    return `https://wa.me/923094884183?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* 1. HERO HEADER */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#041A10] via-[#072B1B] to-[#041A10] text-white overflow-hidden border-b border-[#C99738]/30">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial from-[#ECC876]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-4">
          <SubtleBismillahOrnament className="mb-2 text-[#ECC876]" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D5C3A]/70 text-[#F5E1A4] text-xs font-semibold border border-[#C99738]/40 shadow-xs">
            <IslamicStarIcon size={14} className="text-[#ECC876]" />
            <span className={lang === 'ur' ? 'font-urdu' : 'tracking-wide'}>
              {lang === 'ur' ? 'الْإِخْلَاص اسلامک انسٹیٹیوٹ • کورس پوسٹرز' : 'Al-Ikhlas Islamic Institute • Course Posters'}
            </span>
          </div>

          <h1 className={`font-bold tracking-tight text-white ${
            lang === 'ur' ? 'font-urdu-title text-3xl sm:text-4xl lg:text-5xl drop-shadow-xs' : 'font-display text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {lang === 'ur' ? 'ہمارے کورسز اور لائیو اعلانات' : 'Our Courses & Live Announcements'}
          </h1>

          <p className={`text-emerald-100/90 max-w-2xl mx-auto leading-relaxed ${
            lang === 'ur' ? 'font-urdu text-base sm:text-lg' : 'text-base sm:text-lg'
          }`}>
            {lang === 'ur' 
              ? 'ہمارے تمام نئے شروع ہونے والے کورسز، خصوصی ورکشاپس اور داخلہ اشتہارات کی تازہ ترین معلومات۔' 
              : 'Explore our latest course offerings, specialized workshops, and newly published admission flyers.'}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={loadCourses}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#ECC876] border border-[#ECC876]/40 text-xs font-bold transition-all cursor-pointer shadow-xs disabled:opacity-50"
              title={lang === 'ur' ? 'پوسٹرز ریفریش کریں' : 'Refresh Posters'}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>
                {loading 
                  ? (lang === 'ur' ? 'لوڈ ہو رہا ہے...' : 'Loading...') 
                  : (lang === 'ur' ? 'تازہ کریں (Refresh)' : 'Refresh')}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN POSTERS SECTION (ONLY SUPABASE POSTERS) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Loading State */}
        {loading && (
          <div className="text-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-[#C99738]/30 border-t-[#072B1B] rounded-full animate-spin mx-auto" />
            <p className={`text-[#072B1B] font-bold text-sm ${lang === 'ur' ? 'font-urdu' : ''}`}>
              {lang === 'ur' ? 'سپابیس سے کورس پوسٹرز لوڈ ہو رہے ہیں...' : 'Loading course posters from Supabase...'}
            </p>
          </div>
        )}

        {/* Empty State: No poster uploaded yet */}
        {!loading && courses.length === 0 && (
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#C99738]/30 shadow-lg space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#072B1B]/5 border border-[#C99738]/30 flex items-center justify-center mx-auto text-[#072B1B]">
              <ImageIcon className="w-8 h-8 text-[#0D5C3A]" />
            </div>

            <div className="space-y-2">
              <h3 className={`text-2xl font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu-title' : 'font-display'}`}>
                {lang === 'ur' ? 'فی الحال کوئی نیا کورس پوسٹر دستیاب نہیں ہے' : 'No Active Course Posters Currently'}
              </h3>
              <p className={`text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {lang === 'ur'
                  ? 'جیسے ہی ادارے کی جانب سے کسی نئے تعلیمی کورس یا ورکشاپ کا اعلان ہوگا، اس کا باقاعدہ پوسٹر یہاں شائع کر دیا جائے گا۔ کورسز اور داخلے کے بارے میں براہِ راست رہنمائی کے لیے آپ ہمارے داخلہ فارم یا واٹس ایپ پر رابطہ کر سکتے ہیں۔'
                  : 'New course announcements, workshops, and admission flyers will be published here. You may submit an admission inquiry or reach out via WhatsApp.'}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage('admission')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] font-bold text-xs shadow-md transition-all hover:brightness-110 cursor-pointer flex items-center gap-2"
              >
                <FileEdit className="w-4 h-4 text-[#ECC876]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.nav.admission}</span>
              </button>
              <a
                href="https://wa.me/923094884183"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#072B1B] font-bold text-xs border border-[#25D366]/40 transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                <span className={lang === 'ur' ? 'font-urdu' : ''}>{lang === 'ur' ? 'واٹس ایپ معلومات' : 'Inquire on WhatsApp'}</span>
              </a>
            </div>
          </div>
        )}

        {/* Live Posters Grid */}
        {!loading && courses.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#C99738]/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C99738]" />
                <h2 className={`text-xl sm:text-2xl font-bold text-[#072B1B] ${lang === 'ur' ? 'font-urdu-title' : 'font-display'}`}>
                  {lang === 'ur' ? `دستیاب کورس پوسٹرز (${courses.length})` : `Published Course Posters (${courses.length})`}
                </h2>
              </div>

              <span className={`text-xs text-slate-500 font-medium ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'تصویر پر کلک کر کے فل سائز میں دیکھیں' : 'Click on poster to expand'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => {
                const title = lang === 'ur' ? (course.title_ur || course.title) : course.title;
                const desc = lang === 'ur' ? (course.description_ur || course.description) : course.description;
                const badge = lang === 'ur' ? (course.badge_ur || course.badge || 'نیا کورس') : (course.badge || 'New Course');

                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl overflow-hidden border-2 border-[#C99738]/35 hover:border-[#ECC876] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Poster Image Display */}
                    <div
                      onClick={() => setSelectedPoster({
                        url: course.poster_url!,
                        title,
                        desc,
                        programKey: course.category
                      })}
                      className="relative w-full aspect-[4/5] overflow-hidden bg-slate-900 cursor-pointer select-none"
                    >
                      <img
                        src={course.poster_url}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Dark gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-[#ECC876] text-[#041A10] font-extrabold text-[11px] shadow-md">
                          {badge}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-black/60 text-[#ECC876] flex items-center justify-center backdrop-blur-xs shadow-md">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bottom Image Hint */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs pointer-events-none">
                        <span className="bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5">
                          <ZoomIn className="w-3.5 h-3.5 text-[#ECC876]" />
                          <span className={lang === 'ur' ? 'font-urdu' : ''}>
                            {lang === 'ur' ? 'پوسٹر بڑا کر کے دیکھیں' : 'View Full Poster'}
                          </span>
                        </span>
                        {course.deadline && (
                          <span className="bg-[#072B1B]/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[#ECC876] font-semibold text-[11px]">
                            {course.deadline}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Meta Details & Action Buttons */}
                    <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between bg-white text-start">
                      <div className="space-y-2">
                        <h3 className={`font-bold text-[#072B1B] text-lg sm:text-xl ${
                          lang === 'ur' ? 'font-urdu-title leading-relaxed' : 'font-display'
                        }`}>
                          {title}
                        </h3>

                        {desc && (
                          <p className={`text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                            lang === 'ur' ? 'font-urdu' : ''
                          }`}>
                            {desc}
                          </p>
                        )}

                        {/* Dates / Timings if provided */}
                        {(course.start_date || course.timing || course.duration) && (
                          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                            {course.start_date && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-slate-700 border border-[#C99738]/20 font-medium">
                                <Calendar className="w-3 h-3 text-[#0D5C3A]" />
                                <span className={lang === 'ur' ? 'font-urdu' : ''}>{course.start_date}</span>
                              </span>
                            )}
                            {course.timing && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-slate-700 border border-[#C99738]/20 font-medium">
                                <Clock className="w-3 h-3 text-[#C99738]" />
                                <span className={lang === 'ur' ? 'font-urdu' : ''}>{course.timing}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-[#C99738]/20 flex items-center gap-2">
                        <button
                          onClick={() => handleApplyCourse(title)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#041A10] to-[#0D5C3A] hover:from-[#0D5C3A] hover:to-[#041A10] text-[#F5E1A4] font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <FileEdit className="w-3.5 h-3.5 text-[#ECC876]" />
                          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.coursesPage.applyNow}</span>
                        </button>

                        <a
                          href={getCourseWhatsAppLink(title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#072B1B] border border-[#25D366]/30 flex items-center justify-center transition-colors cursor-pointer"
                          title={t.coursesPage.inquireWhatsApp}
                        >
                          <WhatsAppIcon size={18} className="text-[#25D366]" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* 3. FULL-SCREEN LIGHTBOX MODAL */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#041A10] border-2 border-[#ECC876]/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#041A10] border-b border-[#ECC876]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#ECC876]" />
                <h3 className={`text-base sm:text-lg font-bold text-white ${lang === 'ur' ? 'font-urdu-title' : 'font-display'}`}>
                  {selectedPoster.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedPoster(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5 text-[#ECC876]" />
              </button>
            </div>

            {/* Poster Image Body */}
            <div className="p-2 sm:p-4 flex-1 overflow-auto flex items-center justify-center bg-black/60">
              <img
                src={selectedPoster.url}
                alt={selectedPoster.title}
                className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-[#ECC876]/20"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:px-6 bg-[#041A10] border-t border-[#ECC876]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              {selectedPoster.desc && (
                <p className={`text-xs text-emerald-100/80 max-w-md ${lang === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {selectedPoster.desc}
                </p>
              )}

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const prog = selectedPoster.title;
                    setSelectedPoster(null);
                    handleApplyCourse(prog);
                  }}
                  className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] text-[#041A10] font-extrabold text-xs hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileEdit className="w-4 h-4" />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{t.coursesPage.applyNow}</span>
                </button>

                <a
                  href={getCourseWhatsAppLink(selectedPoster.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <WhatsAppIcon size={16} />
                  <span className={lang === 'ur' ? 'font-urdu' : ''}>{lang === 'ur' ? 'واٹس ایپ رابطہ' : 'WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
