import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, Clock, ArrowRight, FileEdit, ExternalLink } from 'lucide-react';
import { PageView, Language } from '../types.ts';
import { fetchLiveCourseUpdates, LiveCourseUpdate } from '../lib/supabase.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface NewCoursePosterPopupProps {
  setCurrentPage: (page: PageView, program?: string) => void;
  lang: Language;
}

export const NewCoursePosterPopup: React.FC<NewCoursePosterPopupProps> = ({
  setCurrentPage,
  lang
}) => {
  const [latestPoster, setLatestPoster] = useState<LiveCourseUpdate | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkNewPosters = async () => {
      try {
        const updates = await fetchLiveCourseUpdates();
        if (!isMounted || !updates || updates.length === 0) return;

        // Filter active courses that have a valid poster_url
        const posterCourses = updates.filter(
          item => item.is_active && item.poster_url && item.poster_url.trim() !== ''
        );

        if (posterCourses.length === 0) return;

        // Sort descending by created_at
        posterCourses.sort((a, b) => {
          const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
          const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
          return timeB - timeA;
        });

        const newest = posterCourses[0];
        if (!newest || !newest.poster_url) return;

        // Check if published within last 24 hours (86,400,000 ms)
        const now = Date.now();
        const createdTime = newest.created_at ? new Date(newest.created_at).getTime() : now;
        const diffHours = (now - createdTime) / (1000 * 60 * 60);

        // If poster is within 24 hours
        if (diffHours <= 24) {
          // Check if user already dismissed this specific poster in current session
          const dismissed = sessionStorage.getItem(`ikhlas_poster_dismissed_${newest.id}`);
          if (!dismissed) {
            setLatestPoster(newest);
            // Smooth delayed popup after 1 second
            const timer = setTimeout(() => {
              if (isMounted) setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
          }
        }
      } catch (err) {
        console.error('[PosterPopup Check Failed]:', err);
      }
    };

    checkNewPosters();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClose = () => {
    if (latestPoster) {
      sessionStorage.setItem(`ikhlas_poster_dismissed_${latestPoster.id}`, 'true');
    }
    setIsOpen(false);
  };

  const handleApply = () => {
    handleClose();
    setCurrentPage('admission', latestPoster?.title_ur || latestPoster?.title);
  };

  const handleViewCourses = () => {
    handleClose();
    setCurrentPage('courses');
  };

  if (!isOpen || !latestPoster || !latestPoster.poster_url) {
    return null;
  }

  const courseTitle = latestPoster.title_ur || latestPoster.title;
  const badgeText = latestPoster.badge_ur || latestPoster.badge || 'نیا کورس';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div 
        className="relative max-w-md sm:max-w-lg w-full bg-gradient-to-b from-[#072B1B] via-[#041A10] to-[#041A10] text-white rounded-3xl overflow-hidden border-2 border-[#ECC876] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(201,151,56,0.35)] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Glow Bar */}
        <div className="bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] p-2.5 px-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 text-[#041A10] font-extrabold text-xs">
            <Sparkles className="w-4 h-4 text-[#041A10] animate-spin" style={{ animationDuration: '4s' }} />
            <span className={lang === 'ur' ? 'font-urdu font-bold text-sm' : 'uppercase tracking-wider'}>
              {lang === 'ur' ? 'خصوصی اعلان • نیا کورس شائع ہوا ہے' : 'Special Announcement • New Course Published'}
            </span>
          </div>

          {/* Close (Cross) Button in Header */}
          <button
            onClick={handleClose}
            className="w-7 h-7 rounded-full bg-[#041A10]/20 hover:bg-[#041A10] text-[#041A10] hover:text-[#ECC876] transition-all flex items-center justify-center cursor-pointer shadow-xs"
            title="بند کریں (Close)"
            aria-label="Close Announcement"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Poster Image Display */}
        <div className="relative bg-black/50 max-h-[55vh] overflow-hidden flex items-center justify-center group">
          <img
            src={latestPoster.poster_url}
            alt={courseTitle}
            className="w-full h-auto max-h-[55vh] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Floating Badge on Image */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ECC876] to-[#D4AF37] text-[#041A10] font-extrabold text-xs px-3 py-1 rounded-full shadow-lg border border-white/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#041A10] animate-ping" />
            <span>{badgeText}</span>
          </div>

          {/* 24h Live Tag */}
          <div className="absolute top-3 left-3 bg-[#041A10]/85 backdrop-blur-md text-emerald-400 font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>آج کا تازہ ترین پوسٹر</span>
          </div>
        </div>

        {/* Content & Action Bar */}
        <div className="p-4 sm:p-5 space-y-3.5 bg-gradient-to-t from-[#041A10] via-[#041A10] to-[#072B1B]/70 border-t border-[#ECC876]/30">
          
          {/* Title & Metadata */}
          <div className="space-y-1 text-center sm:text-start">
            <h3 className={`font-bold text-[#F5E1A4] text-base sm:text-lg leading-snug ${lang === 'ur' ? 'font-urdu' : ''}`}>
              {courseTitle}
            </h3>

            {/* Timing / Dates row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-slate-300">
              {latestPoster.start_date && (
                <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                  <Calendar className="w-3 h-3 text-[#ECC876]" />
                  <span>آغاز: {latestPoster.start_date}</span>
                </span>
              )}
              {latestPoster.timing && (
                <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                  <Clock className="w-3 h-3 text-[#ECC876]" />
                  <span>اوقات: {latestPoster.timing}</span>
                </span>
              )}
              {latestPoster.deadline && (
                <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-500/30 font-semibold">
                  <span>آخری تاریخ: {latestPoster.deadline}</span>
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
            {/* Direct Apply Button */}
            <button
              onClick={handleApply}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ECC876] via-[#D4AF37] to-[#B8860B] hover:brightness-110 text-[#041A10] font-extrabold text-xs sm:text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <FileEdit className="w-4 h-4 text-[#041A10]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>ابھی داخلہ فارم پر کریں</span>
            </button>

            {/* View Course Section Button */}
            <button
              onClick={handleViewCourses}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ECC876]" />
              <span className={lang === 'ur' ? 'font-urdu' : ''}>تمام کورسز دیکھیں</span>
            </button>

            {/* Quick Dismiss Button */}
            <button
              onClick={handleClose}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-all cursor-pointer"
            >
              بند کریں
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
