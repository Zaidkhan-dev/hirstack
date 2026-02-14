
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-blue-500/30 text-sm font-medium text-blue-400 mb-8 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Award Winning IT Training 2024
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
          Forge Your Future in <br />
          <span className="gradient-text">World-Class Tech Stack</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
          Groom your technical ability with the industry leaders. Experience real-time projects, expert mentorship, and unparalleled placement support.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 active:scale-95">
            Explore Courses
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all active:scale-95">
            Speak to an Expert
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">15k+</span>
            <span className="text-sm uppercase tracking-widest text-slate-500">Students</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">50+</span>
            <span className="text-sm uppercase tracking-widest text-slate-500">Industry Partners</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">98%</span>
            <span className="text-sm uppercase tracking-widest text-slate-500">Placement Rate</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">4.9/5</span>
            <span className="text-sm uppercase tracking-widest text-slate-500">Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
