
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CourseModes } from './components/CourseModes';
import { FeaturedCourses } from './components/FeaturedCourses';
import { CareerAdvisor } from './components/CareerAdvisor';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <CustomCursor />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <CourseModes />
        <FeaturedCourses />
        <CareerAdvisor />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
