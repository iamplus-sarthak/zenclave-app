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
        <section id="features" className="py-32 px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[13px] font-semibold text-[#00D4AA] uppercase tracking-wide mb-4">
                        Why Zenclave
                    </span>
                    <h2 className="font-display text-[48px] font-extrabold text-[#0A2540] mb-5 tracking-tight">
                        Features that Empower
                    </h2>
                    <p className="text-[20px] text-[#64748B] max-w-[700px] mx-auto leading-relaxed">
                        Everything you need to turn passive readers into active participants.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] p-10 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4AA] to-[#00b890] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div className="w-16 h-16 bg-gradient-to-br from-[#00D4AA] to-[#00b890] rounded-2xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="font-display text-[22px] font-bold text-[#0A2540] mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-[15px] text-[#64748B] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
