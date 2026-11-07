import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppMockup } from './components/AppMockup';
import { Features } from './components/Features';
import { PlatformCards } from './components/PlatformCards';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('texo-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('texo-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('texo-theme', 'light');
    }
  }, [isDark]);

  const scrollToPlatforms = (targetId: string = 'platforms') => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] dark:bg-[#131B24] text-[#1C2B36] dark:text-[#E8EEF3] transition-colors duration-300 font-sans flex flex-col">
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onDownloadClick={() => scrollToPlatforms('platforms')}
      />

      <main className="flex-1">
        <Hero onPlatformSelect={() => scrollToPlatforms('platforms')} />
        <AppMockup />
        <Features />
        <PlatformCards id="platforms" />
        <SecuritySection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;

