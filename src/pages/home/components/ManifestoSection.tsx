import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

export default function ManifestoSection() {
  const { t } = useTranslation();

  return (
    <section
      id="clavia"
      className="relative bg-clavia-black text-clavia-offwhite py-28 md:py-40 px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full border border-clavia-purple/20 pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto">
        <Reveal>
          <Overline dark className="mb-14">
            {t('manifesto.overline')}
          </Overline>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-poppins font-semibold text-[2.4rem] md:text-[4rem] lg:text-[5rem] leading-[1.02] tracking-[-0.03em] mb-24">
            {t('manifesto.t1')}
            <br />
            {t('manifesto.t2')}
            <br />
            <span className="text-clavia-lilac">{t('manifesto.t3')}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            {[t('manifesto.p1'), t('manifesto.p2'), t('manifesto.p3')].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="font-poppins text-base md:text-lg text-clavia-offwhite/60 leading-relaxed">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <p className="font-courier text-sm uppercase tracking-[0.25em] text-clavia-lilac pt-6 border-t border-clavia-graphite-line">
                {t('manifesto.closing')}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}