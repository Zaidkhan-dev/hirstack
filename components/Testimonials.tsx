
import React from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Full Stack Engineer at Amazon",
    content: "The placement support at hirstack is unparalleled. I went from a novice to having 3 job offers within 6 months.",
    avatar: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "David Chen",
    role: "AI Researcher",
    content: "Their conceptual depth is what sets them apart. They don't just teach code; they teach the engineering mindset.",
    avatar: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Lead UI Developer",
    content: "The practical sessions were intense and incredibly rewarding. I built real projects that actually work.",
    avatar: "https://picsum.photos/seed/person3/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Graduates Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 relative group">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-xl">
                <img src={t.avatar} alt={t.name} />
              </div>
              <div className="pt-4">
                <p className="text-slate-400 italic mb-6 leading-relaxed">"{t.content}"</p>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-blue-500 text-sm font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
