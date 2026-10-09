import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';
import Reveal from '@/components/base/Reveal';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contato" className="relative bg-clavia-graphite text-clavia-offwhite pt-28 md:pt-40 pb-28 md:pb-36 px-6 md:px-10 overflow-hidden">
      <div className="absolute -top-40 right-[-10rem] w-[36rem] h-[36rem] rounded-full border border-clavia-purple/20 pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto">
        <Reveal>
          <Overline dark className="mb-12">
            {t('contact.overline')}
          </Overline>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-poppins font-semibold text-[2.2rem] md:text-[3.4rem] lg:text-[4rem] leading-[1.06] tracking-[-0.03em] mb-24 max-w-5xl">
            {t('contact.t1')}
            <br />
            <span className="text-clavia-offwhite/45">{t('contact.t2')}</span>
            <br />
            {t('contact.t3')}
            <br />
            <span className="text-clavia-lilac">{t('contact.t4')}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <h3 className="font-courier text-sm uppercase tracking-[0.3em] text-clavia-offwhite mb-6">{t('contact.cta')}</h3>
            <p className="font-poppins text-base md:text-lg text-clavia-offwhite/55 leading-relaxed max-w-sm">
              {t('contact.sub')}
            </p>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}