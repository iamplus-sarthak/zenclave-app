"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import TypingIndicator from './TypingIndicator';
import CTAForm from './CTAForm';
import Typewriter from './Typewriter';

interface Question {
  id: string;
  text: string;
  answer: string;
  icon: string;
  nextQuestionIds?: string[];
}

interface Report {
  summary: string;
  initialQuestionIds?: string[];
  questions: Question[];
}

interface ZenbotProps {
  report: Report | null;
}

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: React.ReactNode;
}

export default function Zenbot({ report }: ZenbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestedQuestions, setSuggestedQuestions] = useState<Question[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial Summary & Questions Setup
  useEffect(() => {
    if (report && messages.length === 0) {
      // 1. Set Initial Summary Message
      setMessages([
        {
          id: 'init-summary',
          type: 'bot',
          content: (
            <div className="bg-gradient-to-br from-[#F0FDFA] to-[#ECFDF5] border border-[#00D4AA]/20 rounded-2xl p-6 relative w-full">
              <div className="absolute top-4 left-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-[#F0FDFA] border-b-[8px] border-b-transparent"></div>
              <h3 className="text-[16px] font-bold text-[#0A2540] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00D4AA]" />
                Executive Summary
              </h3>
              <p className="text-[14px] text-[#334155] leading-relaxed mb-4">
                {report.summary}
              </p>
              <div className="flex gap-2">
                <span className="inline-flex px-2.5 py-1 bg-white/60 border border-[#00D4AA]/20 rounded text-[11px] font-medium text-[#00D4AA]">
                  #Growth
                </span>
                <span className="inline-flex px-2.5 py-1 bg-white/60 border border-[#00D4AA]/20 rounded text-[11px] font-medium text-[#00D4AA]">
                  #Trends
                </span>
              </div>
            </div>
          )
        }
      ]);

      const initialIds = report.initialQuestionIds || [];
      const initialQs = report.questions.filter(q => initialIds.includes(q.id));
      setSuggestedQuestions(initialQs.length > 0 ? initialQs : report.questions.slice(0, 3));
    }
  }, [report, messages.length]);

  // Gentle Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [messages.length, isTyping]);

  const handleQuestionClick = (question: Question) => {
    if (showCTA || isStreaming) return;

    // 1. User Message (Chat Bubble Right)
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, {
      id: userMsgId,
      type: 'user',
      content: <div className="bg-[#0A2540] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-[14px] shadow-sm">{question.text}</div>
    }]);

    setSuggestedQuestions([]);
    setIsTyping(true);

    // 2. Thinking Delay (2.5s)
    setTimeout(() => {
      setIsTyping(false);
      setIsStreaming(true);

      // 3. Bot Message
      setMessages(prev => [...prev, {
        id: `ans-${userMsgId}`,
        type: 'bot',
        content: (
          <div className="bg-white border border-[#E2E8F0] rounded-2xl rounded-tl-sm p-6 text-[15px] text-[#334155] leading-relaxed shadow-sm w-full">
            <Typewriter
              text={question.answer}
              speed={15}
              onComplete={() => {
                setIsStreaming(false);

                if (report && question.nextQuestionIds && question.nextQuestionIds.length > 0) {
                  const nextQs = report.questions.filter(q => question.nextQuestionIds?.includes(q.id));
                  setSuggestedQuestions(nextQs);
                } else {
                  setSuggestedQuestions([]);
                }

                const newCount = interactionCount + 1;
                setInteractionCount(newCount);
                if (newCount >= 2) {
                  setShowCTA(true);
                  setSuggestedQuestions([]);
                }
              }}
            />
          </div>
        )
      }]);

    }, 2500);
  };

  if (!report) return <div className="p-10 flex justify-center"><TypingIndicator /></div>;

  return (
    <div className="w-1/2 flex flex-col h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden">

      {/* Bot Header */}
      <div className="h-14 border-b border-[#E2E8F0] bg-[#FAFBFC] flex items-center px-5 gap-3 flex-shrink-0">
        <div className="w-8 h-8 bg-gradient-to-br from-[#00D4AA] to-[#00b890] rounded-lg flex items-center justify-center shadow-sm">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[14px] font-bold text-[#0A2540]">Zenbot AI</div>
          <div className="text-[11px] text-[#64748B] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></span>
            Online & Ready
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 scroll-smooth space-y-8" ref={scrollRef}>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start w-full'}`}>
            <div className={`${msg.type === 'user' ? 'max-w-[85%]' : 'w-full'} ${msg.type === 'bot' ? 'animate-fade-in-up' : 'animate-slide-in-right'}`}>
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in-up w-full">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center gap-3">
              <span className="text-xs text-gray-400 font-medium">Zenbot is thinking...</span>
              <TypingIndicator />
            </div>
          </div>
        )}

        {/* Suggested Questions */}
        {!isTyping && !isStreaming && !showCTA && suggestedQuestions.length > 0 && (
          <div className="animate-fade-in-up delay-[200ms] w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] bg-[#E2E8F0] flex-1"></div>
              <div className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider px-1">
                Suggested Questions
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1"></div>
            </div>

            <div className="space-y-3">
              {suggestedQuestions.map((q) => {
                // @ts-ignore
                const IconComponent = Icons[q.icon] || Icons.HelpCircle;

                return (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left group bg-white border border-[#E2E8F0] hover:border-[#00D4AA] hover:shadow-md hover:-translate-y-0.5 rounded-xl p-4 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F8FAFC] group-hover:bg-[#F0FDFA] rounded-full flex items-center justify-center transition-colors">
                        <IconComponent className="w-4 h-4 text-[#64748B] group-hover:text-[#00D4AA]" />
                      </div>
                      <span className="text-[14px] font-medium text-[#0A2540] flex-1">
                        {q.text}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#00D4AA] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Form */}
        {showCTA && (
          <div className="w-full animate-fade-in-up">
            <CTAForm />
          </div>
        )}

      </div>

      {/* Input has been removed */}

    </div>
  );
}
