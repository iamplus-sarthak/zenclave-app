import React from 'react';

export default function TypingIndicator() {
    return (
        <div className="flex items-center gap-1 p-2">
            <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce"></div>
        </div>
    );
}
