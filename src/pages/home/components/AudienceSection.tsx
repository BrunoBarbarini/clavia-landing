import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

interface AudienceCard {
  role: string;
  question: string;
}

export default function AudienceSection() {
  const { t } = useTranslation();
  const cards = (t('audience.cards', { returnObjects: true }) as unknown as AudienceCard[]) || [];

  return (
    <section className="bg-clavia-offwhite py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <Reveal>
          <Overline className="mb-8">{t('audience.overline')}</Overline>
          <h2 className="font-poppins font-semibold text-[2rem] md:text-[3rem] leading-[1.1] tracking-[-0.02em] text-clavia-graphite max-w-3xl mb-16">
            {t('audience.title')}
          </h2>
        </Reveal>

        <div className="border-t border-clavia-graphite/12">
          {cards.map((card, index) => (
            <Reveal key={index} delay={index * 60}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-baseline py-8 md:py-10 border-b border-clavia-graphite/12 transition-colors duration-400">
                <div className="lg:col-span-3 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-clavia-graphite/20 group-hover:bg-clavia-purple transition-colors duration-400" />
                  <span className="font-courier text-xs uppercase tracking-[0.28em] text-clavia-graphite/60 group-hover:text-clavia-purple transition-colors duration-400">
                    {card.role}
                  </span>
                </div>
                <p className="lg:col-span-9 font-poppins text-xl md:text-2xl text-clavia-graphite/75 group-hover:text-clavia-graphite leading-snug transition-colors duration-400">
                  {card.question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}