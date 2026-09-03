import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import InstallationGuide from './components/InstallationGuide';
import SecurityUseCases from './components/SecurityUseCases';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <InteractiveDemo />
        <HowItWorks />
        <InstallationGuide />
        <SecurityUseCases />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}