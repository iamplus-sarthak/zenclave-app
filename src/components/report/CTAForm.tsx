import React from 'react';
import { Lock, Sparkles } from 'lucide-react';

export default function CTAForm() {
    return (
        <div className="bg-gradient-to-br from-[#0A2540] to-[#112d4e] rounded-2xl p-8 text-center text-white animate-fade-in-up border border-white/10 shadow-2xl relative overflow-hidden group">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4AA]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00D4AA]/10 transition-colors duration-700"></div>

            <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner relative z-10">
                <Lock className="w-6 h-6 text-[#00D4AA]" />
            </div>

            <h3 className="text-[22px] font-bold mb-2 font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative z-10">
                Unlock the Full Report
            </h3>
            <p className="text-[14px] text-white/60 mb-8 leading-relaxed max-w-sm mx-auto relative z-10">
                You've reached the free interaction limit. Enter your details to continue the conversation.
            </p>

            <form className="space-y-4 relative z-10">
                {/* Row 1: First Name & Last Name */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3.5 bg-[#0A2540]/50 border border-[#2D3F55] focus:border-[#00D4AA] rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-all text-[14px] shadow-sm backdrop-blur-sm"
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3.5 bg-[#0A2540]/50 border border-[#2D3F55] focus:border-[#00D4AA] rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-all text-[14px] shadow-sm backdrop-blur-sm"
                        />
                    </div>
                </div>

                {/* Row 2: Mobile Number */}
                <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3.5 bg-[#0A2540]/50 border border-[#2D3F55] focus:border-[#00D4AA] rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-all text-[14px] shadow-sm backdrop-blur-sm"
                />

                {/* Optional: Company Name (Keeping it but simplified style logic applies) */}
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3.5 bg-[#0A2540]/50 border border-[#2D3F55] focus:border-[#00D4AA] rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-all text-[14px] shadow-sm backdrop-blur-sm"
                />

                <button className="w-full py-4 bg-[#00D4AA] hover:bg-[#00c49d] text-white font-bold rounded-xl transition-all duration-200 text-[15px] mt-4 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Get Full Access
                </button>
            </form>

            <div className="mt-4 text-[11px] text-white/30">
                Secure 256-bit SSL encryption. No spam.
            </div>
        </div>
    );
}
