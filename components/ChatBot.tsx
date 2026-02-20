import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
}

const PRESET_CONVERSATION = {
  initial: "Hi there! 👋 I'm the hirstack Assistant. How can I help you design your career today?",
  options: [
    { 
      label: "🚀 Popular Courses", 
      response: "Our most popular tracks are Full-Stack Development and AI & Machine Learning. Both feature 100% live projects and industry certification!",
      nextOptions: ["Tell me about fees", "How long are courses?"]
    },
    { 
      label: "💼 Placement Support", 
      response: "We have a dedicated career cell that provides resume building, mock interviews, and direct referrals to our 50+ hiring partners like Amazon and Google.",
      nextOptions: ["Success stories", "Join now"]
    },
    { 
      label: "💰 Course Fees", 
      response: "Our courses range from $2,100 to $3,200 depending on the track. we offer flexible EMI options and early-bird scholarships!",
      nextOptions: ["Scholarship info", "Speak to expert"]
    },
    { 
      label: "📍 Location", 
      response: "We offer both high-tech physical campuses for offline learning and a state-of-the-art virtual lab for online students.",
      nextOptions: ["Online catalog", "Find a center"]
    }
  ]
};

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: Date.now(), type: 'bot', text: PRESET_CONVERSATION.initial }
  ]);
  const [currentOptions, setCurrentOptions] = useState(PRESET_CONVERSATION.options.map(o => o.label));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleOptionClick = (label: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now(), type: 'user', text: label };
    setMessages(prev => [...prev, userMsg]);

    // Find response
    const option = PRESET_CONVERSATION.options.find(o => o.label === label);
    
    // Simulate typing delay
    setTimeout(() => {
      const botMsg: Message = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: option ? option.response : "That's a great question! Let me connect you with a human expert for more details." 
      };
      setMessages(prev => [...prev, botMsg]);
      
      // Update options if specified, otherwise reset to main
      if (option && option.nextOptions) {
        // Just for demo, we keep original options + a "Back to main"
        setCurrentOptions([...option.nextOptions, "Back to main menu"]);
      } else if (label === "Back to main menu") {
        setCurrentOptions(PRESET_CONVERSATION.options.map(o => o.label));
      }
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-card rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 border border-white/10">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">H</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-white">hirstack Assistant</h4>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Online & Ready</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in zoom-in-95 duration-200`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800/80 text-slate-200 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options Footer */}
          <div className="p-4 bg-black/20 border-t border-white/5">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-bold px-1">Quick Actions</p>
            <div className="flex flex-wrap gap-2">
              {currentOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt)}
                  className="px-3 py-1.5 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-full text-xs text-slate-300 hover:text-blue-400 transition-all active:scale-95 whitespace-nowrap"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 active:scale-90 group ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-blue-600 hover:bg-blue-500'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 pointer-events-none group-hover:opacity-40"></div>
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};
