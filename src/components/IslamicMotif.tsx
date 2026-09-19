import React from 'react';

export const IslamicStarIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "text-[#C99738]", 
  size = 24 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECC876" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A4751A" />
        </linearGradient>
      </defs>
      <path 
        d="M12 2L14.5 7.5L20 5L17.5 10.5L23 13L17.5 15.5L20 21L14.5 18.5L12 24L9.5 18.5L4 21L6.5 15.5L1 13L6.5 10.5L4 5L9.5 7.5L12 2Z" 
        stroke="currentColor" 
        strokeWidth="1.3" 
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="13" r="1.2" fill="currentColor" />
    </svg>
  );
};

export const SubtleBismillahOrnament: React.FC<{ className?: string; text?: string }> = ({ 
  className = "",
  text = "فَاعۡبُدِ اللّٰہَ مُخۡلِصًا لَّہُ الدِّیۡنَ ؕ (سورۃ الزمر: 2)"
}) => {
  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-4 select-none ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className="h-px w-6 sm:w-16 bg-gradient-to-r from-transparent via-[#C99738]/60 to-[#C99738]" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
      </div>
      <span className="font-arabic text-lg sm:text-2xl tracking-wider text-[#0D5C3A] font-semibold text-center leading-relaxed drop-shadow-[0_1px_1px_rgba(201,151,56,0.25)]">
        {text}
      </span>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
        <span className="h-px w-6 sm:w-16 bg-gradient-to-l from-transparent via-[#C99738]/60 to-[#C99738]" />
      </div>
    </div>
  );
};

export const GeometricDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C99738]/50 to-[#C99738]" />
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rotate-45 border border-[#C99738] bg-[#FAF8F5] shadow-xs" />
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#072B1B] to-[#0D5C3A] border border-[#C99738]/60 shadow-[0_0_8px_rgba(201,151,56,0.3)]" />
        <div className="w-2 h-2 rotate-45 border border-[#C99738] bg-[#FAF8F5] shadow-xs" />
      </div>
      <div className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C99738]/50 to-[#C99738]" />
    </div>
  );
};
