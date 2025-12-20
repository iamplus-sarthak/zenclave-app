"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
}

interface Segment {
    type: 'text' | 'link';
    content: string;
    href?: string;
}

export default function Typewriter({ text, speed = 15, onComplete }: TypewriterProps) {
    // 1. Parse text into segments correctly
    const segments = useMemo(() => {
        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
        return parts.map((part): Segment => {
            const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (match) {
                return { type: 'link', content: match[1], href: match[2] };
            }
            return { type: 'text', content: part };
        });
    }, [text]);

    const [globalCharIndex, setGlobalCharIndex] = useState(0);
    const totalChars = useMemo(() => segments.reduce((acc, seg) => acc + seg.content.length, 0), [segments]);

    useEffect(() => {
        if (globalCharIndex >= totalChars) {
            if (onComplete) onComplete();
            return;
        }

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
    }, [globalCharIndex, totalChars, speed, onComplete]);

    // Derived render state
    const renderContent = () => {
        let charsRemaining = globalCharIndex;
        const renderedSegments = [];

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            const segLen = segment.content.length;

            if (charsRemaining <= 0) {
                // Not reached yet
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
