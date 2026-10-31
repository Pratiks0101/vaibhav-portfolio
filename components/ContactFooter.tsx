'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactFooter({ currentYear }: { currentYear?: string }) {
    // Client-side fallback if currentYear is omitted
    const [year, setYear] = useState(currentYear || '2026');

    useEffect(() => {
        if (!currentYear) {
            setYear(new Date().getFullYear().toString());
        }
    }, [currentYear]);

    return (
        <footer id="contact" className="w-full py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#090d16]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Card with Theme Classes */}
                <div className="bg-gradient-to-b from-slate-100 to-white dark:from-[#111827] dark:to-[#0d1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl dark:shadow-none">
                    <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-mono font-semibold">
                            GET IN TOUCH
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Let&apos;s Discuss Operational & Systems Roles.
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            Seeking non-sales positions in <strong className="text-slate-900 dark:text-white">Operations, Process Management, Administration, or IT Support</strong> where cross-functional BCA + MBA qualifications can drive accuracy and operational productivity.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {/* Email Card */}
                            <a href="mailto:vaibhavwankar61@gmail.com" className="bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-3.5 hover:border-teal-500/50 transition-all group shadow-sm dark:shadow-none">
                                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-500/20 group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono block">DIRECT EMAIL</span>
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300">vaibhavwankar61@gmail.com</span>
                                </div>
                            </a>

                            {/* Phone Card */}
                            <a href="tel:+918888285951" className="bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-3.5 hover:border-teal-500/50 transition-all group shadow-sm dark:shadow-none">
                                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-500/20 group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono block">PHONE NUMBER</span>
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300">+91 88882 85951</span>
                                </div>
                            </a>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                                <span>521, Nehru Nagar, Nandanwan Main Road, Nagpur - 440009</span>
                            </div>
                            <span>Open for Nagpur & Remote Roles</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Full-width Divider Line */}
            <div className="w-full border-t border-slate-200 dark:border-slate-800/80 mt-12" />

            {/* Sub Footer with Content Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
                <div>© {year} Vaibhav Wankar. All rights reserved.</div>
                <div className="flex items-center gap-6">
                    <span>BCA + MBA Qualified</span>
                    <span>•</span>
                    <span>Operations & MIS Specialist</span>
                </div>
            </div>
        </footer>
    );
}