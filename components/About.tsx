import React, { useState } from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const About: React.FC = () => {
  const [openJobId, setOpenJobId] = useState<number | null>(1);
  const [openSection, setOpenSection] = useState<string | null>('experience');

  const toggleJob = (id: number) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  }

  return (
    <section id="about" className="py-20 bg-brand-dark relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Who I am */}
          <div>
            <div className="bg-[#121212] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-white/5 text-xs font-medium text-brand-muted rounded-full mb-4">Who I am</span>
                    <h2 className="text-3xl font-bold text-white">About {PERSONAL_INFO.name.split(' ')[0]}</h2>
                </div>
                
                <p className="text-brand-muted leading-relaxed mb-6 text-sm">
                  {PERSONAL_INFO.about}
                </p>
                <p className="text-brand-muted leading-relaxed mb-6 text-sm">
                  I'm {PERSONAL_INFO.name}, I've been working in tech for over 4 years (and if you count the sleepless nights, <span className="text-brand-accent">it's easily 5!</span>) doing both <span className="text-brand-accent">frontend</span> (The stuff you see on the screen) and <span className="text-brand-accent">backend</span> (The stuff that happens behind the scenes) I focus on building practical and reliable solutions that help businesses solve problems and achieve their goals. I am a firm believer in the <span className="text-brand-accent">power of technology</span> to transform businesses and lives.
                </p>
            </div>
          </div>

          {/* Right Column: Experience & Approach Accordions */}
          <div className="space-y-4">
            
            {/* Experience Section */}
            <div className="border border-white/5 rounded-2xl bg-[#0a0a0a] overflow-hidden">
                <button 
                    onClick={() => toggleSection('experience')}
                    className="w-full flex items-center justify-between p-6 bg-[#121212]"
                >
                    <span className="text-brand-muted text-sm uppercase tracking-wider font-semibold">01. Experience</span>
                    {openSection === 'experience' ? <ChevronUp className="text-brand-muted" size={18} /> : <ChevronDown className="text-brand-muted" size={18} />}
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openSection === 'experience' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 space-y-3">
                        {EXPERIENCE.map((job) => (
                            <div 
                                key={job.id} 
                                className={`rounded-xl border transition-all duration-300 ${
                                    openJobId === job.id ? 'bg-white/5 border-white/10' : 'bg-transparent border-transparent hover:bg-white/5'
                                }`}
                            >
                                <button
                                    onClick={() => toggleJob(job.id)}
                                    className="w-full text-left px-4 py-3 flex items-center justify-between focus:outline-none"
                                >
                                    <div>
                                        <h3 className={`text-sm font-bold ${openJobId === job.id ? 'text-white' : 'text-brand-muted'}`}>
                                            {job.company}
                                        </h3>
                                    </div>
                                    <span className="text-xs text-brand-muted">{job.period}</span>
                                </button>

                                {openJobId === job.id && (
                                    <div className="px-4 pb-4 text-sm text-brand-muted">
                                        <p className="mb-2 text-xs opacity-70">{job.role}</p>
                                        <ul className="list-disc list-inside space-y-1 text-xs">
                                            {job.description.map((d, i) => <li key={i}>{d}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Approach Section (Placeholder) */}
            <div className="border border-white/5 rounded-2xl bg-[#0a0a0a] overflow-hidden">
                <button 
                    onClick={() => toggleSection('approach')}
                    className="w-full flex items-center justify-between p-6 bg-[#121212]"
                >
                    <span className="text-brand-muted text-sm uppercase tracking-wider font-semibold">02. My Approach</span>
                    {openSection === 'approach' ? <ChevronUp className="text-brand-muted" size={18} /> : <ChevronDown className="text-brand-muted" size={18} />}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openSection === 'approach' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 text-sm text-brand-muted">
                        I believe in user-centric design and clean, maintainable code. My process involves deep understanding of requirements, iterative development, and continuous feedback loops.
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};