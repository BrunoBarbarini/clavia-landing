import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    navigate(lang === 'en' ? '/en' : '/');
  };

  const currentLang = i18n.language;

  const navLinks = [
    { href: '#transformacao', label: t('nav.transformation') },
    { href: '#como-trabalhamos', label: t('nav.how_we_work') },
    { href: '#insights', label: t('nav.insights') },
    { href: '#clavia', label: t('nav.about') },
    { href: '#contato', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled ? 'bg-clavia-offwhite/90 backdrop-blur-md border-b border-clavia-graphite/8' : 'bg-transparent'
      }`}
    >
      <div className="px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <a href="#top" className="flex items-center gap-2 cursor-pointer">
            <span className="font-poppins text-lg font-semibold tracking-[0.28em] text-clavia-graphite">CLAVIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-clavia-purple" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-poppins text-[13px] font-medium tracking-wide text-clavia-graphite/70 hover:text-clavia-purple transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleLanguageChange('pt')}
                className={`font-courier text-[11px] tracking-widest px-2 py-1 transition-colors cursor-pointer ${
                  currentLang === 'pt' ? 'text-clavia-purple' : 'text-clavia-graphite/40 hover:text-clavia-graphite'
                }`}
              >
                PT
              </button>
              <span className="text-clavia-graphite/20 text-[10px]">/</span>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`font-courier text-[11px] tracking-widest px-2 py-1 transition-colors cursor-pointer ${
                  currentLang === 'en' ? 'text-clavia-purple' : 'text-clavia-graphite/40 hover:text-clavia-graphite'
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-clavia-graphite text-clavia-offwhite font-poppins text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-clavia-purple transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {t('nav.cta')}
              <i className="ri-arrow-right-line text-sm" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-2xl text-clavia-graphite`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-clavia-offwhite border-t border-clavia-graphite/8 transition-[max-height] duration-500 ease-out ${
          isMenuOpen ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-poppins text-sm font-medium text-clavia-graphite/80 hover:text-clavia-purple transition-colors cursor-pointer py-2.5"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-clavia-graphite/8">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleLanguageChange('pt')}
                className={`font-courier text-[11px] tracking-widest px-2 py-1 cursor-pointer ${
                  currentLang === 'pt' ? 'text-clavia-purple' : 'text-clavia-graphite/40'
                }`}
              >
                PT
              </button>
              <span className="text-clavia-graphite/20 text-[10px]">/</span>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`font-courier text-[11px] tracking-widest px-2 py-1 cursor-pointer ${
                  currentLang === 'en' ? 'text-clavia-purple' : 'text-clavia-graphite/40'
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-clavia-graphite text-clavia-offwhite font-poppins text-[13px] font-medium px-5 py-2.5 rounded-full cursor-pointer"
            >
              {t('nav.cta')}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}