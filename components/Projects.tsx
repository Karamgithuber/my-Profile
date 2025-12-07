import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">My Portfolio</h2>
          <p className="text-brand-accent text-sm font-medium">Some Things I've Built.</p>
          <p className="text-brand-muted mt-4 max-w-2xl text-sm leading-relaxed">
            With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-[#121212] rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300">
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                 <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {/* Mock Tech Icons */}
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <Code size={12} className="text-green-500" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <Code size={12} className="text-blue-500" />
                        </div>
                    </div>
                 </div>

                <p className="text-brand-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] uppercase font-bold tracking-wider text-brand-muted rounded-full border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};