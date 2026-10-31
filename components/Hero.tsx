// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
// import Image from 'next/image';

// // Continuous Loop Typing Line Component
// function TypewriterLine({ text, speed = 60, delay = 0 }: { text: string; speed?: number; delay?: number }) {
//     const [displayedText, setDisplayedText] = useState('');
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [loopNum, setLoopNum] = useState(0);
//     const [typingSpeed, setTypingSpeed] = useState(speed);
//     const [started, setStarted] = useState(false);

//     // Initial delay start
//     useEffect(() => {
//         const startTimer = setTimeout(() => {
//         setStarted(true);
//         }, delay);
//         return () => clearTimeout(startTimer);
//     }, [delay]);

//     useEffect(() => {
//         if (!started) return;

//         const handleTyping = () => {
//         // Typing speed fast ya slow control karne ke liye
//         if (isDeleting) {
//             setDisplayedText(text.substring(0, displayedText.length - 1));
//             setTypingSpeed(30); // Delete hote waqt speed tez hogi
//         } else {
//             setDisplayedText(text.substring(0, displayedText.length + 1));
//             setTypingSpeed(60); // Type hote waqt normal speed
//         }

//         // Jab pura text type ho jaye
//         if (!isDeleting && displayedText === text) {
//             setTimeout(() => setIsDeleting(true), 2000); // 2 second pause text read karne ke liye
//         } 
//         // Jab text pura delete ho jaye toh wapas typing shuru ho
//         else if (isDeleting && displayedText === '') {
//             setIsDeleting(false);
//             setLoopNum(loopNum + 1);
//         }
//         };

//         const timer = setTimeout(handleTyping, typingSpeed);
//         return () => clearTimeout(timer);
//     }, [displayedText, isDeleting, text, typingSpeed, started, loopNum]);

//     return (
//         <div className="font-mono text-sm sm:text-base text-teal-600 dark:text-teal-400/90 flex items-center justify-center gap-1 h-8">
//         <span>{displayedText}</span>
//         <span className="inline-block w-1.5 h-4 bg-teal-500 dark:bg-teal-400 animate-pulse" />
//         </div>
//     );
//     }

//     export default function Hero() {
//     const roles = [
//         "Operations, MIS & IT Solutions Specialist",
//         "CRM & Branch Operations Associate",
//         "Process Auditing & IT Support Professional"
//     ];

//     return (
//         <section id="hero" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center pt-16 pb-24 border-b border-slate-200 dark:border-slate-800/40 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-4xl mx-auto space-y-8">
            
//             {/* Professional Portrait Photo */}
//             <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-3xl overflow-hidden border-2 border-teal-500/40 shadow-2xl shadow-teal-950/20 dark:shadow-teal-950/60 bg-slate-100 dark:bg-slate-800">
//             <Image 
//                 src="/vaibhav_profile.png" 
//                 alt="Vaibhav Wankar" 
//                 fill
//                 sizes="(max-width: 768px) 144px, 176px"
//                 className="object-cover object-top"
//                 priority
//             />
//             </div>

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold font-mono">
//             <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
//             AVAILABLE FOR OPERATIONS, MIS & IT SUPPORT ROLES
//             </div>

//             {/* Name */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
//             Vaibhav Wankar
//             </h1>

//             {/* 3 Concurrent Continuous Typing Roles */}
//             <div className="space-y-1 py-2 max-w-xl mx-auto">
//             {roles.map((role, index) => (
//                 <TypewriterLine 
//                 key={index} 
//                 text={role} 
//                 speed={50} 
//                 delay={index * 1500} // Har line thode interval par start hogi
//                 />
//             ))}
//             </div>

//             {/* Hero CTA Buttons */}
//             <div className="pt-4 flex flex-wrap justify-center gap-4 items-center">
//             <a
//                 href="/vaibhav_resume.pdf"
//                 download
//                 className="px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-xl shadow-teal-900/30 transition-all flex items-center gap-2"
//             >
//                 <Download className="w-4 h-4" />
//                 Download Resume (PDF)
//             </a>

//             <a
//                 href="#contact"
//                 className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 group"
//             >
//                 Get In Touch
//                 <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </a>
//             </div>

//         </div>
//         </section>
//     );
// }

'use client';

import React from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    const roles = [
        "Operations, MIS & IT Solutions Specialist",
        "CRM & Branch Operations Associate",
        "Process Auditing & IT Support Professional"
    ];

    return (
        <section id="hero" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center pt-16 pb-24 border-b border-slate-200 dark:border-slate-800/40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Professional Portrait Photo */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-3xl overflow-hidden border-2 border-teal-500/40 shadow-2xl shadow-teal-950/20 dark:shadow-teal-950/60 bg-slate-100 dark:bg-slate-800">
                    <Image 
                        src="/vaibhav_profile.png" 
                        alt="Vaibhav Wankar" 
                        fill
                        sizes="(max-width: 768px) 144px, 176px"
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    AVAILABLE FOR OPERATIONS, MIS & IT SUPPORT ROLES
                </div>

                {/* Name */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Vaibhav Wankar
                </h1>

                {/* 3 Concurrent Roles with CSS Typewriter Effect */}
                <div className="space-y-2 py-2 max-w-xl mx-auto font-mono text-sm sm:text-base text-teal-600 dark:text-teal-400/90">
                    {roles.map((role, index) => (
                        <div key={index} className="overflow-hidden whitespace-nowrap mx-auto border-r-2 border-teal-500 animate-typing" style={{ width: 'fit-content', animationDelay: `${index * 1.5}s` }}>
                            {role}
                        </div>
                    ))}
                </div>

                {/* Hero CTA Buttons */}
                <div className="pt-4 flex flex-wrap justify-center gap-4 items-center">
                    <a
                        href="/vaibhav_resume.pdf"
                        download
                        className="px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-xl shadow-teal-900/30 transition-all flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume (PDF)
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 group"
                    >
                        Get In Touch
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
}