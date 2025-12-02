import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FocusAreas } from './components/FocusAreas';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  const [mode, setMode] = useState<'design' | 'code'>('design');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      mode === 'design' 
        ? 'bg-slate-900' 
        : 'bg-slate-900'
    }`}>
      {/* Sticky Header */}
      <Header mode={mode} onToggle={setMode} isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <Hero mode={mode} />
      
      {/* Services Section */}
      <Services mode={mode} />
      
      {/* Focus Areas Section */}
      <FocusAreas mode={mode} />
      
      {/* Portfolio Section */}
      <Portfolio mode={mode} />
      
      {/* Testimonials Section */}
      <Testimonials mode={mode} />
      
      {/* CTA Section */}
      <CTA mode={mode} />
      
      {/* Footer */}
      <Footer mode={mode} />
    </div>
  );
}
