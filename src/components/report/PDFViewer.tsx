"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search } from 'lucide-react';

interface PDFViewerProps {
    title: string;
    url: string;
}

export default function PDFViewer({ title = "Report", url }: PDFViewerProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getFullUrl = (url: string) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return window.location.origin + url;
    };

    const viewerUrl = isMobile
        ? `https://docs.google.com/viewer?url=${encodeURIComponent(getFullUrl(url))}&embedded=true`
        : `${url}#toolbar=0&navpanes=0&scrollbar=1`;

    return (
        <div className="w-full lg:w-1/2 flex flex-col h-[500px] lg:h-full bg-white border border-[#E2E8F0] rounded-xl lg:rounded-2xl overflow-hidden">

            {/* Simple Toolbar */}
            <div className="h-12 sm:h-14 border-b border-[#E2E8F0] bg-white flex items-center justify-between px-3 sm:px-4 flex-shrink-0">
                <div className="text-[13px] sm:text-[14px] font-semibold text-[#0A2540] truncate" title={title}>
                    {title}
                </div>
            </div>

            {/* Actual PDF Viewer */}
            <div className="flex-1 bg-[#525659] overflow-hidden relative">
                <iframe
                    src={viewerUrl}
                    className="w-full h-full border-none"
                    title={title}
                />


                {/* Overlay to hide Google Docs Viewer's external link button on mobile */}
                {isMobile && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#525659] pointer-events-none z-10"></div>
                )}
            </div>
        </div>
    );
}
