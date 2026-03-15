
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: "Karam Elahi | Senior Full Stack Developer & SaaS Architect",
      services: "Services | Karam Elahi - Full Stack Development & SaaS Solutions",
      projects: "Portfolio | Karam Elahi - Featured Works & Projects",
      contact: "Contact | Karam Elahi - Get in Touch",
    };
    
    document.title = titleMap[page] || "Karam Elahi | Full Stack Developer";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descMap: Record<string, string> = {
        home: "Karam Elahi - Senior Full Stack Developer specializing in .NET Core, Angular, and SaaS solutions. 4+ years of experience building scalable enterprise applications.",
        services: "Explore professional web development services including Full Stack Dev, SaaS architecture, and API integration by Karam Elahi.",
        projects: "View the portfolio of Karam Elahi, featuring enterprise SaaS platforms, AI automation tools, and high-performance web applications.",
        contact: "Get in touch with Karam Elahi for your next software project. Available for hire and collaboration.",
      };
      metaDesc.setAttribute('content', descMap[page] || descMap.home);
    }
  }, [page]);

  // Home Page Component bundle
  const Home = () => (
    <>
      <Hero setPage={setPage} />
      <About />
    </>
  );

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-brand-dark relative">
      <Navbar setPage={setPage} activePage={page} />
      
      <main className="pt-20"> {/* Add padding top for fixed navbar */}
        {page === 'home' && <Home />}
        {page === 'services' && <Services />}
        {page === 'projects' && <Projects />}
        {page === 'contact' && <Contact />}
        {page === 'articles' && <Home />} {/* Fallback for articles to Home for now */}
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
