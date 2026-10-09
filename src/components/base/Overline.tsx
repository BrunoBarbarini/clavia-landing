import type { ReactNode } from 'react';

interface OverlineProps {
  children: ReactNode;
  index?: string;
  dark?: boolean;
  className?: string;
}

export default function Overline({ children, index, dark = false, className = '' }: OverlineProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`w-6 h-px ${dark ? 'bg-clavia-lilac/70' : 'bg-clavia-purple'}`} />
      {index && (
        <span className={`font-courier text-[10px] tracking-[0.35em] ${dark ? 'text-clavia-lilac/60' : 'text-clavia-purple/60'}`}>
          {index}
        </span>
      )}
      <span
        className={`font-courier text-[10px] uppercase tracking-[0.35em] ${dark ? 'text-clavia-lilac' : 'text-clavia-purple'}`}
      >
        {children}
      </span>
    </div>
  );
}