"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-display text-[28px] font-bold text-[#0A2540] flex items-center gap-2 tracking-tighter">
                    Zenclave
                    <span className="w-2 h-2 bg-[#00D4AA] rounded-full animate-pulse"></span>
                </Link>

                <div className="flex gap-10 items-center">
                    <ul className="flex gap-10 list-none">
                        <li>
                            <Link href="#features" className="text-[#64748B] font-medium text-[15px] hover:text-[#0A2540] transition-colors relative group">
                                Features
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#solutions" className="text-[#64748B] font-medium text-[15px] hover:text-[#0A2540] transition-colors relative group">
                                Solutions
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#resources" className="text-[#64748B] font-medium text-[15px] hover:text-[#0A2540] transition-colors relative group">
                                Resources
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
