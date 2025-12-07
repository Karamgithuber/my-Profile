import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex gap-4">
           <a href={PERSONAL_INFO.github} className="w-10 h-10 bg-brand-card border border-white/10 rounded flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-accent transition-all">
              <Github size={20} />
           </a>
           <a href={PERSONAL_INFO.linkedin} className="w-10 h-10 bg-brand-card border border-white/10 rounded flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-accent transition-all">
              <Linkedin size={20} />
           </a>
        </div>

        <div className="text-center md:text-right">
            <div className="bg-brand-card px-6 py-4 rounded-2xl border border-white/5 inline-flex flex-col items-center md:items-start gap-2">
                <span className="text-brand-muted text-sm">Made with <span className="text-red-500">♥</span> by <span className="text-brand-accent font-bold">{PERSONAL_INFO.name}</span></span>
            </div>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-brand-accent/50 text-brand-accent hover:bg-brand-accent hover:text-brand-dark flex items-center justify-center transition-all"
        >
           <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
};
