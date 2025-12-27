import React from 'react';
import { FileText, Video, Search, Brain } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="py-32 px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-[13px] font-bold text-[#00D4AA] uppercase tracking-widest mb-4">
                        THE OLD WAY
                    </span>
                    <h2 className="font-display text-[48px] font-extrabold text-[#0A2540] mb-5 tracking-tight leading-[1.1]">
                        Professional Content Wasn't <br />
                        Built for How You Actually Work
                    </h2>
                    <p className="text-[18px] text-[#64748B] max-w-[700px] mx-auto leading-relaxed">
                        You're busy. You need answers fast. But most professional content still comes in one format: long, linear, one-size-fits-all.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 flex items-center gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <FileText className="w-7 h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[18px] font-medium text-[#334155] leading-relaxed">
                            PDFs that bury insights in walls of text you don't have time to read
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 flex items-center gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <Video className="w-7 h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[18px] font-medium text-[#334155] leading-relaxed">
                            Videos you can't skip or navigate to the parts that matter to you
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 flex items-center gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <Search className="w-7 h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[18px] font-medium text-[#334155] leading-relaxed">
                            No way to quickly find what's relevant to your specific role or needs
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 flex items-center gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <Brain className="w-7 h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[18px] font-medium text-[#334155] leading-relaxed">
                            Passive consumption that doesn't stick or engage your attention
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
