
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

export const CareerAdvisor: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetAdvice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interest.trim()) return;
    
    setLoading(true);
    const result = await geminiService.getCareerAdvice(interest);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section id="advisor" className="py-24 relative overflow-hidden">
      {/* Visual background flare */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-[32px] p-8 lg:p-16 relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs uppercase mb-6 tracking-widest">AI Career Advisor</div>
              <h2 className="text-4xl font-bold mb-6">Not Sure Where to Start?</h2>
              <p className="text-slate-400 text-lg mb-8">
                Tell our AI advisor what you love or what your dream job looks like, and we'll map out your learning path at hirstack.
              </p>
              
              <form onSubmit={handleGetAdvice} className="space-y-4">
                <textarea 
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="e.g. I love building visual apps and I want to work at a big tech company like Google..."
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 min-h-[120px] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                />
                <button 
                  disabled={loading}
                  className={`w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 transition-all`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Analyzing Potential...
                    </>
                  ) : (
                    'Get My Custom Path'
                  )}
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="min-h-[300px] bg-black/40 rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-center">
                {advice ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">HS</div>
                      <span className="font-bold text-blue-400">hirstack Advisor</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed italic">
                      "{advice}"
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <p className="text-slate-500 font-medium">Your personalized recommendation will appear here.</p>
                  </div>
                )}
                
                {/* Decorative circuit lines */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
