
import React from 'react';

export const CourseModes: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How Do You Want to Learn?</h2>
          <p className="text-slate-400 text-lg">Choose the delivery method that best fits your lifestyle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Offline Card */}
          <div className="group relative overflow-hidden rounded-3xl glass-card p-10 hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Offline Class</h3>
            <p className="text-blue-400 font-medium mb-6">With flexible courses</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Experience our best-in-class campus infrastructure. Engage directly with trainers and peers in high-energy classroom environments.
            </p>
            <ul className="space-y-4 mb-10 text-slate-300">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 24/7 Lab Access</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Face-to-Face Mentorship</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Physical Project Showcases</li>
            </ul>
            <button className="w-full py-4 border border-white/10 rounded-xl font-bold group-hover:bg-white group-hover:text-black transition-all">Find a Center</button>
          </div>

          {/* Online Card */}
          <div className="group relative overflow-hidden rounded-3xl glass-card p-10 hover:border-indigo-500/50 transition-all duration-500 bg-gradient-to-br from-indigo-900/20 to-transparent">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Online Class</h3>
            <p className="text-indigo-400 font-medium mb-6">Study flexibly online</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Access world-class teaching from anywhere. Our interactive online platform brings the hirstack experience to your home.
            </p>
            <ul className="space-y-4 mb-10 text-slate-300">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Live Streamed Sessions</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Cloud-based Development Labs</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Digital Portfolio Building</li>
            </ul>
            <button className="w-full py-4 border border-white/10 rounded-xl font-bold group-hover:bg-indigo-600 transition-all">Browse Online Catalog</button>
          </div>
        </div>
      </div>
    </section>
  );
};
