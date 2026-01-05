"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
}

interface Segment {
    type: 'text' | 'link' | 'bold';
    content: string;
    href?: string;
}

export default function Typewriter({ text, speed = 15, onComplete }: TypewriterProps) {
    // 1. Parse text into segments (links, bold, and plain text)
    const segments = useMemo(() => {
        // First, split by markdown links [text](url)
        const parts: Segment[] = [];
        let remaining = text;

        // Combined regex for links and bold
        const combinedRegex = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)/g;
        let lastIndex = 0;
        let match;

        while ((match = combinedRegex.exec(text)) !== null) {
            // Add text before match
            if (match.index > lastIndex) {
                parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
            }

            // Check if it's a link or bold
            if (match[1]) {
                // It's a link
                const linkMatch = match[1].match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (linkMatch) {
                    parts.push({ type: 'link', content: linkMatch[1], href: linkMatch[2] });
                }
            } else if (match[2]) {
                // It's bold
                const boldContent = match[2].replace(/\*\*/g, '');
                parts.push({ type: 'bold', content: boldContent });
            }

            lastIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push({ type: 'text', content: text.slice(lastIndex) });
        }

        return parts.length > 0 ? parts : [{ type: 'text', content: text }];
    }, [text]);

    const [globalCharIndex, setGlobalCharIndex] = useState(0);
    const totalChars = useMemo(() => segments.reduce((acc, seg) => acc + seg.content.length, 0), [segments]);

    // Handle completion
    useEffect(() => {
        if (globalCharIndex >= totalChars && totalChars > 0) {
            const timeout = setTimeout(() => {
                if (onComplete) onComplete();
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [globalCharIndex, totalChars, onComplete]);

    // Handle typing interval
    useEffect(() => {
        if (totalChars === 0) return;

        const interval = setInterval(() => {
            setGlobalCharIndex((prev) => {
                if (prev >= totalChars) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [totalChars, speed]);

    // Derived render state
    const renderContent = () => {
        let charsRemaining = globalCharIndex;
        const renderedSegments = [];

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            const segLen = segment.content.length;

            if (charsRemaining <= 0) {
                break;
            }

            const charsToRender = Math.min(charsRemaining, segLen);
            const textSlice = segment.content.slice(0, charsToRender);

            if (segment.type === 'link') {
                renderedSegments.push(
                    <a
                        key={i}
                        href={segment.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00D4AA] underline hover:text-[#00b890] font-medium transition-colors"
                    >
                        {textSlice}
                    </a>
                );
            } else if (segment.type === 'bold') {
                renderedSegments.push(
                    <strong key={i} className="font-bold text-[#0A2540]">
                        {textSlice}
                    </strong>
                );
            } else {
                renderedSegments.push(<span key={i}>{textSlice}</span>);
            }

            charsRemaining -= segLen;
        }

        return renderedSegments;
    };

    return (
        <div className="whitespace-pre-wrap leading-relaxed">
            {renderContent()}
            {globalCharIndex < totalChars && (
                <span className="w-1.5 h-4 bg-[#00D4AA] inline-block ml-0.5 animate-pulse align-middle"></span>
            )}
        </div>
    );
}
