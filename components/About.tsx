import React, { useEffect, useRef, useState } from 'react';

export const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <img 
              src="https://picsum.photos/seed/tech/800/600" 
              alt="Learning Environment" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 p-8 glass-card rounded-2xl hidden md:block">
              <p className="text-blue-400 font-bold text-2xl mb-1">Expert Led</p>
              <p className="text-slate-400">Industry specialist trainers</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Philosophy</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">Mastering Technical Brilliance</h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              We, the leading training institute in IT industry offer world-class teaching and top-notch training to help you learn and groom the technical ability in you. We provide best-in-class infrastructure, online resources, experience to real-time projects and unparalleled placement support.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We know the significance of having both a sound conceptual understanding and a expert mind, to perform efficiently. Our courses are carefully planned to impart maximum theoretical knowledge and to hone effective programming skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 group">
                <div className={`w-12 h-12 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-4 transition-all duration-700 ${inView ? 'animate-soft-pulse-bounce' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-xl mb-2">Practical Focus</h4>
                <p className="text-slate-500 text-sm">Designed to assist you master the programming skills effectively.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 group">
                <div className={`w-12 h-12 bg-indigo-500/10 text-indigo-500 rounded-lg flex items-center justify-center mb-4 transition-all duration-700 ${inView ? 'animate-soft-pulse-bounce' : ''}`} style={{ animationDelay: '0.5s' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-xl mb-2">Flexible Learning</h4>
                <p className="text-slate-500 text-sm">Choose between offline flexibility or online convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};