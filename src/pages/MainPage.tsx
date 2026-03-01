import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ValueProp from '../components/ValueProp';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProp />
      <HowItWorks />
      <Portfolio />
      
      <Footer />
    </div>
  );
}
