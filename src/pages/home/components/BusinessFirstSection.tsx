import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

export default function BusinessFirstSection() {
  const { t } = useTranslation();
  const questions = (t('businessfirst.questions', { returnObjects: true }) as unknown as string[]) || [];

  return (
    <section className="bg-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Sticky title */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Overline className="mb-8">{t('businessfirst.overline')}</Overline>
              <h2 className="font-poppins font-semibold text-[2.4rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.02] tracking-[-0.03em] text-clavia-graphite">
                {t('businessfirst.t1')}
                <br />
                <span className="text-clavia-purple">{t('businessfirst.t2')}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Questions */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="font-poppins text-base md:text-lg text-clavia-graphite/55 leading-relaxed mb-12 max-w-lg">
              {t('businessfirst.lead')}
            </p>
          </Reveal>

          <div className="border-t border-clavia-graphite/12">
            {questions.map((q, index) => (
              <Reveal key={index} delay={index * 60}>
                <div className="group flex items-start gap-5 md:gap-8 py-6 border-b border-clavia-graphite/12 transition-colors duration-400">
                  <span className="font-courier text-[11px] text-clavia-graphite/30 mt-1.5 group-hover:text-clavia-purple transition-colors duration-400">
                    0{index + 1}
                  </span>
                  <p className="font-poppins text-lg md:text-xl text-clavia-graphite/80 leading-snug group-hover:text-clavia-graphite transition-colors duration-400">
                    {q}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="font-poppins text-base md:text-lg font-medium text-clavia-graphite mt-12 leading-snug max-w-md">
              {t('businessfirst.closing')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}