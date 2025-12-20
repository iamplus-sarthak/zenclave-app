"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Share2, Download, ArrowLeft, Check } from 'lucide-react';

interface ReportHeaderProps {
    pdfUrl?: string;
}

export default function ReportHeader({ pdfUrl }: ReportHeaderProps) {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleDownload = () => {
        if (!pdfUrl) return;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop() || 'report.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] h-16">
            <div className="h-full max-w-[1600px] mx-auto px-6 flex items-center justify-between">

                {/* Left: Brand & Back */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="font-display text-[24px] font-bold text-[#0A2540] flex items-center gap-2 tracking-tighter">
                        Zenclave
                        <span className="w-2 h-2 bg-[#00D4AA] rounded-full"></span>
                    </Link>

                    <div className="h-6 w-[1px] bg-[#E2E8F0]"></div>

                    <Link href="/" className="flex items-center gap-2 text-[#64748B] hover:text-[#0A2540] transition-colors text-[14px] font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleShare}
                        className="p-2.5 text-[#64748B] hover:text-[#0A2540] hover:bg-[#F8FAFC] rounded-lg transition-all border border-transparent hover:border-[#E2E8F0] relative"
                    >
                        {copied ? <Check className="w-5 h-5 text-[#10B981]" /> : <Share2 className="w-5 h-5" />}
                        {copied && (
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#0A2540] text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                Link Copied!
                            </span>
                        )}
                    </button>

                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#0A2540] text-[14px] font-medium hover:bg-[#F8FAFC] transition-all"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>

                    <button
                        onClick={() => router.push('/')}
                        className="px-5 py-2.5 bg-[#0A2540] text-white rounded-lg text-[14px] font-medium hover:bg-[#1a3a5a] transition-all shadow-sm"
                    >
                        Exit Report
                    </button>
                </div>
            </div>
        </header>
    );
}
