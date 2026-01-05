import React from 'react';
import { FileText, Video, Search, Brain } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <span className="inline-block text-[11px] sm:text-[12px] lg:text-[13px] font-bold text-[#00D4AA] uppercase tracking-widest mb-3 sm:mb-4">
                        THE OLD WAY
                    </span>
                    <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#0A2540] mb-4 sm:mb-5 tracking-tight leading-[1.1]">
                        Professional Content Wasn't <br className="hidden sm:block" />
                        Built for How You Actually Work
                    </h2>
                    <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#64748B] max-w-[700px] mx-auto leading-relaxed px-4">
                        You're busy. You need answers fast. But most professional content still comes in one format: long, linear, one-size-fits-all.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium text-[#334155] leading-relaxed">
                            PDFs that bury insights in walls of text you don't have time to read
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <Video className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium text-[#334155] leading-relaxed">
                            Videos you can't skip or navigate to the parts that matter to you
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <Search className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium text-[#334155] leading-relaxed">
                            No way to quickly find what's relevant to your specific role or needs
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00D4AA] transition-colors duration-300">
                            <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00D4AA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium text-[#334155] leading-relaxed">
                            Passive consumption that doesn't stick or engage your attention
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
