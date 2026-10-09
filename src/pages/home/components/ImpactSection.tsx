import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';
import Marquee from '@/components/base/Marquee';

export default function ImpactSection() {
  const { t } = useTranslation();
  const down = (t('impact.down', { returnObjects: true }) as unknown as string[]) || [];
  const up = (t('impact.up', { returnObjects: true }) as unknown as string[]) || [];
  const principles = (t('principles', { returnObjects: true }) as unknown as string[]) || [];

  return (
    <section className="bg-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <Reveal>
          <Overline className="mb-8">{t('impact.overline')}</Overline>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <Reveal delay={60} className="lg:col-span-8">
            <h2 className="font-poppins font-semibold text-[2rem] md:text-[3.2rem] leading-[1.08] tracking-[-0.02em] text-clavia-graphite">
              {t('impact.title_1')}
              <br />
              <span className="text-clavia-purple">{t('impact.title_2')}</span>
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-4">
            <p className="font-poppins text-sm md:text-base text-clavia-graphite/50 leading-relaxed">{t('impact.sub')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reduce */}
          <Reveal direction="left">
            <div className="border border-clavia-graphite/12 rounded-lg p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-clavia-graphite/6">
                  <i className="ri-arrow-down-line text-clavia-graphite text-sm" />
                </span>
                <span className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-graphite/50">
                  {t('impact.down_label')}
                </span>
              </div>
              <ul className="space-y-6">
                {down.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-4 border-b border-clavia-graphite/8 pb-5 last:border-0">
                    <span className="font-courier text-[11px] text-clavia-graphite/30">↓</span>
                    <span className="font-poppins text-xl md:text-2xl font-medium text-clavia-graphite/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Increase */}
          <Reveal direction="right" delay={100}>
            <div className="border border-clavia-purple/25 rounded-lg p-8 md:p-10 h-full bg-white">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-clavia-purple/10">
                  <i className="ri-arrow-up-line text-clavia-purple text-sm" />
                </span>
                <span className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-purple">
                  {t('impact.up_label')}
                </span>
              </div>
              <ul className="space-y-6">
                {up.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-4 border-b border-clavia-graphite/8 pb-5 last:border-0">
                    <span className="font-courier text-[11px] text-clavia-purple/50">↑</span>
                    <span className="font-poppins text-xl md:text-2xl font-medium text-clavia-graphite/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Editorial marquee */}
      <div className="mt-20 border-y border-clavia-graphite/10">
        <Marquee items={principles} />
      </div>
    </section>
  );
}