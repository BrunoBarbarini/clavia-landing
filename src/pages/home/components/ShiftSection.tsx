import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

export default function ShiftSection() {
  const { t } = useTranslation();

  const before = (t('shift.before', { returnObjects: true }) as unknown as string[]) || [];
  const after = (t('shift.after', { returnObjects: true }) as unknown as string[]) || [];

  return (
    <section id="mudanca" className="bg-clavia-graphite text-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <Reveal>
          <Overline dark className="mb-12">
            {t('shift.overline')}
          </Overline>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-poppins font-semibold text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] tracking-[-0.02em] max-w-4xl mb-20">
            {t('shift.t1')}
            <br />
            <span className="text-clavia-lilac">{t('shift.t2')}</span>
          </h2>
        </Reveal>

        {/* Before / After */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-4 items-center mb-24">
          {/* Before */}
          <Reveal direction="left" className="lg:col-span-5">
            <div className="border border-clavia-graphite-line rounded-lg p-8 md:p-10 h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="font-courier text-[11px] uppercase tracking-[0.35em] text-clavia-offwhite/40">
                  {t('shift.before_label')}
                </span>
                <span className="font-courier text-[11px] text-clavia-offwhite/20">—</span>
              </div>
              <ul className="space-y-5">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-courier text-[11px] text-clavia-offwhite/25 mt-1">0{i + 1}</span>
                    <span className="font-poppins text-sm md:text-base text-clavia-offwhite/55 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Arrow */}
          <div className="lg:col-span-1 flex items-center justify-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full border border-clavia-lilac/30 flex items-center justify-center">
              <i className="ri-arrow-right-line text-clavia-lilac text-lg rotate-90 lg:rotate-0" />
            </div>
          </div>

          {/* After */}
          <Reveal direction="right" delay={100} className="lg:col-span-5">
            <div className="border border-clavia-lilac/25 rounded-lg p-8 md:p-10 h-full bg-clavia-graphite-soft">
              <div className="flex items-center justify-between mb-8">
                <span className="font-courier text-[11px] uppercase tracking-[0.35em] text-clavia-lilac">
                  {t('shift.after_label')}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-clavia-lilac" />
              </div>
              <ul className="space-y-5">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-courier text-[11px] text-clavia-lilac/50 mt-1">0{i + 1}</span>
                    <span className="font-poppins text-sm md:text-base text-clavia-offwhite/85 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Closing */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-12 border-t border-clavia-graphite-line">
            <div>
              <span className="font-courier text-[11px] uppercase tracking-[0.35em] text-clavia-offwhite/35">
                {t('shift.closing_old_label')}
              </span>
              <p className="font-poppins text-2xl md:text-3xl font-medium text-clavia-offwhite/35 line-through decoration-1 mt-4">
                {t('shift.closing_old')}
              </p>
            </div>
            <div>
              <span className="font-courier text-[11px] uppercase tracking-[0.35em] text-clavia-lilac">
                {t('shift.closing_new_label')}
              </span>
              <p className="font-poppins text-2xl md:text-3xl font-semibold text-clavia-offwhite mt-4 leading-snug">
                {t('shift.closing_new')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}