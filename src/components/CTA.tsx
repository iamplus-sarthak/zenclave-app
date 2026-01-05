import React from 'react';

export default function CTA() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#0A2540] relative overflow-hidden">
            <div className="max-w-[800px] mx-auto text-center relative z-10">
                <h2 className="font-display text-[36px] sm:text-[46px] lg:text-[56px] font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                    Ready to Experience <br className="hidden sm:block" />
                    Content <span className="text-[#00D4AA]">Differently?</span>
                </h2>

                <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#94A3B8] mb-8 sm:mb-10 leading-relaxed max-w-[600px] mx-auto px-4">
                    Browse our library of interactive reports and videos. Find what matters to you.
                </p>

                {/* Button (Hidden as requested) */}
                <div className="hidden">
                    <a href="/library" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#00D4AA] text-[#0A2540] rounded-xl font-bold text-[15px] sm:text-[16px] hover:bg-[#00b890] transition-colors">
                        Start Exploring
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
