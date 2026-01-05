import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <section className="bg-[#0A2540] text-white pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-10">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 mb-8 sm:mb-10 border-b border-white/10 pb-8 sm:pb-10">
                {/* Brand */}
                <div className="max-w-sm">
                    <Link href="/" className="font-display text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-3 sm:mb-4 block tracking-tighter">
                        Zenclave<span className="text-[#00D4AA]">.</span>
                    </Link>
                    <p className="text-[14px] sm:text-[15px] opacity-80 leading-[1.7]">
                        Empowering businesses with interactive intelligence. Transform your static reports into dynamic conversations.
                    </p>
                </div>

                {/* Real Links */}
                <div>
                    <h4 className="font-display text-[15px] sm:text-[16px] font-bold mb-4 sm:mb-5 text-[#00D4AA]">Platform</h4>
                    <ul className="space-y-2 sm:space-y-3">
                        <li><Link href="#features" className="text-white/70 hover:text-white transition-colors text-[14px] sm:text-[15px]">Features</Link></li>
                        <li><Link href="#solutions" className="text-white/70 hover:text-white transition-colors text-[14px] sm:text-[15px]">Solutions</Link></li>
                        <li><Link href="#resources" className="text-white/70 hover:text-white transition-colors text-[14px] sm:text-[15px]">Resources</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                <p className="text-[13px] sm:text-[14px] opacity-60 text-center md:text-left">
                    © {new Date().getFullYear()} Zenclave. All rights reserved.
                </p>
            </div>
        </section>
    );
}
