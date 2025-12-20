"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Check, AlertCircle } from 'lucide-react';

export default function GetStarted() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (value: string) => {
        if (value.length === 0) {
            setStatus('idle');
            setErrorMessage('');
            return false;
        }

        // Basic regex: something@something.something
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (isValid) {
            setStatus('valid');
            setErrorMessage('');
        } else {
            // Only show error if they've typed enough to potentially be finished but it's wrong
            if (value.length > 5 && value.includes('@') === false) {
                setStatus('invalid');
                // Keeping UI clean, relying on submit for hard error message usually, 
                // but here we can hint if needed. For now sticking to icon changes.
            } else if (value.includes('@') && value.split('@')[1].length > 0 && !value.split('@')[1].includes('.')) {
                // Incomplete domain
                setStatus('invalid');
            } else {
                // Typing...
                setStatus('idle');
            }
        }
        return isValid;
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmail(val);
        validateEmail(val);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValid) {
            setStatus('invalid');
            setErrorMessage('Please enter a valid email address');
            // Animation trigger could go here
        } else {
            // Success
            console.log('Access granted for:', email);
            // In a real app, we'd save this to DB/Auth
            router.push('/report');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#E0F2FE] flex items-center justify-center p-5 font-sans text-[#0A2540]">
            <div className="w-full max-w-[540px] bg-white rounded-3xl p-12 md:p-16 shadow-[0_20px_60px_rgba(10,37,64,0.08)] animate-slide-up">

                {/* Logo */}
                <div className="text-center mb-12">
                    <Link href="/" className="font-display text-[32px] font-bold text-[#0A2540] inline-flex items-baseline gap-1 tracking-tighter">
                        Zenclave<span className="w-2 h-2 bg-[#00D4AA] rounded-full animate-pulse self-center"></span>
                    </Link>
                </div>

                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00D4AA] to-[#00b890] rounded-[20px] mb-8 shadow-[0_8px_24px_rgba(0,212,170,0.2)]">
                        <Mail className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>

                    <h1 className="font-display text-[28px] font-bold mb-3 tracking-tight">
                        Access Your Exclusive Report
                    </h1>
                    <p className="text-[16px] text-[#64748B] mb-10 leading-relaxed">
                        Enter your email address to unlock valuable insights and data-driven analysis.
                    </p>

                    <form onSubmit={handleSubmit} className="text-left w-full">
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-[14px] font-medium mb-2 pl-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleInput}
                                    placeholder="your.email@company.com"
                                    className={`w-full px-4 py-4 pr-12 text-[16px] border-2 rounded-xl outline-none transition-all duration-300
                    ${status === 'invalid'
                                            ? 'border-[#EF4444] bg-[#FEF2F2] focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]'
                                            : 'border-[#E2E8F0] bg-white focus:border-[#00D4AA] focus:shadow-[0_0_0_4px_rgba(0,212,170,0.1)]'
                                        }`}
                                />

                                {/* Icons */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    {status === 'valid' && (
                                        <Check className="w-5 h-5 text-[#00D4AA]" />
                                    )}
                                    {status === 'invalid' && (
                                        <AlertCircle className="w-5 h-5 text-[#EF4444]" />
                                    )}
                                </div>
                            </div>

                            {/* Error Message */}
                            {status === 'invalid' && errorMessage && (
                                <div className="text-[#EF4444] text-[13px] mt-2 pl-1 animate-shake">
                                    {errorMessage}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white font-medium text-[16px] rounded-xl 
                shadow-[0_4px_12px_rgba(10,37,64,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,37,64,0.3)] 
                transition-all duration-300 active:translate-y-0 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Access Report</span>
                            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-[100%]"></div>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[13px] text-[#64748B]">
                            By accessing this report, you agree to our <a href="#" className="font-medium text-[#0A2540] hover:text-[#00D4AA] transition-colors">Terms of Service</a> and <a href="#" className="font-medium text-[#0A2540] hover:text-[#00D4AA] transition-colors">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
