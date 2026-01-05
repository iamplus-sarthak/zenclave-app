"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is Zenclave, and how is it different from a regular PDF or whitepaper?",
        answer: "Zenclave transforms traditional whitepapers and industry reports into interactive experiences you can actually navigate. Instead of scrolling through a 40-page PDF hoping to find what's relevant, you choose which sections to explore—and skip the rest. It's like \"choose your own adventure\" for professional content. As you make selections, our AI tailors the insights and takeaways to your specific interests. The result: you get the value of a full report in a fraction of the time, with personalized insights that actually apply to your role."
    },
    {
        question: "Is the content on Zenclave free? Do I need to create an account?",
        answer: "Yes—all content on Zenclave is completely free to access. No account required, no credit card, no gated downloads. Just click on any report or video and start exploring. We believe professional insights should be accessible, not locked behind endless forms. You can browse our full library and consume as much content as you want, whenever you want."
    },
    {
        question: "I'm busy. How does Zenclave actually help me save time compared to traditional reports?",
        answer: "Traditional whitepapers force you to read everything—or skim and hope you don't miss something important. With Zenclave, you navigate directly to the sections that matter to your role. Looking for market size data? Jump straight there. Only care about implementation challenges? Skip to that section. Our interactive format lets you get the insights you need in 10–15 minutes instead of 45–60. Plus, our AI summarizes key takeaways based on what you explored—so you walk away with personalized insights, not generic conclusions."
    },
    {
        question: "What topics and industries does Zenclave cover?",
        answer: "We publish interactive reports and videos across the industries and topics that matter most to business professionals—including AI, SaaS, marketing, fintech, manufacturing, and healthcare. Each piece is designed to help you understand trends, compare solutions, or make better decisions. Whether you're researching new technology, benchmarking against competitors, or just staying current in your field, you'll find content built for how you actually work. New reports and videos are added weekly."
    },
    {
        question: "How does Zenclave personalize the content to me?",
        answer: "As you navigate through a report or video—choosing which topics to explore, which sections to skip—Zenclave's AI tracks your selections and generates personalized insights based on what you actually engaged with. Think of it as a smart summary that reflects your interests, not a generic abstract written for everyone. The more you explore, the more relevant your takeaways become. It's professional content that adapts to you, rather than expecting you to adapt to it."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC]">
            <div className="max-w-[900px] mx-auto">
                <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#0A2540] mb-8 sm:mb-10 lg:mb-12 text-center tracking-tight">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-4 sm:p-5 lg:p-6 flex justify-between items-center gap-3 sm:gap-4 focus:outline-none min-h-[60px]"
                            >
                                <span className={`font-bold text-[15px] sm:text-[17px] lg:text-[18px] ${openIndex === index ? 'text-[#00D4AA]' : 'text-[#0A2540]'} transition-colors pr-2`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 text-[#00D4AA] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <Minus size={20} className="sm:w-6 sm:h-6" /> : <Plus size={20} className="sm:w-6 sm:h-6" />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-4 sm:p-5 lg:p-6 pt-0 text-[#64748B] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
