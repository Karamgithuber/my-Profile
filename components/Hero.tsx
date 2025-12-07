import React from 'react';
import { ArrowRight, Smartphone, Globe, Layers, Database, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
    setPage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden scroll-mt-28 min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 stars pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto relative">
          
          {/* Floating badges - Positioning adjusted for responsiveness */}
          <div className="hidden lg:block">
            {/* Top Left */}
            <div className="absolute -top-12 left-0 animate-scale-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="animate-float" style={{ animationDelay: '0s' }}>
                   <div className="bg-[#1e1e1e] border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-xl hover:border-brand-accent/50 transition-colors duration-300">
                     <div className="p-1.5 bg-orange-500/10 rounded-full">
                        <Smartphone size={14} className="text-orange-500" />
                     </div>
                     <span className="text-xs font-medium text-brand-muted">Mobile App Development</span>
                   </div>
                </div>
            </div>

            {/* Top Right */}
             <div className="absolute -top-8 right-10 animate-scale-in opacity-0" style={{ animationDelay: '0.4s' }}>
               <div className="animate-float" style={{ animationDelay: '1s' }}>
                   <div className="bg-[#1e1e1e] border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-xl hover:border-brand-accent/50 transition-colors duration-300">
                     <div className="p-1.5 bg-green-500/10 rounded-full">
                        <Globe size={14} className="text-green-500" />
                     </div>
                     <span className="text-xs font-medium text-brand-muted">Website Development</span>
                   </div>
               </div>
            </div>

            {/* Middle Left */}
             <div className="absolute top-24 -left-12 animate-scale-in opacity-0" style={{ animationDelay: '0.6s' }}>
               <div className="animate-float" style={{ animationDelay: '2s' }}>
                   <div className="bg-[#1e1e1e] border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-xl hover:border-brand-accent/50 transition-colors duration-300">
                     <div className="p-1.5 bg-purple-500/10 rounded-full">
                        <Layers size={14} className="text-purple-500" />
                     </div>
                     <span className="text-xs font-medium text-brand-muted">UI/UX Design</span>
                   </div>
               </div>
            </div>

             {/* Middle Right */}
             <div className="absolute top-32 -right-8 animate-scale-in opacity-0" style={{ animationDelay: '0.8s' }}>
               <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                   <div className="bg-[#1e1e1e] border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-xl hover:border-brand-accent/50 transition-colors duration-300">
                     <div className="p-1.5 bg-pink-500/10 rounded-full">
                        <Code size={14} className="text-pink-500" />
                     </div>
                     <span className="text-xs font-medium text-brand-muted">SaaS Applications</span>
                   </div>
               </div>
            </div>

             {/* Bottom Left */}
             <div className="absolute bottom-0 left-10 animate-scale-in opacity-0" style={{ animationDelay: '1s' }}>
               <div className="animate-float" style={{ animationDelay: '1.5s' }}>
                   <div className="bg-[#1e1e1e] border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-xl hover:border-brand-accent/50 transition-colors duration-300">
                     <div className="p-1.5 bg-yellow-500/10 rounded-full">
                        <Database size={14} className="text-yellow-500" />
                     </div>
                     <span className="text-xs font-medium text-brand-muted">CMS Development</span>
                   </div>
               </div>
            </div>
             
             {/* Bottom Right */}
              <div className="absolute bottom-8 right-20 animate-scale-in opacity-0" style={{ animationDelay: '1.2s' }}>
               <div className="animate-float" style={{ animationDelay: '2.5s' }}>
                   <div className="bg-[#1e1e1e] border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-xl hover:border-brand-accent/50 transition-colors duration-300">
                     <div className="p-1.5 bg-blue-500/10 rounded-full">
                        <Code size={14} className="text-blue-500" />
                     </div>
                     <span className="text-xs font-medium text-brand-muted">Custom Solutions</span>
                   </div>
               </div>
            </div>
          </div>

          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="flex items-center gap-2 text-brand-accent text-xs font-semibold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Available for work
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Design. Build. Launch. <br />
            <span className="text-white">Custom solutions.</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-muted mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            We turn challenges into growth opportunities through tailored digital solutions.
          </p>
          
          <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <button 
              onClick={() => setPage('projects')}
              className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-4 px-10 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/20 group hover:scale-105 active:scale-95 duration-300"
            >
              My Previous Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};