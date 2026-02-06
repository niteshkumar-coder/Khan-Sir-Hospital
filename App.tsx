
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import ServicesOverview from './sections/ServicesOverview';
import ServicesPage from './sections/ServicesPage';
import DialysisSection from './sections/Dialysis';
import BloodBankSection from './sections/BloodBank';
import EmergencySection from './sections/Emergency';
import NewsSection from './sections/News';
import DoctorsSection from './sections/Doctors';
import DoctorsPage from './sections/DoctorsPage';
import AppointmentSection from './sections/Appointment';
import AppointmentPage from './sections/AppointmentPage';
import ContactPage from './sections/ContactPage';
import OpdInfo from './sections/OpdInfo';
import Careers from './sections/Careers';
import ResourcesSection from './sections/Resources';
import LocationSection from './sections/Location';
import CommunitySection from './sections/Community';
import ContactSection from './sections/Contact';
import PrivacyPolicy from './sections/PrivacyPolicy';
import SymptomChecker from './components/SymptomChecker';

// Ensure plugin is registered safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ViewState = 'home' | 'privacy' | 'appointment' | 'doctors' | 'services' | 'contact';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>('home');

  useEffect(() => {
    // Global scroll orchestration
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Faster refresh for better responsiveness

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [activeView]);

  const handleBackToHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderActiveView = () => {
    const commonNav = (
      <Navigation 
        onBookClick={() => setActiveView('appointment')} 
        onDoctorsClick={() => setActiveView('doctors')}
        onServicesClick={() => setActiveView('services')}
        onContactClick={() => setActiveView('contact')}
      />
    );

    const footerWithPrivacy = (
      <ContactSection onPrivacyClick={() => setActiveView('privacy')} />
    );

    switch (activeView) {
      case 'privacy':
        return (
          <div className="relative overflow-x-hidden">
            {commonNav}
            <PrivacyPolicy onBack={handleBackToHome} />
            {footerWithPrivacy}
          </div>
        );
      case 'appointment':
        return (
          <div className="relative overflow-x-hidden">
            {commonNav}
            <AppointmentPage onBack={handleBackToHome} />
            {footerWithPrivacy}
          </div>
        );
      case 'doctors':
        return (
          <div className="relative overflow-x-hidden">
            {commonNav}
            <DoctorsPage onBack={handleBackToHome} onBookClick={() => setActiveView('appointment')} />
            {footerWithPrivacy}
          </div>
        );
      case 'services':
        return (
          <div className="relative overflow-x-hidden">
            {commonNav}
            <ServicesPage onBack={handleBackToHome} onBookClick={() => setActiveView('appointment')} />
            {footerWithPrivacy}
          </div>
        );
      case 'contact':
        return (
          <div className="relative overflow-x-hidden">
            {commonNav}
            <ContactPage onBack={handleBackToHome} onBookClick={() => setActiveView('appointment')} />
            {footerWithPrivacy}
          </div>
        );
      default:
        return (
          <div className="relative overflow-x-hidden">
            {commonNav}
            <main>
              <Hero onBookClick={() => setActiveView('appointment')} />
              <ServicesOverview />
              <DialysisSection />
              <BloodBankSection />
              <EmergencySection />
              <NewsSection />
              <DoctorsSection 
                onBookClick={() => setActiveView('appointment')} 
                onSeeAllClick={() => setActiveView('doctors')} 
              />
              <OpdInfo />
              <AppointmentSection onBookClick={() => setActiveView('appointment')} />
              <Careers />
              <ResourcesSection />
              <LocationSection />
              <CommunitySection />
              {footerWithPrivacy}
            </main>
            <SymptomChecker />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderActiveView()}
    </div>
  );
};

export default App;
