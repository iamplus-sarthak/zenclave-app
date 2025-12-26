import React from 'react';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-32 px-10 bg-gradient-to-br from-[#0A2540] to-[#1a4a6a] relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,170,0.2)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

            <div className="max-w-[700px] mx-auto text-center relative z-10">
                <span className="inline-block text-[13px] font-bold text-[#94A3B8] uppercase tracking-widest mb-6">
                    STAY IN THE LOOP
                </span>

                <h2 className="font-display text-[48px] font-extrabold text-white mb-6 tracking-tight">
                    New Insights, Delivered Weekly
                </h2>

                <p className="text-[18px] text-[#94A3B8] mb-10 leading-relaxed">
                    Get notified when new interactive reports and videos drop. No spam, just content.
                </p>

                <div className="flex gap-4 max-w-[500px] mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 bg-[#112d4e] border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#00D4AA] transition-colors"
                    />
                    <button className="px-8 py-4 bg-[#00D4AA] text-[#0A2540] rounded-xl font-bold text-[16px] hover:bg-[#00b890] transition-colors">
                        Subscribe
                    </button>
                </div>

                <p className="text-[14px] text-[#64748B] mt-6">
                    Unsubscribe anytime. We respect your inbox.
                </p>
            </div>
        </section>
    );
}
