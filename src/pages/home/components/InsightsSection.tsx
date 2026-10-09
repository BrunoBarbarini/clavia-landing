import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

interface InsightItem {
  num: string;
  category: string;
  title: string;
  meta: string;
}

export default function InsightsSection() {
  const { t } = useTranslation();
  const items = (t('insights.items', { returnObjects: true }) as unknown as InsightItem[]) || [];

  return (
    <section id="insights" className="bg-clavia-graphite text-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <Reveal className="lg:col-span-6">
            <Overline dark className="mb-8">
              {t('insights.overline')}
            </Overline>
            <h2 className="font-poppins font-semibold text-[2.4rem] md:text-[3.4rem] leading-none tracking-[-0.02em]">
              {t('insights.title')}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="font-poppins text-sm md:text-base text-clavia-offwhite/50 leading-relaxed">{t('insights.sub')}</p>
          </Reveal>
        </div>

        <div className="border-t border-clavia-graphite-line">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 60}>
              <a
                href="#insights"
                className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center py-8 md:py-10 border-b border-clavia-graphite-line cursor-pointer"
              >
                <span className="lg:col-span-1 font-courier text-[11px] text-clavia-offwhite/30 group-hover:text-clavia-lilac transition-colors duration-400">
                  {item.num}
                </span>
                <span className="lg:col-span-3 font-courier text-[11px] uppercase tracking-[0.28em] text-clavia-lilac/70">
                  {item.category}
                </span>
                <p className="lg:col-span-6 font-poppins text-lg md:text-xl text-clavia-offwhite/80 group-hover:text-clavia-offwhite leading-snug transition-colors duration-400">
                  {item.title}
                </p>
                <span className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4">
                  <span className="font-courier text-[10px] uppercase tracking-[0.25em] text-clavia-offwhite/30">
                    {item.meta}
                  </span>
                  <i className="ri-arrow-right-line text-clavia-offwhite/40 group-hover:text-clavia-lilac group-hover:translate-x-1 transition-all duration-400" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <a
            href="#insights"
            className="inline-flex items-center gap-3 mt-12 font-poppins text-sm font-medium text-clavia-lilac hover:gap-4 transition-all duration-300 cursor-pointer"
          >
            {t('insights.cta')}
            <i className="ri-arrow-right-line" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}