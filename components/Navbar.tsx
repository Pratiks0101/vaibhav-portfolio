// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Mail, Menu, X, Download } from 'lucide-react';
// import ThemeToggle from './ThemeToggle';

// export default function Navbar({ copyEmail, copiedEmail }: { copyEmail: () => void; copiedEmail: boolean }) {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
//         e.preventDefault();
//         setMobileMenuOpen(false);
//         const element = document.getElementById(id);
//         if (element) {
//             const yOffset = -80;
//             const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//             window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//     };

//     const handleMobileCopyEmail = () => {
//         copyEmail();
//         setMobileMenuOpen(false);
//     };

//     return (
//         <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#090d16]/90 border-b border-slate-200 dark:border-slate-800/80 transition-all">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                
//                 {/* Brand Logo & Name */}
//                 <Link href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="flex items-center gap-3 group">
//                     <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-teal-500/30 flex items-center justify-center font-bold text-teal-600 dark:text-teal-400 group-hover:border-teal-400 transition-all">
//                         VW
//                     </div>
//                     <div className="flex flex-col">
//                         <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-teal-500 transition-colors">
//                             Vaibhav Wankar<span className="text-teal-500">.</span>
//                         </span>
//                         <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">BCA + MBA | MIS & Operations</span>
//                     </div>
//                 </Link>

//                 {/* Desktop Navigation Links */}
//                 <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
//                     <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">About</a>
//                     <a href="#pillars" onClick={(e) => handleScrollTo(e, 'pillars')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Core Pillars</a>
//                     <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Experience</a>
//                     <a href="#education" onClick={(e) => handleScrollTo(e, 'education')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Education</a>
//                     <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Contact</a>
//                 </nav>

//                 {/* Desktop Action Buttons */}
//                 <div className="hidden md:flex items-center gap-3">
//                     <ThemeToggle />

//                     <button 
//                         onClick={copyEmail}
//                         className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-teal-500/50 transition-all flex items-center gap-2"
//                     >
//                         <Mail className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400" />
//                         {copiedEmail ? 'Email Copied!' : 'Copy Email'}
//                     </button>
                    
//                     <a 
//                         href="/vaibhav_resume.pdf"
//                         download
//                         className="px-4 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/30 transition-all flex items-center gap-1.5"
//                     >
//                         <Download className="w-3.5 h-3.5" />
//                         Resume
//                     </a>
//                 </div>

//                 {/* Mobile Hamburger & Theme Toggle */}
//                 <div className="flex items-center gap-2 md:hidden">
//                     <ThemeToggle />
//                     <button 
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                         className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
//                         aria-label="Toggle Navigation Menu"
//                     >
//                         {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Navigation Drawer */}
//             {mobileMenuOpen && (
//                 <div className="md:hidden bg-white dark:bg-[#0d1322] border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4">
//                     <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">About Overview</a>
//                     <a href="#pillars" onClick={(e) => handleScrollTo(e, 'pillars')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Core Expertise Pillars</a>
//                     <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Professional Experience</a>
//                     <a href="#education" onClick={(e) => handleScrollTo(e, 'education')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Qualifications & Credentials</a>
//                     <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Contact & Connect</a>
                    
//                     <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
//                         <a 
//                             href="/vaibhav_resume.pdf"
//                             download
//                             className="w-full py-2.5 rounded-lg text-xs font-semibold bg-teal-600 text-white flex items-center justify-center gap-2"
//                         >
//                             <Download className="w-4 h-4" /> Download Resume
//                         </a>
//                         <button onClick={handleMobileCopyEmail} className="w-full py-2.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2">
//                             <Mail className="w-4 h-4 text-teal-500 dark:text-teal-400" />
//                             {copiedEmail ? 'Email Copied!' : 'vaibhavwankar61@gmail.com'}
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ copyEmail, copiedEmail }: { copyEmail: () => void; copiedEmail: boolean }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleMobileCopyEmail = () => {
        copyEmail();
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#090d16]/90 border-b border-slate-200 dark:border-slate-800/80 transition-all">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                
                {/* Brand Logo & Name */}
                <Link href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-teal-500/30 flex items-center justify-center font-bold text-teal-600 dark:text-teal-400 group-hover:border-teal-400 transition-all">
                        VW
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-teal-500 transition-colors">
                            Vaibhav Wankar<span className="text-teal-500">.</span>
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">BCA + MBA | MIS & Operations</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">About</a>
                    <a href="#pillars" onClick={(e) => handleScrollTo(e, 'pillars')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Core Pillars</a>
                    <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Experience</a>
                    <a href="#education" onClick={(e) => handleScrollTo(e, 'education')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Education</a>
                    <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">Contact</a>
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />

                    <button 
                        onClick={copyEmail}
                        className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-teal-500/50 transition-all flex items-center gap-2"
                    >
                        <Mail className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400" />
                        {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                    </button>
                    
                    <a 
                        href="/vaibhav_resume.pdf"
                        download
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/30 transition-all flex items-center gap-1.5"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger & Theme Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-[#0d1322] border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4">
                    <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">About Overview</a>
                    <a href="#pillars" onClick={(e) => handleScrollTo(e, 'pillars')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Core Expertise Pillars</a>
                    <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Professional Experience</a>
                    <a href="#education" onClick={(e) => handleScrollTo(e, 'education')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Qualifications & Credentials</a>
                    <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="block text-slate-700 dark:text-slate-300 hover:text-teal-500 font-medium py-1 cursor-pointer">Contact & Connect</a>
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
                        <a 
                            href="/vaibhav_resume.pdf"
                            download
                            className="w-full py-2.5 rounded-lg text-xs font-semibold bg-teal-600 text-white flex items-center justify-center gap-2"
                        >
                            <Download className="w-4 h-4" /> Download Resume
                        </a>
                        <button onClick={handleMobileCopyEmail} className="w-full py-2.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                            {copiedEmail ? 'Email Copied!' : 'vaibhavwankar61@gmail.com'}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}