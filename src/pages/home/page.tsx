import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/base/ScrollProgress';
import HeroSection from './components/HeroSection';
import ShiftSection from './components/ShiftSection';
import TransformSection from './components/TransformSection';
import DifferenceSection from './components/DifferenceSection';
import BusinessFirstSection from './components/BusinessFirstSection';
import MethodSection from './components/MethodSection';
import ImpactSection from './components/ImpactSection';
import ManifestoSection from './components/ManifestoSection';
import AudienceSection from './components/AudienceSection';
import EngagementsSection from './components/EngagementsSection';
import CasesSection from './components/CasesSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (location.pathname === '/en') i18n.changeLanguage('en');
    else i18n.changeLanguage('pt');
  }, [location.pathname, i18n]);

  return (
    <div className="min-h-screen bg-clavia-offwhite font-poppins relative">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <ShiftSection />
        <TransformSection />
        <DifferenceSection />
        <BusinessFirstSection />
        <MethodSection />
        <ImpactSection />
        <ManifestoSection />
        <AudienceSection />
        <EngagementsSection />
        <CasesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}