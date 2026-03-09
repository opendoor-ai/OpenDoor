import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BrandMission from '../components/BrandMission';
import ValueProp from '../components/ValueProp';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandMission />
      <ValueProp />
      <HowItWorks />
      <Portfolio />
      
      <Footer />
    </div>
  );
}
