import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Discography } from './components/Discography';
import { Multimedia } from './components/Multimedia';
import { Press } from './components/Press';
import { TangoGenerator } from './components/TangoGenerator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // Basic smooth scroll effect globally for anchor tags if needed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-red-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Discography />
        <Multimedia />
        <Press />
        <TangoGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;