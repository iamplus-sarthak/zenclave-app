import React from 'react';

export default function Newsletter() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white border-y border-[#E2E8F0]">
            <div className="max-w-[700px] mx-auto text-center relative z-10">
                <span className="inline-block text-[11px] sm:text-[12px] lg:text-[13px] font-bold text-[#00D4AA] uppercase tracking-widest mb-4 sm:mb-6">
                    STAY IN THE LOOP
                </span>

                <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold text-[#0A2540] mb-4 sm:mb-6 tracking-tight">
                    New Insights, Delivered Weekly
                </h2>

                <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#64748B] mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4">
                    Get notified when new interactive reports and videos drop. No spam, just content.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[500px] mx-auto px-4">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-[14px] sm:text-[15px] text-[#0A2540] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00D4AA] focus:ring-1 focus:ring-[#00D4AA] transition-all"
                    />
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00D4AA] text-white rounded-xl font-bold text-[15px] sm:text-[16px] hover:bg-[#00b890] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00D4AA]/30 transition-all duration-300 whitespace-nowrap">
                        Subscribe
                    </button>
                </div>

                <p className="text-[13px] sm:text-[14px] text-[#94A3B8] mt-4 sm:mt-6">
                    Unsubscribe anytime. We respect your inbox.
                </p>
            </div>
        </section>
    );
}
