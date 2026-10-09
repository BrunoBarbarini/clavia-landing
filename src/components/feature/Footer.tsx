import { useTranslation } from 'react-i18next';
import Overline from '@/components/base/Overline';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#transformacao', label: t('nav.transformation') },
    { href: '#como-trabalhamos', label: t('nav.how_we_work') },
    { href: '#insights', label: t('nav.insights') },
    { href: '#clavia', label: t('nav.about') },
    { href: '#contato', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-clavia-offwhite border-t border-clavia-graphite/10">
      <div className="px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Statement */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-poppins text-lg font-semibold tracking-[0.28em] text-clavia-graphite">CLAVIA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-clavia-purple" />
            </div>
            <p className="font-poppins text-2xl md:text-3xl font-semibold text-clavia-graphite leading-tight max-w-sm">
              {t('footer.statement')}
            </p>
            <p className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-purple mt-6">
              {t('footer.manifesto')}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <Overline className="mb-6">{t('footer.navigation')}</Overline>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm text-clavia-graphite/55 hover:text-clavia-purple transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <Overline className="mb-6">{t('footer.contact')}</Overline>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="font-poppins text-sm text-clavia-graphite/55 hover:text-clavia-purple transition-colors cursor-pointer"
                >
                  {t('footer.email')}
                </a>
              </li>
              <li className="font-poppins text-sm text-clavia-graphite/55">{t('footer.location')}</li>
            </ul>
            <div className="flex gap-3 mt-7">
              <a
                href="#contato"
                className="w-10 h-10 flex items-center justify-center border border-clavia-graphite/15 rounded-full text-clavia-graphite/70 hover:border-clavia-purple hover:text-clavia-purple transition-colors duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line text-base" />
              </a>
              <a
                href="#contato"
                className="w-10 h-10 flex items-center justify-center border border-clavia-graphite/15 rounded-full text-clavia-graphite/70 hover:border-clavia-purple hover:text-clavia-purple transition-colors duration-300 cursor-pointer"
                aria-label="Email"
              >
                <i className="ri-mail-line text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="border-t border-clavia-graphite/10 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <span className="font-poppins text-[16vw] lg:text-[9vw] leading-[0.8] font-bold tracking-tight text-clavia-graphite/8 select-none">
              CLAVIA
            </span>
            <a
              href="#top"
              className="font-courier text-[11px] uppercase tracking-[0.3em] text-clavia-graphite/45 hover:text-clavia-purple transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
            >
              <i className="ri-arrow-up-line" />
              {t('footer.back_to_top')}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-clavia-graphite/8">
            <p className="font-courier text-[10px] uppercase tracking-widest text-clavia-graphite/35">{t('footer.rights')}</p>
            <div className="flex gap-6">
              <a href="#" className="font-poppins text-xs text-clavia-graphite/40 hover:text-clavia-purple transition-colors cursor-pointer">
                {t('footer.terms')}
              </a>
              <a href="#" className="font-poppins text-xs text-clavia-graphite/40 hover:text-clavia-purple transition-colors cursor-pointer">
                {t('footer.privacy')}
              </a>
              <a href="https://readdy.ai/?origin=logo" rel="nofollow" className="font-poppins text-xs text-clavia-graphite/40 hover:text-clavia-purple transition-colors cursor-pointer">
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}