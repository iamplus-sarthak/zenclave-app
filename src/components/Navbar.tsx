"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:py-5 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-display text-[22px] sm:text-[28px] font-bold text-[#0A2540] flex items-center gap-2 tracking-tighter z-50">
                    Zenclave
                    <span className="w-2 h-2 bg-[#00D4AA] rounded-full animate-pulse"></span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 items-center">
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-[#0A2540] hover:bg-[#F8FAFC] rounded-lg transition-colors z-50"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-white/98 backdrop-blur-lg transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ top: '64px' }}>
                <div className="px-4 py-8 space-y-6">
                    <Link
                        href="#features"
                        onClick={closeMobileMenu}
                        className="block text-[#0A2540] font-medium text-[18px] py-3 px-4 hover:bg-[#F8FAFC] rounded-lg transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#solutions"
                        onClick={closeMobileMenu}
                        className="block text-[#0A2540] font-medium text-[18px] py-3 px-4 hover:bg-[#F8FAFC] rounded-lg transition-colors"
                    >
                        Solutions
                    </Link>
                    <Link
                        href="#resources"
                        onClick={closeMobileMenu}
                        className="block text-[#0A2540] font-medium text-[18px] py-3 px-4 hover:bg-[#F8FAFC] rounded-lg transition-colors"
                    >
                        Resources
                    </Link>
                </div>
            </div>
        </nav>
    );
}
