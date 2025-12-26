import React from 'react';
import { MessageSquare, Zap, BarChart3, Layers, Lock, Globe } from 'lucide-react';

const features = [
    {
        icon: <MessageSquare className="w-8 h-8 text-white" />,
        title: "Conversational Interface",
        description: "Transform static text into dynamic Q&A sessions. Users get answers instantly without searching."
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Instant Engagement",
        description: "Keep users hooked with interactive elements that reduce drop-off rates significantly."
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-white" />,
        title: "Deep Analytics",
        description: "Understand exactly what your users are interested in with granular interaction tracking."
    },
    {
        icon: <Layers className="w-8 h-8 text-white" />,
        title: "Multi-level Context",
        description: "Support for nested questions allows users to drill down into specific topics effortlessly."
    },
    {
        icon: <Lock className="w-8 h-8 text-white" />,
        title: "Secure Access",
        description: "Enterprise-grade security ensures your sensitive reports are seen only by authorized eyes."
    },
    {
        icon: <Globe className="w-8 h-8 text-white" />,
        title: "Global Reach",
        description: "Deliver consistent experiences across devices and regions with our optimized platform."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 px-10 bg-[#0A2540] text-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-[13px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">
                        THE OLD WAY
                    </span>
                    <h2 className="font-display text-[48px] font-extrabold text-white mb-5 tracking-tight">
                        Professional Content Wasn't <br />
                        Built for How You Actually Work
                    </h2>
                    <p className="text-[18px] text-[#94A3B8] max-w-[700px] mx-auto leading-relaxed">
                        You're busy. You need answers fast. But most professional content still comes in one format: long, linear, one-size-fits-all.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#112d4e] border border-white/10 rounded-[24px] p-8 flex items-start gap-4 hover:bg-[#1a3a5a] transition-colors duration-300">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <p className="text-[16px] text-[#94A3B8] leading-relaxed">
                            PDFs that bury insights in walls of text you don't have time to read
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#112d4e] border border-white/10 rounded-[24px] p-8 flex items-start gap-4 hover:bg-[#1a3a5a] transition-colors duration-300">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-[16px] text-[#94A3B8] leading-relaxed">
                            Videos you can't skip or navigate to the parts that matter to you
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#112d4e] border border-white/10 rounded-[24px] p-8 flex items-start gap-4 hover:bg-[#1a3a5a] transition-colors duration-300">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <p className="text-[16px] text-[#94A3B8] leading-relaxed">
                            No way to quickly find what's relevant to your specific role or needs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
