import React from 'react';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 px-10 bg-[#0A2540] relative overflow-hidden">
            <div className="max-w-[800px] mx-auto text-center relative z-10">
                <h2 className="font-display text-[56px] font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                    Ready to Experience <br />
                    Content <span className="text-[#00D4AA]">Differently?</span>
                </h2>

                <p className="text-[18px] text-[#94A3B8] mb-10 leading-relaxed max-w-[600px] mx-auto">
                    Browse our library of interactive reports and videos. Find what matters to you.
                </p>

                {/* Button (Hidden as requested) */}
                <div className="hidden">
                    <Link href="/library" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4AA] text-[#0A2540] rounded-xl font-bold text-[16px] hover:bg-[#00b890] transition-colors">
                        Start Exploring
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
