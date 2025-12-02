"use client";

import { useState, useEffect } from 'react';
// Bileşenlerin hepsini src/components altına taşıdığını varsayıyorum.
// Eğer henüz taşımadıysan aşağıda belirteceğim şekilde dosyaları oluşturmalısın.
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { Services } from '@/src/components/Services';
import { FocusAreas } from '@/src/components/FocusAreas';
import { Portfolio } from '@/src/components/Portfolio';
import { Testimonials } from '@/src/components/Testimonials';
import { CTA } from '@/src/components/CTA';
import { Footer } from '@/src/components/Footer';

export default function Home() {
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