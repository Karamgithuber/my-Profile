import React, { useState } from 'react';
import { SERVICES, FAQS } from '../constants';
import { ArrowUpRight, ChevronDown, ChevronUp, Code, Database, Globe, Layout, Server, Smartphone, Terminal, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  }

  const techBadges = [
      { name: "Socket", icon: <Terminal size={14} />, color: "text-gray-400" },
      { name: "MongoDB", icon: <Database size={14} />, color: "text-green-500" },
      { name: "Redux", icon: <Code size={14} />, color: "text-purple-500" },
      { name: "CSS", icon: <Layout size={14} />, color: "text-blue-400" },
      { name: "AI", icon: <Cpu size={14} />, color: "text-red-500" },
      { name: "Tailwind Css", icon: <Code size={14} />, color: "text-cyan-400" },
      { name: "Node Js", icon: <Server size={14} />, color: "text-green-600" },
      { name: "Jest", icon: <Code size={14} />, color: "text-red-400" },
      { name: "Nuxt Js", icon: <Globe size={14} />, color: "text-green-400" },
      { name: "TypeScript", icon: <Code size={14} />, color: "text-blue-600" },
      { name: "React Js", icon: <Code size={14} />, color: "text-cyan-400" },
      { name: "Next Js", icon: <Globe size={14} />, color: "text-white" },
      { name: "Gatsby", icon: <Globe size={14} />, color: "text-purple-400" },
  ];

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
            
            <div className="flex flex-wrap gap-3 mt-12 opacity-80">
                {/* Simulated Marquee/Grid */}
                {techBadges.concat(techBadges).map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#1a1a1a] border border-white/5 px-4 py-2 rounded-full">
                        <span className={tech.color}>{tech.icon}</span>
                        <span className="text-brand-muted text-sm font-medium">{tech.name}</span>
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