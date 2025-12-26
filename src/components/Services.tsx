import React from 'react';

const services = [
    {
        number: "01",
        title: "Report Transformation",
        description: "We take your existing PDFs and transform them into interactive digital experiences without losing fidelity.",
        points: ["PDF to Interactive conversion", "Brand alignment", "Mobile optimization"]
    },
    {
        number: "02",
        title: "AI Integration",
        description: "Enhance your reports with intelligent Q&A capabilities that guide users to the most relevant information.",
        points: ["Context-aware answers", "Customizable bot persona", "Predictive questions"]
    },
    {
        number: "03",
        title: "Analytics & Insights",
        description: "Gain visibility into how stakeholders consume your content with detailed engagement metrics.",
        points: ["User journey tracking", "Drop-off analysis", "Engagement heatmaps"]
    },
    {
        number: "04",
        title: "Deployment & Support",
        description: "Seamless deployment to your domain with ongoing support to ensure maximum uptime and performance.",
        points: ["Custom domain setup", "24/7 Monitoring", "Regular updates"]
    }
];

export default function Services() {
    return (
        <section id="solutions" className="py-32 px-10 bg-[#0A2540] text-white">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Content */}
                <div>
                    <span className="inline-block text-[13px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">
                        A BETTER WAY
                    </span>

                    <h2 className="font-display text-[48px] font-extrabold text-white mb-6 tracking-tight">
                        Content <span className="text-[#00D4AA]">You Control</span>
                    </h2>

                    <p className="text-[18px] text-[#94A3B8] mb-12 leading-relaxed">
                        Zenclave reimagines how professionals consume insights. Our AI-powered reports and videos adapt to your interests, letting you explore topics at your own pace. It's like "choose your own adventure" for professional learning.
                    </p>

                    <div className="space-y-8">
                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#00D4AA]/20 flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-white mb-1">Explore Your Way</h3>
                                <p className="text-[#94A3B8] text-[15px]">Navigate directly to sections that matter. Skip what doesn't.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#00D4AA]/20 flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-white mb-1">AI-Personalized Insights</h3>
                                <p className="text-[#94A3B8] text-[15px]">Get takeaways tailored to your selections and interests.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#00D4AA]/20 flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-white mb-1">Interactive Video</h3>
                                <p className="text-[#94A3B8] text-[15px]">Choose topics and shape your viewing experience in real time.</p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#00D4AA]/20 flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-white mb-1">Save Time, Learn More</h3>
                                <p className="text-[#94A3B8] text-[15px]">Get the value of a 40-page report in just 10 minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                    <div className="bg-[#112d4e] rounded-[24px] p-8 border border-white/10 shadow-2xl">
                        {/* Traffic Lights */}
                        <div className="flex gap-2 mb-8">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-6 mb-8 border-b border-white/10 pb-4">
                            <div className="px-4 py-1.5 bg-[#1a3a5a] text-white text-[13px] font-medium rounded-lg">Overview</div>
                            <div className="px-4 py-1.5 text-[#64748B] text-[13px] font-medium">Trends</div>
                            <div className="px-4 py-1.5 text-[#64748B] text-[13px] font-medium">Data</div>
                            <div className="px-4 py-1.5 text-[#64748B] text-[13px] font-medium">Takeaways</div>
                        </div>

                        {/* Cards Row */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-[#0A2540] border border-[#00D4AA] rounded-xl p-6 text-center shadow-[0_0_20px_rgba(0,212,170,0.1)]">
                                <div className="w-8 h-8 mx-auto mb-3 text-white flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div className="text-[12px] text-[#94A3B8]">Market Size</div>
                            </div>
                            <div className="bg-[#1a3a5a] border border-white/5 rounded-xl p-6 text-center">
                                <div className="w-8 h-8 mx-auto mb-3 text-[#FF5F57] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-[12px] text-[#94A3B8]">Use Cases</div>
                            </div>
                            <div className="bg-[#1a3a5a] border border-white/5 rounded-xl p-6 text-center">
                                <div className="w-8 h-8 mx-auto mb-3 text-[#FEBC2E] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="text-[12px] text-[#94A3B8]">Innovations</div>
                            </div>
                        </div>

                        {/* Insight Box */}
                        <div className="bg-[#00D4AA] rounded-xl p-6 text-[#0A2540]">
                            <div className="text-[12px] font-semibold opacity-70 mb-2">Your Personalized Insight</div>
                            <div className="font-bold text-[15px] leading-relaxed">
                                Based on your interest in Market Size, here's what matters most...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
