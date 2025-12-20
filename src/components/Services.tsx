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
        <section id="solutions" className="py-32 px-10 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-[48px] font-extrabold text-[#0A2540] mb-5 tracking-tight">
                        Comprehensive Solutions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-[24px] p-12 border border-[#E2E8F0] transition-all duration-300 hover:border-[#00D4AA] hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] hover:-translate-y-1">
                            <div className="w-12 h-12 bg-[#0A2540] text-white rounded-xl flex items-center justify-center font-display text-[20px] font-bold mb-6">
                                {service.number}
                            </div>

                            <h3 className="font-display text-[28px] font-bold text-[#0A2540] mb-4">
                                {service.title}
                            </h3>

                            <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <ul className="flex flex-col gap-3">
                                {service.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-center gap-3 text-[15px] text-[#64748B] border-b border-[#F1F5F9] last:border-none pb-3 last:pb-0">
                                        <span className="w-6 h-6 bg-[#00D4AA] text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                                            ✓
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
