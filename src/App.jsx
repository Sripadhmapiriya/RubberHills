import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HillsDivider from './components/HillsDivider';
import About from './components/About';
import Campus from './components/Campus';
import Staff from './components/Staff';
import Students from './components/Students';
import Learning from './components/Learning';
import Creche from './components/Creche';
import Classes from './components/Classes';
import DayAtSchool from './components/DayAtSchool';
import QuickFacts from './components/QuickFacts';
import VisitUs from './components/VisitUs';
import Contact from './components/Contact';
import TreesDivider from './components/TreesDivider';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="wrap">
      <Header />
      <main id="top">
        <Hero />
        <HillsDivider />
        <About />
        <Campus />
        <Staff />
        <Students />
        <Learning />
        <Creche />
        <Classes />
        <DayAtSchool />
        <QuickFacts />
        <VisitUs />
        <Contact />
      </main>
      <TreesDivider />
      <Footer />
    </div>
  );
}

