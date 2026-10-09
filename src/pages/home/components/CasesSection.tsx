import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

interface CaseItem {
  tag: string;
  title: string;
}

export default function CasesSection() {
  const { t } = useTranslation();
  const items = (t('cases.items', { returnObjects: true }) as unknown as CaseItem[]) || [];

  return (
    <section className="bg-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <Reveal className="lg:col-span-5">
            <Overline className="mb-8">{t('cases.overline')}</Overline>
            <h2 className="font-poppins font-semibold text-[2rem] md:text-[3rem] leading-[1.08] tracking-[-0.02em] text-clavia-graphite">
              {t('cases.title')}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="font-poppins text-sm md:text-base text-clavia-graphite/50 leading-relaxed">{t('cases.sub')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-clavia-graphite/12">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 90}>
              <div className="bg-clavia-offwhite h-full p-8 md:p-10 flex flex-col">
                <span className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-purple mb-8">{item.tag}</span>
                <p className="font-poppins text-lg md:text-xl text-clavia-graphite leading-snug mb-10 flex-1">{item.title}</p>

                <div className="space-y-4 pt-6 border-t border-clavia-graphite/12">
                  {[t('cases.context'), t('cases.intervention'), t('cases.impact')].map((label) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <span className="font-courier text-[10px] uppercase tracking-[0.25em] text-clavia-graphite/45">
                        {label}
                      </span>
                      <span className="font-courier text-[10px] uppercase tracking-[0.2em] text-clavia-graphite/25">
                        {t('cases.placeholder')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}