import React from 'react';

export default function WhyZenclave() {
    return (
        <section className="py-32 px-10 bg-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block text-[13px] font-bold text-[#00D4AA] uppercase tracking-widest mb-4">
                        WHY ZENCLAVE
                    </span>
                    <h2 className="font-display text-[48px] font-extrabold text-[#0A2540] mb-5 tracking-tight">
                        Not Your Average <span className="text-[#00D4AA]">Whitepaper</span>
                    </h2>
                </div>

                <div className="rounded-[24px] border border-[#E2E8F0] overflow-hidden bg-white shadow-xl">
                    <div className="grid grid-cols-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                        <div className="p-6"></div>
                        <div className="p-6 text-center font-bold text-[#64748B]">Traditional</div>
                        <div className="p-6 text-center font-bold text-white bg-[#00D4AA]">Zenclave</div>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-3 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                        <div className="p-6 font-bold text-[#0A2540] pl-10 flex items-center">Format</div>
                        <div className="p-6 text-center text-[#64748B] flex items-center justify-center">Static PDF/Video</div>
                        <div className="p-6 text-center text-[#00D4AA] font-bold bg-[#00D4AA]/5 flex items-center justify-center">Interactive</div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                        <div className="p-6 font-bold text-[#0A2540] pl-10 flex items-center">Navigation</div>
                        <div className="p-6 text-center text-[#64748B] flex items-center justify-center">Linear, start-to-end</div>
                        <div className="p-6 text-center text-[#00D4AA] font-bold bg-[#00D4AA]/5 flex items-center justify-center">You choose</div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-3 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                        <div className="p-6 font-bold text-[#0A2540] pl-10 flex items-center">Personalization</div>
                        <div className="p-6 text-center text-[#64748B] flex items-center justify-center">None</div>
                        <div className="p-6 text-center text-[#00D4AA] font-bold bg-[#00D4AA]/5 flex items-center justify-center">AI-powered</div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-3 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                        <div className="p-6 font-bold text-[#0A2540] pl-10 flex items-center">Time to Value</div>
                        <div className="p-6 text-center text-[#64748B] flex items-center justify-center">30-60 minutes</div>
                        <div className="p-6 text-center text-[#00D4AA] font-bold bg-[#00D4AA]/5 flex items-center justify-center">5-15 minutes</div>
                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-3 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                        <div className="p-6 font-bold text-[#0A2540] pl-10 flex items-center">Engagement</div>
                        <div className="p-6 text-center text-[#64748B] flex items-center justify-center">Passive reading</div>
                        <div className="p-6 text-center text-[#00D4AA] font-bold bg-[#00D4AA]/5 flex items-center justify-center">Active exploration</div>
                    </div>

                    {/* Row 6 */}
                    <div className="grid grid-cols-3 hover:bg-[#F8FAFC] transition-colors">
                        <div className="p-6 font-bold text-[#0A2540] pl-10 flex items-center">Takeaways</div>
                        <div className="p-6 text-center text-[#64748B] flex items-center justify-center">Generic</div>
                        <div className="p-6 text-center text-[#00D4AA] font-bold bg-[#00D4AA]/5 flex items-center justify-center">Personalized</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
