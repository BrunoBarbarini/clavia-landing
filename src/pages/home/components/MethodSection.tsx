import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

interface MethodStep {
  num: string;
  title: string;
  desc: string;
}

export default function MethodSection() {
  const { t } = useTranslation();
  const steps = (t('method.steps', { returnObjects: true }) as unknown as MethodStep[]) || [];

  return (
    <section id="como-trabalhamos" className="bg-clavia-graphite text-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <Reveal className="lg:col-span-6">
            <Overline dark className="mb-8">
              {t('method.overline')}
            </Overline>
            <h2 className="font-poppins font-semibold text-[2rem] md:text-[3.2rem] leading-[1.08] tracking-[-0.02em]">
              {t('method.title')}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="font-poppins text-sm md:text-base text-clavia-offwhite/50 leading-relaxed">{t('method.sub')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-clavia-graphite-line">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 90}>
              <div className="group bg-clavia-graphite h-full p-7 md:p-6 lg:p-8 transition-colors duration-500 hover:bg-clavia-graphite-soft">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-courier text-2xl text-clavia-lilac/40 group-hover:text-clavia-lilac transition-colors duration-500">
                    {step.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-clavia-offwhite/20 group-hover:bg-clavia-lilac transition-colors duration-500" />
                </div>
                <h3 className="font-courier text-sm uppercase tracking-[0.28em] text-clavia-offwhite mb-4">{step.title}</h3>
                <p className="font-poppins text-sm text-clavia-offwhite/55 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}