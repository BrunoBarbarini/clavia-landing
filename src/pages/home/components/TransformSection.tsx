import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

interface SystemItem {
  num: string;
  tag: string;
  title: string;
  desc: string;
  list: string[];
}

export default function TransformSection() {
  const { t } = useTranslation();
  const items = (t('transform.items', { returnObjects: true }) as unknown as SystemItem[]) || [];

  return (
    <section id="transformacao" className="bg-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <Reveal className="lg:col-span-5">
            <Overline className="mb-8">{t('transform.overline')}</Overline>
            <h2 className="font-poppins font-semibold text-[2rem] md:text-[3rem] leading-[1.08] tracking-[-0.02em] text-clavia-graphite">
              {t('transform.title')}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="font-poppins text-sm md:text-base text-clavia-graphite/50 leading-relaxed">{t('transform.sub')}</p>
          </Reveal>
        </div>

        {/* Systems */}
        <div className="border-t border-clavia-graphite/12">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 60}>
              <div className="group border-b border-clavia-graphite/12 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 transition-colors duration-500 hover:bg-clavia-offwhite-deep/60">
                {/* Number + tag */}
                <div className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-3 items-baseline lg:items-start">
                  <span className="font-courier text-3xl md:text-4xl text-clavia-graphite/25 group-hover:text-clavia-purple transition-colors duration-500">
                    {item.num}
                  </span>
                  <span className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-purple">{item.tag}</span>
                </div>

                {/* Title + desc */}
                <div className="lg:col-span-4">
                  <h3 className="font-poppins text-xl md:text-2xl font-semibold text-clavia-graphite mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-sm text-clavia-graphite/50 leading-relaxed">{item.desc}</p>
                </div>

                {/* Capabilities */}
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap gap-2">
                    {item.list.map((cap) => (
                      <span
                        key={cap}
                        className="font-courier text-[10px] uppercase tracking-[0.12em] text-clavia-graphite/60 bg-white border border-clavia-graphite/10 px-3 py-1.5 rounded-full"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}