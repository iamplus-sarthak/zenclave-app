import React from 'react';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-32 px-10 bg-gradient-to-br from-[#0A2540] to-[#1a4a6a] relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,170,0.2)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

            <div className="max-w-[900px] mx-auto text-center relative z-10">
                <h2 className="font-display text-[48px] font-extrabold text-white mb-5 tracking-tight">
                    Ready to Transform Your Reports?
                </h2>

                <p className="text-[20px] text-white/85 mb-10 leading-[1.7]">
                    Join forward-thinking companies that are turning static documents into dynamic assets.
                </p>

                <div className="flex gap-4 justify-center">
                    <Link href="/get-started" className="px-10 py-4 bg-[#00D4AA] text-white rounded-xl font-semibold text-[17px] hover:bg-[#00b890] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00D4AA]/30 transition-all duration-300">
                        Get Started Now
                    </Link>
                    <button className="px-10 py-4 bg-transparent text-white border-2 border-white/20 rounded-xl font-semibold text-[17px] hover:bg-white/10 hover:border-white transition-all duration-300">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
