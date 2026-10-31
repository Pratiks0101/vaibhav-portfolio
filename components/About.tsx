import { Globe } from 'lucide-react';
import MetricsBar from '@/components/MetricsBar';

export default function AboutOverview() {
    return (
        <section id="about" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-[#0d1322]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase">Professional Overview</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">About Vaibhav</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Bridging technical capability with business process excellence.
                </p>
            </div>

            {/* Main Bio Card with Glassmorphism / Clean Card Style */}
            <div className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                    Multi-skilled Operations, IT & Administrative Professional with dual qualifications in <strong className="text-slate-900 dark:text-white font-semibold">Computer Applications (BCA)</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Business Administration (MBA)</strong>. Experienced in end-to-end operations management, digital record-keeping, MIS reporting, and process auditing across banking and educational institutions.
                </p>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
                        <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span>Languages: <strong className="text-slate-900 dark:text-white">Marathi (Native), English (Fluent), Hindi (Fluent)</strong></span>
                    </div>
                    <div className="text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/60 px-3.5 py-1.5 rounded-full border border-teal-500/20">
                        Nagpur, Maharashtra
                    </div>
                </div>
            </div>

            {/* MetricsBar Integration */}
            <MetricsBar />

        </div>
        </section>
    );
}