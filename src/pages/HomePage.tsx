import React from 'react';
import { NavigationBar } from '../components/Navigation/NavigationBar';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/Features/FeaturesSection';
import { HowItWorksSection } from '../components/HowItWorks/HowItWorksSection';
import { ContactSection } from '../components/Contact/ContactSection';

interface HomePageProps {
  onCalculateClick: () => void;
}

export const HomePage = ({ onCalculateClick }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <section id="home" className="pt-[72px] min-h-screen">
        <Hero onCalculateClick={onCalculateClick} />
      </section>
      <section id="features" className="min-h-screen pt-[72px] -mt-[72px]">
        <FeaturesSection onCalculateClick={onCalculateClick} />
      </section>
      <section id="how-it-works" className="min-h-screen pt-[72px] -mt-[72px]">
        <HowItWorksSection onCalculateClick={onCalculateClick} />
      </section>
      <section id="contact" className="pt-[72px] -mt-[72px]">
        <ContactSection />
      </section>
    </div>
  );
};