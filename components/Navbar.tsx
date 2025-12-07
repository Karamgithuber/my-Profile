import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  setPage: (page: string) => void;
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "home", action: "scroll-about" }, // Special handling for About to scroll on home
    { name: "My Work", id: "projects" },
    { name: "What I Do", id: "services" },
    { name: "Articles", id: "articles" },
  ];

  const handleNavClick = (e: React.MouseEvent, link: { id: string, action?: string }) => {
    e.preventDefault();
    setIsOpen(false);
    
    setPage(link.id);
    
    // If it's the About link, we might want to scroll to the about section on the home page
    if (link.action === 'scroll-about') {
        setTimeout(() => {
            const element = document.getElementById('about');
            if (element) {
                 const offset = 80;
                 const bodyRect = document.body.getBoundingClientRect().top;
                 const elementRect = element.getBoundingClientRect().top;
                 const elementPosition = elementRect - bodyRect;
                 const offsetPosition = elementPosition - offset;
                 window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, { id: 'home' })} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-accent rounded-br-xl rounded-tl-xl flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">K</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Karam.Dev</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`${
                    activePage === link.id && !link.action ? 'text-brand-accent' : 'text-brand-muted'
                  } hover:text-brand-accent transition-colors px-3 py-2 rounded-md text-sm font-medium focus:outline-none`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={(e) => handleNavClick(e, { id: 'contact' })}
              className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-semibold py-2 px-6 rounded-full transition-all flex items-center gap-2 group"
            >
              Let's Talk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-card border-b border-white/5 absolute w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link)}
                className="text-brand-muted hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {link.name}
              </button>
            ))}
            <button
                onClick={(e) => handleNavClick(e, { id: 'contact' })}
                className="text-brand-dark bg-brand-accent hover:bg-brand-accentHover w-full text-left block px-3 py-2 rounded-md text-base font-bold mt-4"
            >
                Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};