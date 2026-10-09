import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import RotatingText from '@/components/base/RotatingText';

export default function HeroSection() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const step = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  const rotating = (t('hero.rotating', { returnObjects: true }) as unknown as string[]) || [];

  return (
    <section id="top" className="relative min-h-screen bg-clavia-offwhite overflow-hidden flex flex-col">
      {/* Decorative geometry */}
      <div className="absolute -bottom-[26rem] -right-[16rem] w-[52rem] h-[52rem] rounded-full border border-clavia-purple/12 pointer-events-none" />
      <div className="absolute -bottom-[20rem] -right-[10rem] w-[38rem] h-[38rem] rounded-full border border-clavia-purple/8 pointer-events-none" />
      <div className="absolute top-0 right-[22%] w-px h-full bg-clavia-graphite/6 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-[44%] w-px h-full bg-clavia-graphite/4 pointer-events-none hidden lg:block" />
      <div className="absolute top-[28%] left-6 md:left-10 w-2 h-2 bg-clavia-purple hidden lg:block" />

      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10 pt-32 pb-20">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Headline */}
          <div className="lg:col-span-8">
            <div style={step(0)}>
              <Overline className="mb-10">{t('hero.overline')}</Overline>
            </div>
            <h1
              className="font-poppins font-semibold text-clavia-graphite text-[2.5rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[4.9rem] leading-[1.05] tracking-[-0.02em]"
              style={step(120)}
            >
              {t('hero.t1')}
              <br />
              <span className="text-clavia-purple">{t('hero.t2')}</span>
              <br />
              {t('hero.t3')}
              <br />
              <span className="text-clavia-graphite/35">{t('hero.t4')}</span>
            </h1>
          </div>

          {/* Meta column */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:pb-3">
            <div style={step(240)}>
              <div className="w-full h-px bg-clavia-graphite/12 mb-8" />
              <p className="font-poppins text-base md:text-[17px] text-clavia-graphite/55 leading-relaxed mb-10">
                {t('hero.sub')}
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-3 bg-clavia-purple text-clavia-offwhite font-poppins text-sm font-medium px-8 py-4 rounded-full hover:bg-clavia-purple-dark transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  {t('hero.cta_primary')}
                  <i className="ri-arrow-right-line text-sm" />
                </a>
                <a
                  href="#como-trabalhamos"
                  className="inline-flex items-center justify-center gap-3 border border-clavia-graphite/20 text-clavia-graphite font-poppins text-sm font-medium px-8 py-4 rounded-full hover:border-clavia-purple hover:text-clavia-purple transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  {t('hero.cta_secondary')}
                </a>
              </div>
              <div className="flex items-center gap-2 mt-9">
                <span className="w-1.5 h-1.5 rounded-full bg-clavia-purple" />
                <span className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-graphite/40">Focus</span>
                <RotatingText
                  words={rotating}
                  className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-purple"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-clavia-graphite/10 px-6 md:px-10 py-6">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-clavia-graphite/35">Signature</span>
            <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-clavia-graphite/55">
              {t('hero.signature')}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-clavia-graphite/35">
              {t('hero.scroll')}
            </span>
            <div className="w-10 h-px bg-clavia-graphite/25" />
          </div>
        </div>
      </div>
    </section>
  );
}