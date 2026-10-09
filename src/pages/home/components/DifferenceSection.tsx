import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

interface DiffBlock {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

export default function DifferenceSection() {
  const { t } = useTranslation();
  const blocks = (t('difference.blocks', { returnObjects: true }) as unknown as DiffBlock[]) || [];
  const flow = (t('difference.flow', { returnObjects: true }) as unknown as string[]) || [];

  return (
    <section id="diferencial" className="bg-clavia-purple text-clavia-offwhite py-28 md:py-36 px-6 md:px-10 relative overflow-hidden">
      {/* subtle geometry */}
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full border border-white/10 pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto">
        <Reveal>
          <span className="font-courier text-[10px] uppercase tracking-[0.35em] text-clavia-lilac mb-10 inline-block">
            {t('difference.overline')}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <Reveal delay={60} className="lg:col-span-8">
            <h2 className="font-poppins font-semibold text-[2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.1] tracking-[-0.02em]">
              {t('difference.t1')}
              <br />
              <span className="text-clavia-lilac">{t('difference.t2')}</span>
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-4 flex lg:items-end">
            <p className="font-poppins text-base md:text-lg font-medium text-clavia-offwhite/90 leading-snug border-l-2 border-clavia-lilac pl-5">
              {t('difference.lead')}
            </p>
          </Reveal>
        </div>

        {/* Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {blocks.map((block, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="border border-white/20 rounded-lg p-8 h-full bg-white/5 hover:bg-white/10 transition-colors duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="w-11 h-11 flex items-center justify-center rounded-full border border-clavia-lilac/40">
                    <i className={`${block.icon} text-clavia-lilac text-lg`} />
                  </span>
                  <span className="font-courier text-[11px] tracking-[0.3em] text-clavia-lilac">{block.num}</span>
                </div>
                <h3 className="font-courier text-sm uppercase tracking-[0.3em] text-clavia-offwhite mb-4">{block.title}</h3>
                <p className="font-poppins text-sm text-clavia-offwhite/75 leading-relaxed">{block.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Flow */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/20 pt-10">
            {flow.map((step, index) => (
              <span key={step} className="flex items-center gap-4">
                <span className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-offwhite/80">{step}</span>
                {index < flow.length - 1 && <i className="ri-arrow-right-line text-clavia-lilac/60 text-sm" />}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}