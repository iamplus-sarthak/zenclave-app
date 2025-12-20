"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search } from 'lucide-react';

interface PDFViewerProps {
    title: string;
    url: string;
}

export default function PDFViewer({ title = "Report", url }: PDFViewerProps) {
    return (
        <div className="w-1/2 flex flex-col h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden">

            {/* Simple Toolbar */}
            <div className="h-14 border-b border-[#E2E8F0] bg-white flex items-center justify-between px-4 flex-shrink-0">
                <div className="text-[14px] font-semibold text-[#0A2540] truncate" title={title}>
                    {title}
                </div>
                {/* External Open Button */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-medium text-[#00D4AA] hover:underline"
                >
                    Open in New Tab
                </a>
            </div>

            {/* Actual PDF Viewer */}
            <div className="flex-1 bg-[#525659] overflow-hidden relative">
                <iframe
                    src={`${url}#view=FitH`}
                    className="w-full h-full border-none"
                    title={title}
                />
            </div>
        </div>
    );
}
