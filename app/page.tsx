'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import MetricsBar from '@/components/MetricsBar';
import About from '@/components/About';
import CorePillars from '@/components/CorePillars';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('vaibhavwankar61@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-[#f8fafc] font-sans relative transition-colors duration-200">
      
      {/* Light & Dark Adaptive Ambient Glow Effects */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Header & Navbar */}
      <Navbar copyEmail={copyEmail} copiedEmail={copiedEmail} />

      {/* Page Sections */}
      <main>
        <Hero />
        {/* <MetricsBar /> */}
        <About />
        <CorePillars />
        <Experience />
        <Education />
      </main>

      {/* Contact & Sub-footer */}
      <ContactFooter />
    </div>
  );
}