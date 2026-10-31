import { ShieldCheck, BarChart3, Cpu } from 'lucide-react';

export default function MetricsBar() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm space-y-3 transition-all hover:border-teal-500/40">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Process Compliance</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Managed high-volume vault liquidity, KYC protocols & auditing entries with 100% accuracy.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm space-y-3 transition-all hover:border-teal-500/40">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Advanced MIS & Data</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Structured reporting using Power BI, Advanced Excel, and Core Banking databases.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm space-y-3 transition-all hover:border-teal-500/40">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">IT Infrastructure</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Certified in PC Maintenance, hardware troubleshooting, basic networking & cyber protocols.
                </p>
            </div>

        </div>
    );
}