"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Share2, Download, ArrowLeft, Check } from 'lucide-react';
import LeadGenPopup from './LeadGenPopup';

interface ReportHeaderProps {
    pdfUrl?: string;
}

export default function ReportHeader({ pdfUrl }: ReportHeaderProps) {
    const [showPopup, setShowPopup] = useState(false);
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

    const performDownload = () => {
        if (!pdfUrl) return;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop() || 'report.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] h-14 sm:h-16">
                <div className="h-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between">

                    {/* Left: Brand Only */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href="/" className="font-display text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#0A2540] flex items-center gap-2 tracking-tighter">
                            Zenclave
                            <span className="w-2 h-2 bg-[#00D4AA] rounded-full"></span>
                        </Link>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={handleShare}
                            className="hidden sm:flex p-2 sm:p-2.5 text-[#64748B] hover:text-[#0A2540] hover:bg-[#F8FAFC] rounded-lg transition-all border border-transparent hover:border-[#E2E8F0] relative"
                            title="Share Link"
                        >
                            {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" /> : <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                            {copied && (
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#0A2540] text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                    Link Copied!
                                </span>
                            )}
                        </button>

                        <button
                            disabled
                            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#94A3B8] text-white border border-[#94A3B8] rounded-lg text-[13px] sm:text-[14px] font-medium cursor-not-allowed opacity-60"
                        >
                            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Download PDF</span>
                            <span className="sm:hidden">PDF</span>
                        </button>
                    </div>
                </div>
            </header>

            <LeadGenPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
                onDownload={performDownload}
            />
        </>
    );
}
