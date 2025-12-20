import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDFA]">
            {/* Background Blob */}
            <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,212,170,0.1)_0%,transparent_70%)] rounded-full animate-float pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
                {/* Content */}
                <div className="flex flex-col justify-center animate-slide-in-left">
                    <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#64748B] mb-6">
                        <span className="w-2 h-2 bg-[#00D4AA] rounded-full"></span>
                        Reimagining Report Consumption
                    </div>

                    <h1 className="font-display text-[64px] font-extrabold leading-[1.1] text-[#0A2540] mb-6 tracking-tighter">
                        Transform Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00D4AA] to-[#00b890]">
                            Business Intelligence
                        </span>
                    </h1>

                    <p className="text-[20px] text-[#64748B] mb-10 leading-[1.7] max-w-lg">
                        Turn static PDF reports into engaging, conversational experiences that drive deeper insights and better decision-making.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/get-started" className="px-8 py-4 bg-[#0A2540] text-white rounded-xl font-semibold text-[16px] hover:bg-[#1a3a5a] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                            Get Started
                        </Link>
                        <Link href="#demo" className="px-8 py-4 bg-white text-[#0A2540] border-2 border-[#E2E8F0] rounded-xl font-semibold text-[16px] hover:bg-[#F8FAFC] hover:border-[#00D4AA] transition-all duration-300">
                            View Demo
                        </Link>
                    </div>
                </div>

                {/* Visual Mockup */}
                <div className="relative animate-slide-in-right h-full flex items-center">
                    <div className="w-full bg-[#F8FAFC] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(10,37,64,0.12)] border border-[#E2E8F0]">
                        {/* Mockup Header */}
                        <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a6a] px-8 py-7 flex justify-between items-center">
                            <div className="text-white font-display font-semibold text-lg">Report Viewer</div>
                            <div className="flex gap-4">
                                <div className="bg-white/15 px-4 py-2 rounded-lg text-[13px] font-medium text-white">98% Engagement</div>
                            </div>
                        </div>

                        {/* Mockup Content Grid */}
                        <div className="p-8 grid grid-cols-3 gap-6">
                            {/* Fake Document */}
                            <div className="col-span-2 bg-white rounded-2xl p-7 border border-[#E2E8F0]">
                                <div className="font-display font-bold text-[#0A2540] mb-4">Q3 Market Analysis</div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-[#F1F5F9] rounded w-full"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[90%]"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[95%]"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[80%]"></div>
                                </div>
                                <div className="mt-6 flex flex-col gap-2">
                                    <div className="h-2 bg-[#F1F5F9] rounded w-full"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[85%]"></div>
                                </div>
                            </div>

                            {/* Fake Chat Interface */}
                            <div className="col-span-1 bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0A2540] mb-2">
                                    <div className="w-7 h-7 bg-[#00D4AA] rounded-md flex items-center justify-center text-white font-bold text-xs">?</div>
                                    Zenbot
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-3 text-[11px] text-[#64748B]">
                                        Key findings summary...
                                    </div>
                                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-3 text-[11px] text-[#64748B] hover:bg-white hover:border-[#00D4AA] cursor-pointer transition-colors">
                                        Growth metrics?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
