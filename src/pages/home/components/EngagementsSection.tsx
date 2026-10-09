import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';

interface EngagementItem {
  num: string;
  title: string;
  desc: string;
}

export default function EngagementsSection() {
  const { t } = useTranslation();
  const items = (t('engagements.items', { returnObjects: true }) as unknown as EngagementItem[]) || [];

  return (
    <section className="bg-clavia-offwhite-deep py-28 md:py-36 px-6 md:px-10">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <Reveal className="lg:col-span-5">
            <Overline className="mb-8">{t('engagements.overline')}</Overline>
            <h2 className="font-poppins font-semibold text-[2rem] md:text-[3rem] leading-[1.08] tracking-[-0.02em] text-clavia-graphite">
              {t('engagements.title')}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="font-poppins text-sm md:text-base text-clavia-graphite/50 leading-relaxed">{t('engagements.sub')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 70}>
              <div className="group bg-white rounded-lg p-8 h-full border border-clavia-graphite/8 hover:border-clavia-purple/30 transition-colors duration-500 flex flex-col">
                <span className="font-courier text-[11px] tracking-[0.3em] text-clavia-purple mb-10">{item.num}</span>
                <h3 className="font-poppins text-lg font-semibold text-clavia-graphite mb-3 leading-snug">{item.title}</h3>
                <p className="font-poppins text-sm text-clavia-graphite/50 leading-relaxed">{item.desc}</p>
                <span className="mt-auto pt-8">
                  <i className="ri-arrow-right-up-line text-clavia-graphite/25 group-hover:text-clavia-purple transition-colors duration-500 text-lg" />
                </span>
              </div>
            </Reveal>
          ))}

          {/* CTA filler card */}
          <Reveal delay={items.length * 70}>
            <div className="bg-clavia-graphite rounded-lg p-8 h-full flex flex-col justify-between">
              <p className="font-poppins text-xl font-semibold text-clavia-offwhite leading-snug">{t('contact.cta')}</p>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-3 text-clavia-lilac font-poppins text-sm font-medium hover:gap-4 transition-all duration-300 cursor-pointer"
              >
                {t('nav.cta')}
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}