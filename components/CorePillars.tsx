import { Building2, Server, FileSpreadsheet, CheckCircle2, Sparkles } from 'lucide-react';

export default function CorePillars() {
    return (
        <section id="pillars" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
                <div className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2">Capabilities Architecture</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Core Functional Pillars</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mt-3 md:mt-0">
                Integrated technical computer expertise with strategic business administration workflows.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
                <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-500/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">MIS & Business Analytics</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Transforming raw operational data into decision-ready executive reports, dashboards, and compliant digital archives.
                </p>
                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Advanced MS Excel (VLOOKUP, Pivot)</span></div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Power BI Dashboarding & Data Visualization</span></div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Core Banking Systems & Database Entries</span></div>
                </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-teal-600 dark:text-teal-400 font-medium">
                <span>01. Analytics & Reporting</span>
                <span className="text-slate-400 dark:text-slate-600">BCA + MBA</span>
                </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
                <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-500/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">IT Infrastructure & Support</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Ensuring seamless hardware availability, network stability, system maintenance, and data protocol compliance.
                </p>
                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>PC Maintenance & Troubleshooting</span></div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Basic Network Configuration</span></div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Cyber Security Protocols & Hygiene</span></div>
                </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-teal-600 dark:text-teal-400 font-medium">
                <span>02. Tech Systems</span>
                <span className="text-slate-400 dark:text-slate-600">Certified</span>
                </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
                <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-500/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Operations & Governance</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Executing rigorous operational workflows, vendor coordination, financial auditing, and CRM optimization.
                </p>
                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Financial Verification & Vault Logs</span></div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>Process Auditing & Compliance</span></div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" /><span>CRM Lead Workflows & CSAT</span></div>
                </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-teal-600 dark:text-teal-400 font-medium">
                <span>03. Management & Audits</span>
                <span className="text-slate-400 dark:text-slate-600">Executive</span>
                </div>
            </div>

            </div>

            <div className="mt-10 bg-slate-50 dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Additional Technical & Creative Skills:</strong> Adobe Photoshop, After Effects, Digital Photo Editing, Sketching & Media Editing.
                </span>
            </div>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Multitasking & Problem Solving</span>
            </div>

        </div>
        </section>
    );
}