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
    <main 
      className={`min-h-screen transition-colors duration-700 overflow-x-hidden ${
        mode === 'design' 
          ? 'bg-slate-900' 
          : 'bg-slate-900' // İkisi de slate-900 ancak üzerindeki gradyanlar değişiyor
      }`}
    >
      <Header mode={mode} onToggle={setMode} isScrolled={isScrolled} />
      
      <Hero mode={mode} />
      
      <Services mode={mode} />
      
      <FocusAreas mode={mode} />
      
      <Portfolio mode={mode} />
      
      <Testimonials mode={mode} />
      
      <CTA mode={mode} />
      
      <Footer mode={mode} />
    </main>
  );
}