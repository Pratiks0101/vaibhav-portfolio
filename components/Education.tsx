import { GraduationCap, Award, ShieldCheck, Activity } from 'lucide-react';

export default function EducationCerts() {
    return (
        <section id="education" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-[#0d1322]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 space-y-6">
                <div>
                <div className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2">Academic Foundation</div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Education Qualifications</h2>
                </div>

                {/* MBA Card */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-start justify-between">
                    <div>
                    <span className="text-xs font-mono text-teal-600 dark:text-teal-400 font-semibold">Post-Graduation (Expected 2026)</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Master of Business Administration (MBA)</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">IIHM Nagpur, Maharashtra</p>
                    </div>
                    <GraduationCap className="w-8 h-8 text-teal-600 dark:text-teal-400 shrink-0" />
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    Focusing on operations management, process optimization, corporate governance, and analytical decision-making.
                </p>
                </div>

                {/* BCA Card */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="flex items-start justify-between">
                    <div>
                    <span className="text-xs font-mono text-teal-600 dark:text-teal-400 font-semibold">Graduation (Passed 2023)</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Rabindranath Tagore University, Bhopal, MP</p>
                    </div>
                    <GraduationCap className="w-8 h-8 text-teal-600 dark:text-teal-400 shrink-0" />
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-700 dark:text-slate-300">Grade Score: <strong className="text-slate-900 dark:text-white">70% (CGPA: 7.2)</strong></span>
                    <span className="text-slate-500 dark:text-slate-400">Core CS & Databases</span>
                </div>
                </div>

                {/* HSC Card */}
                <div className="bg-white/80 dark:bg-[#111827]/60 border border-slate-200 dark:border-slate-800/80 p-4 rounded-xl flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
                <div>
                    <span className="text-slate-500 dark:text-slate-400 block font-mono text-[10px]">HIGHER SECONDARY (HSC)</span>
                    <span className="font-medium text-slate-900 dark:text-white">Parth Junior College, Nagpur</span>
                </div>
                <span className="font-mono text-teal-600 dark:text-teal-400 font-semibold">68.2% (2020)</span>
                </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
                <div>
                <div className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2">Professional Training</div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Certifications & Credentials</h2>
                </div>

                <div className="space-y-4">
                {/* Cert 1 */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
                    <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border border-teal-500/30 shrink-0"><Award className="w-5 h-5" /></div>
                    <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Diploma in PC Maintenance & Networking</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">AICPTR, Thane</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-2">Comprehensive hands-on training in computer hardware assembly, troubleshooting, basic network routing, and system recovery protocols.</p>
                    </div>
                </div>

                {/* Cert 2 */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
                    <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border border-teal-500/30 shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                    <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Certification Training Program on Cyber Security</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">College of Agricultural Banking</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-2">Focused on institutional data security, financial phishing defense, cyber hygiene, and data compliance protocols.</p>
                    </div>
                </div>

                {/* Cert 3 */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
                    <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border border-teal-500/30 shrink-0"><Activity className="w-5 h-5" /></div>
                    <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Certificate in Management Development</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Dhananjayrao Gadgil Institute</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-2">Executive module covering operational leadership, client relation strategies, and supervisory control.</p>
                    </div>
                </div>
                </div>
            </div>

            </div>

        </div>
        </section>
    );
}