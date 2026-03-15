import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

export const Projects: React.FC = () => {
  const categories = [
    ".NET & Angular Development",
    "Custom Coding & Development",
    "WordPress & CMS Development",
    "E-Commerce Solutions"
  ];

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

        <div className="space-y-20">
          {categories.map((category) => {
            const filteredProjects = PROJECTS.filter(p => p.category === category);
            if (filteredProjects.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-brand-accent"></span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="group bg-[#121212] rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col">
                      {/* Image Area */}
                      <div className="relative h-56 overflow-hidden bg-black">
                        <img 
                          src={project.image} 
                          alt={`${project.title} - ${project.category} project by Karam Elahi`} 
                          referrerPolicy="no-referrer"
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
                      <div className="p-6 flex-grow flex flex-col">
                         <div className="flex items-start justify-between mb-3 gap-2">
                            <h4 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                                {project.title}
                            </h4>
                            <div className="flex-shrink-0">
                                <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                                    <Code size={12} className="text-brand-accent" />
                                </div>
                            </div>
                         </div>

                        <p className="text-brand-muted text-xs mb-6 line-clamp-3 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-white/5 text-[9px] uppercase font-bold tracking-wider text-brand-muted rounded border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};