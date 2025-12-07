
import React, { useState } from 'react';
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
