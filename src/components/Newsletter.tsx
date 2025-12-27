import React from 'react';

export default function Newsletter() {
    return (
        <section className="py-24 px-10 bg-white border-y border-[#E2E8F0]">
            <div className="max-w-[700px] mx-auto text-center relative z-10">
                <span className="inline-block text-[13px] font-bold text-[#00D4AA] uppercase tracking-widest mb-6">
                    STAY IN THE LOOP
                </span>

                <h2 className="font-display text-[48px] font-extrabold text-[#0A2540] mb-6 tracking-tight">
                    New Insights, Delivered Weekly
                </h2>

                <p className="text-[18px] text-[#64748B] mb-10 leading-relaxed">
                    Get notified when new interactive reports and videos drop. No spam, just content.
                </p>

                <div className="flex gap-4 max-w-[500px] mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-6 py-4 text-[#0A2540] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00D4AA] focus:ring-1 focus:ring-[#00D4AA] transition-all"
                    />
                    <button className="px-8 py-4 bg-[#00D4AA] text-white rounded-xl font-bold text-[16px] hover:bg-[#00b890] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00D4AA]/30 transition-all duration-300">
                        Subscribe
                    </button>
                </div>

                <p className="text-[14px] text-[#94A3B8] mt-6">
                    Unsubscribe anytime. We respect your inbox.
                </p>
            </div>
        </section>
    );
}
