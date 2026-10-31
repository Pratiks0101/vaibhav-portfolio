export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-[#090d16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-14">
            <div className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2">Track Record</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Professional Experience</h2>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            
            {/* Experience Item 1 */}
            <div className="relative flex flex-col sm:flex-row items-start group">
                <div className="flex items-center justify-start sm:justify-end w-full sm:w-1/2 sm:pr-10 mb-4 sm:mb-0">
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl w-full hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded border border-teal-500/30">
                        Sep 2026 – Present
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">Nagpur, MH</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">CRM Executive</h3>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">Sankool Solution</div>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Maintain and update customer databases with high accuracy, ensuring data integrity, proper segmentation, and compliance.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Onboard new clients smoothly by guiding them through initial setups, account configurations, and product walkthroughs.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Assist in automating routine sales workflows and follow-up reminders, reducing response time by streamlining lead distribution.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Serve as primary point of contact for customer queries, resolving issues promptly to improve CSAT scores.</span></li>
                    </ul>
                </div>
                </div>

                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-50 dark:bg-[#090d16] border-2 border-teal-600 dark:border-teal-400 group-hover:scale-125 transition-transform z-10 top-6" />

                <div className="w-full sm:w-1/2 sm:pl-10 hidden sm:block">
                <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">CRM Automation & Account Setup</div>
                </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex flex-col sm:flex-row items-start group">
                <div className="w-full sm:w-1/2 sm:pr-10 hidden sm:block text-right">
                <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">Banking Audits & Vault Management</div>
                </div>

                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-50 dark:bg-[#090d16] border-2 border-teal-600 dark:border-teal-400 group-hover:scale-125 transition-transform z-10 top-6" />

                <div className="flex items-center justify-start w-full sm:w-1/2 sm:pl-10">
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl w-full hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded border border-teal-500/30">
                        Jul 2023 – Jul 2026
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">Nagpur, MH</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cashier & Branch Operations Associate</h3>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">Nirmal Urban Co-op Bank</div>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Managed high-volume cash transactions, vault liquidity logs, and core banking system entries with zero variance.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Handled customer queries, KYC verification, and digital documentation compliance across branch operations.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Executed daily operations while maintaining strict adherence to audit standards and internal banking protocols.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Prepared analytical status reports using MS Excel for management review, ensuring regulatory compliance.</span></li>
                    </ul>
                </div>
                </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative flex flex-col sm:flex-row items-start group">
                <div className="flex items-center justify-start sm:justify-end w-full sm:w-1/2 sm:pr-10 mb-4 sm:mb-0">
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl w-full hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded border border-teal-500/30">
                        Mar 2019 – Sep 2023
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">Nagpur, MH</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Administrative Associate</h3>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">Vision Voice Public School</div>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Maintained secure digital/physical filing systems and updated daily attendance and MIS records.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Managed IT equipment checks, stationery inventory, and basic office hardware maintenance.</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span><span>Monitored operational expenditure against approved budgets and drafted official business communications.</span></li>
                    </ul>
                </div>
                </div>

                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-50 dark:bg-[#090d16] border-2 border-teal-600 dark:border-teal-400 group-hover:scale-125 transition-transform z-10 top-6" />

                <div className="w-full sm:w-1/2 sm:pl-10 hidden sm:block">
                <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">Edu Infrastructure & Admin MIS</div>
                </div>
            </div>

            </div>

        </div>
        </section>
    );
}