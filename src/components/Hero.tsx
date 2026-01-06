import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-x-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDFA]">
            {/* Background Blob */}
            <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,212,170,0.1)_0%,transparent_70%)] rounded-full animate-float pointer-events-none hidden lg:block"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10 w-full py-12 lg:py-0">
                {/* Content */}
                <div className="flex flex-col justify-center animate-slide-in-left">
                    <div className="inline-flex items-start self-start">
                        <div className="inline-flex items-center gap-2 text-[12px] sm:text-[14px] font-medium text-[#00D4AA] bg-[#00D4AA]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#00D4AA]/20 mb-4 sm:mb-6">
                            <span className="w-2 h-2 bg-[#00D4AA] rounded-full"></span>
                            Interactive Reports & Video Insights
                        </div>
                    </div>

                    <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.1] text-[#0A2540] mb-3 sm:mb-4 tracking-tighter">
                        Content That Adapts <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00D4AA] to-[#00b890]">
                            to You
                        </span>
                    </h1>

                    <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-bold text-[#0A2540]/80 mb-4 sm:mb-6">
                        Consume Content Faster With AI Powered Assistance
                    </h2>

                    <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#64748B] mb-6 sm:mb-10 leading-[1.7] max-w-lg">
                        Interactive reports and videos that let you explore what matters—skip what doesn't. No more 40-page PDFs. No more passive scrolling. Just the insights you actually need.
                    </p>
                </div>

                {/* Visual Mockup */}
                <div className="relative animate-slide-in-right h-full flex items-center">
                    <div className="w-full bg-[#F8FAFC] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(10,37,64,0.12)] border border-[#E2E8F0]">
                        {/* Mockup Header */}
                        <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a6a] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-7 flex justify-between items-center">
                            <div className="text-white font-display font-semibold text-sm sm:text-base lg:text-lg">Report Viewer</div>
                            <div className="flex gap-2 sm:gap-4">
                                <div className="bg-white/15 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-lg text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-white">98% Engagement</div>
                            </div>
                        </div>

                        {/* Mockup Content Grid */}
                        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            {/* Fake Document */}
                            <div className="col-span-1 sm:col-span-2 bg-white rounded-2xl p-4 sm:p-5 lg:p-7 border border-[#E2E8F0]">
                                <div className="font-display font-bold text-[#0A2540] mb-3 sm:mb-4 text-sm sm:text-base">Q3 Market Analysis</div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-[#F1F5F9] rounded w-full"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[90%]"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[95%]"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[80%]"></div>
                                </div>
                                <div className="mt-4 sm:mt-6 flex flex-col gap-2">
                                    <div className="h-2 bg-[#F1F5F9] rounded w-full"></div>
                                    <div className="h-2 bg-[#F1F5F9] rounded w-[85%]"></div>
                                </div>
                            </div>

                            {/* Fake Chat Interface */}
                            <div className="col-span-1 bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#E2E8F0] flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-[11px] sm:text-[12px] lg:text-[13px] font-semibold text-[#0A2540] mb-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#00D4AA] rounded-md flex items-center justify-center text-white font-bold text-xs">?</div>
                                    Zenbot
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-2 sm:p-3 text-[10px] sm:text-[11px] text-[#64748B]">
                                        Key findings summary...
                                    </div>
                                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] p-2 sm:p-3 text-[10px] sm:text-[11px] text-[#64748B] hover:bg-white hover:border-[#00D4AA] cursor-pointer transition-colors">
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
