"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ChevronRight, Brain } from 'lucide-react';
import * as Icons from 'lucide-react';
import CTAForm from './CTAForm';
import Typewriter from './Typewriter';

interface Question {
  id: string;
  text: string;
  answer: string;
  icon: string;
  nextQuestionIds?: string[];
  isCTA?: boolean;
}

interface Report {
  summary: string;
  summaryQuestion?: string;
  initialQuestionIds?: string[];
  questions: Question[];
}

interface ZenbotProps {
  report: Report | null;
}

type ConversationItem =
  | { type: 'summary'; text: string }
  | { type: 'qa'; question: string; answer: string | null; loading: boolean; id: string };

export default function Zenbot({ report }: ZenbotProps) {
  const [conversation, setConversation] = useState<ConversationItem[]>([]);
  const [suggestedQuestions, setSuggestedQuestions] = useState<Question[]>([]);

  // flow control
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false); // Controls if user can click
  const [hasActiveQA, setHasActiveQA] = useState(false); // Track if there's an active Q&A being typed
  const [showCTA, setShowCTA] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Initial Loading Sequence (4 seconds)
  useEffect(() => {
    if (report && conversation.length === 0) {
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
        setIsStreaming(true);

        setConversation([
          { type: 'summary', text: report.summary }
        ]);

        // We need to wait for summary typing to finish to enable questions?
        // We'll handle that via Typewriter callback in render
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [report, conversation.length]);

  // Gentle Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [conversation, isInitialLoading, showCTA]);

  const handleQuestionClick = (question: Question) => {
    if (showCTA || isStreaming || isInitialLoading) return;

    // SCENARIO: CTA Trigger
    if (question.isCTA) {
      setShowCTA(true);
      setSuggestedQuestions([]);
      // Optional: Add the question as a "user message" but no bot answer?
      // User asked: "Answer will not be there for that question... answer will be set as CTA form giving question"
      // Let's create a QA item but with empty answer/loading false effectively logic-wise,
      // OR just show CTA.
      // Showing "Ready to transform?" as a User bubble provides context.
      // But the design says "like answer will not be there... that will be set as the CTA form giving question".
      // Let's add the QA item, but bypass Thinking/Answering and just show the CTA form BELOW it.
      // Actually, if I add it as a QA item, it needs an answer or stays loading.
      // Let's just NOT add it to conversation, and rely on `showCTA` being true at the bottom?
      // But then previous content is visible.
      // Design choice: Just show CTA form at bottom.
      return;
    }

    setIsStreaming(true); // Lock interactions
    setHasActiveQA(true); // Mark that we have an active Q&A
    setSuggestedQuestions([]);

    // Add QA item in loading state
    const newId = Date.now().toString();
    setConversation(prev => [
      ...prev,
      { type: 'qa', question: question.text, answer: null, loading: true, id: newId }
    ]);

    // Thinking Delay (3 seconds)
    setTimeout(() => {
      // Update item to loaded
      setConversation(prev => prev.map(item => {
        if (item.type === 'qa' && item.id === newId) {
          return { ...item, loading: false, answer: question.answer };
        }
        return item;
      }));

    }, 3000);
  };

  const handleTypewriterComplete = (item: ConversationItem) => {
    if (item.type === 'summary' && report) {
      const initialIds = report.initialQuestionIds || [];
      const initialQs = report.questions.filter(q => initialIds.includes(q.id));
      setSuggestedQuestions(initialQs.length > 0 ? initialQs : report.questions.slice(0, 3));
    }

    if (item.type === 'qa' && report) {
      // Find the question object to get next IDs
      const qObj = report.questions.find(q => q.text === item.question);

      if (qObj && qObj.nextQuestionIds && qObj.nextQuestionIds.length > 0) {
        const nextQs = report.questions.filter(q => qObj.nextQuestionIds?.includes(q.id));
        setSuggestedQuestions(nextQs);
      } else {
        setSuggestedQuestions([]);
      }
    }

    // Set isStreaming to false AFTER updating questions to prevent flash
    setIsStreaming(false);
    setHasActiveQA(false); // Q&A complete, can show questions now
  };

  if (!report) return null;

  return (
    <div className="w-full lg:w-1/2 flex flex-col h-[600px] lg:h-full bg-white border border-[#E2E8F0] lg:border-l lg:border-t-0 lg:border-r-0 lg:border-b-0 rounded-xl lg:rounded-none relative overflow-hidden">

      {/* Bot Header */}
      <div className="min-h-14 sm:min-h-16 border-b border-[#E2E8F0]/50 bg-white/80 backdrop-blur-sm sticky top-0 z-10 flex items-center px-4 sm:px-6 gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E0F2FE] rounded-xl flex items-center justify-center shadow-sm">
          <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A2540]" />
        </div>
        <div>
          <div className="text-[14px] sm:text-[15px] font-bold text-[#0A2540] flex items-center gap-2">
            Intelligent Insights
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00D4AA]" />
          </div>
          <div className="text-[11px] sm:text-[12px] text-[#64748B]">
            {isInitialLoading ? 'Analyzing the report...' : 'AI-powered interactive exploration'}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth" ref={scrollRef}>

        {/* Scenario 1: Initial Loading Screen */}
        {isInitialLoading && (
          <div className="h-full flex flex-col items-center justify-center animate-fade-in-up">
            <div className="flex gap-2 mb-4 sm:mb-6">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#94A3B8] rounded-full animate-bounce delay-0"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#94A3B8] rounded-full animate-bounce delay-150"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#94A3B8] rounded-full animate-bounce delay-300"></div>
            </div>
            <p className="text-[#64748B] text-[13px] sm:text-[14px] lg:text-[15px] font-medium animate-pulse">
              Preparing your personalized insights...
            </p>
          </div>
        )}

        {/* Conversation Flow */}
        {!isInitialLoading && (
          <div className="space-y-8">
            {conversation.map((item, idx) => (
              <div key={idx} className="animate-fade-in-up">
                {item.type === 'summary' && (
                  <div className="bg-white rounded-2xl p-0 text-[15px] text-[#334155] leading-relaxed">
                    <h3 className="text-[16px] font-bold text-[#0A2540] mb-3">
                      {report?.summaryQuestion || 'Executive Summary'}
                    </h3>
                    <Typewriter
                      text={item.text}
                      speed={10}
                      onComplete={() => handleTypewriterComplete(item)}
                    />
                    <div className="text-[12px] text-[#94A3B8] mt-4">
                      Source: Executive Summary, Pages 1-3
                    </div>
                  </div>
                )}

                {item.type === 'qa' && (
                  <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]/50 shadow-sm">
                    {/* Question Header */}
                    <h3 className="text-[16px] font-bold text-[#0A2540] mb-4">
                      {item.question}
                    </h3>

                    {/* Answer Area */}
                    {item.loading ? (
                      // Scenario 2: Thinking State (Inside the card)
                      <div className="flex flex-col items-center justify-center py-10 animate-fade-in-up">
                        <div className="w-12 h-12 rounded-full border-2 border-[#E2E8F0] border-t-[#00D4AA] animate-spin mb-4"></div>
                        <div className="flex items-center gap-1 text-[#0A2540] font-medium text-[14px]">
                          Thinking
                          <span className="animate-pulse">.</span>
                          <span className="animate-pulse delay-150">.</span>
                          <span className="animate-pulse delay-300">.</span>
                        </div>
                        <p className="text-[12px] text-[#94A3B8] mt-2">
                          Extracting relevant insights from the report
                        </p>
                      </div>
                    ) : (
                      // Answer with Typewriter
                      <div className="text-[15px] text-[#334155] leading-relaxed">
                        {item.answer && (
                          <Typewriter
                            text={item.answer}
                            speed={15}
                            onComplete={() => handleTypewriterComplete(item)}
                          />
                        )}
                        {/* Source footer? */}
                        <div className="text-[12px] text-[#94A3B8] mt-4 pt-4 border-t border-[#E2E8F0]/50">
                          Source: Report Analysis
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Suggested Questions (Bottom) - Only show when NOT typing/loading */}
            {!isStreaming && !isInitialLoading && !hasActiveQA && !showCTA && suggestedQuestions.length > 0 && (
              <div className="pt-4 animate-fade-in-up">
                <div className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-wider mb-4">
                  EXPLORE MORE INSIGHTS
                </div>
                <div className="space-y-3">
                  {suggestedQuestions.map((q, index) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionClick(q)}
                      className="w-full text-left group bg-white border border-[#E2E8F0] hover:border-[#00D4AA] hover:shadow-md rounded-xl p-4 transition-all duration-200 flex items-center gap-4 relative overflow-hidden"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Continuous gliding shimmer effect - more visible */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 212, 170, 0.25) 30%, rgba(0, 212, 170, 0.4) 50%, rgba(0, 212, 170, 0.25) 70%, transparent 100%)',
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 3s ease-in-out infinite',
                          animationDelay: `${index * 0.3}s`
                        }}
                      ></div>

                      <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] text-[#64748B] font-bold text-[12px] flex items-center justify-center group-hover:bg-[#00D4AA] group-hover:text-white transition-colors relative z-10">
                        Q{q.id}
                      </div>
                      <span className="text-[15px] font-medium text-[#334155] group-hover:text-[#0A2540] flex-1">
                        {q.text}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center group-hover:bg-[#00D4AA]/10">
                        <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00D4AA]" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Form */}
            {showCTA && (
              <div className="w-full animate-fade-in-up py-4">
                <CTAForm />
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
