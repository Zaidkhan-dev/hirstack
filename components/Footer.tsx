
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">H</div>
              <span className="text-xl font-bold tracking-tight">hirstack</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Leading the IT training industry with world-class education and expert mentorship. Grooming the next generation of engineers.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400 mask-center"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Browse Courses</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Job Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Subscribe</h4>
            <p className="text-slate-500 mb-4">Stay updated on new batches and tech insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
              <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
          <p>© 2024 hirstack Training Institute. All rights reserved.</p>
          <p>Made with passion for the tech community.</p>
        </div>
      </div>
    </footer>
  );
};
