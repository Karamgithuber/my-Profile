import React, { useState } from 'react';
import { SERVICES, FAQS, SKILLS_DATA } from '../constants';
import { ArrowUpRight, ChevronDown, ChevronUp, Code, Database, Globe, Layout, Server, Smartphone, Terminal, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <section id="services" className="py-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Explore My Services</h2>
          <p className="text-brand-accent text-sm">Looking for Backend Services?</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-brand-muted opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} />
              </div>

              <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-brand-accent/80">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-brand-muted text-sm mb-8 leading-relaxed">{service.description}</p>

              <div className="flex flex-wrap gap-4 mt-auto">
                {service.techStack.map((tech) => (
                   <div key={tech} className="flex flex-col items-center gap-1 group/icon">
                      <div className="w-8 h-8 rounded bg-black border border-white/10 flex items-center justify-center text-brand-muted group-hover/icon:text-brand-accent group-hover/icon:border-brand-accent/50 transition-colors">
                        {/* Simulate tech icons */}
                        <div className="text-[10px] font-bold">{tech.substring(0,2)}</div>
                      </div>
                      <span className="text-[10px] text-brand-muted">{tech}</span>
                   </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                I help founders turn <br />
                <span className="text-brand-accent">ideas</span> <br />
                into business-focused digital products.
            </h2>
            
            <div className="mt-16 space-y-16">
                {/* Technical Skills */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-accent/20">Deep Knowledge</span>
                        <h3 className="text-2xl font-bold text-white">Technical <span className="text-brand-accent">Skills</span></h3>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {SKILLS_DATA.technical.map((cat, i) => (
                            <div key={i} className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                                <h4 className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                                    {cat.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, j) => (
                                        <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-brand-muted hover:text-white hover:bg-white/10 transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Front End Development */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-accent/20">Creative Side</span>
                        <h3 className="text-2xl font-bold text-white">Front End <span className="text-brand-accent">Development</span></h3>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {SKILLS_DATA.creative.map((cat, i) => (
                            <div key={i} className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                                <h4 className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                                    {cat.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, j) => (
                                        <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-brand-muted hover:text-white hover:bg-white/10 transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Platform Expertise Section */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-accent/20">Tools & Platforms</span>
                <h3 className="text-2xl font-bold text-white">Platform <span className="text-brand-accent">Expertise</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "WordPress & Elementor", desc: "Complete WordPress development, custom functionality, Elementor page builder, and speed optimization.", icon: <Globe size={20} /> },
                    { title: "QuickBooks", desc: "Financial software integration for automated accounting, invoicing, and expense tracking.", icon: <Database size={20} /> },
                    { title: "Stripe / PayPal", desc: "Seamless and secure payment gateway integrations for processing online transactions.", icon: <Code size={20} /> },
                    { title: "Authorize.Net", desc: "Advanced e-commerce payment integration tailored for various cart platforms.", icon: <Code size={20} /> }
                ].map((item, i) => (
                    <div key={i} className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all mb-4">
                            {item.icon}
                        </div>
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* FAQ Section */}
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-white">FAQ's.</h3>
                    <p className="text-brand-accent text-xs mt-1">Find answers to common queries and concerns below.</p>
                </div>
                <button className="hidden sm:block bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-2 px-6 rounded-full text-sm transition-colors">
                    Book a Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FAQS.map((faq, index) => (
                    <div key={index} className="bg-[#121212] rounded-lg border border-white/5 overflow-hidden">
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                        >
                            <span className="text-white font-semibold text-sm pr-4">{faq.question}</span>
                            {openFaq === index ? <ChevronUp className="text-brand-muted flex-shrink-0" size={18} /> : <ChevronDown className="text-brand-muted flex-shrink-0" size={18} />}
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-5 pb-5 text-brand-muted text-sm leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};