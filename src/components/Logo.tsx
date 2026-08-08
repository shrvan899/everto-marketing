import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
  variant = 'light',
  onClick,
}) => {
  const dimensions = {
    sm: { box: 'w-8 h-8 text-base rounded-md', fontSize: 'text-base', subText: 'text-[9px]' },
    md: { box: 'w-10 h-10 text-xl rounded-lg', fontSize: 'text-xl', subText: 'text-[10px]' },
    lg: { box: 'w-12 h-12 text-2xl rounded-xl', fontSize: 'text-2xl', subText: 'text-xs' },
    xl: { box: 'w-16 h-16 text-4xl rounded-2xl', fontSize: 'text-3xl', subText: 'text-sm' },
  }[size];

  const isDark = variant === 'dark';

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}
      role="button"
      aria-label="Everto Marketing Home"
    >
      <img
        src="/images/everto-marketing-logo.png"
        alt="Everto Marketing logo"
        className={`${dimensions.box} object-cover shadow-md shadow-indigo-600/20 transition-transform group-hover:scale-105 shrink-0`}
      />

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight uppercase font-display leading-none ${isDark ? 'text-white' : 'text-slate-900'} ${dimensions.fontSize}`}>
          EVERTO <span className="text-indigo-600">MARKETING</span>
        </div>
        {showTagline && (
          <span className={`text-[10px] tracking-wide font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Est. 2025 • Morabadi, Ranchi
          </span>
        )}
      </div>
    </div>
  );
};
