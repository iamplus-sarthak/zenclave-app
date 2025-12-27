"use client";

import React, { useState } from 'react';
import { X, Download, Loader2 } from 'lucide-react';

interface LeadGenPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onDownload: () => void;
}

export default function LeadGenPopup({ isOpen, onClose, onDownload }: LeadGenPopupProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        onDownload();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl p-8 animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#64748B] hover:text-[#0A2540] transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download className="w-6 h-6 text-[#0A2540]" />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#0A2540] mb-2">
                        Download Full Report
                    </h3>
                    <p className="text-[14px] text-[#64748B]">
                        Please provide your details to access the complete PDF analysis.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[13px] font-medium text-[#0A2540] mb-1.5">
                            Full Name
                        </label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00D4AA] focus:ring-0 text-[14px] outline-none transition-all placeholder:text-[#94A3B8]"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-[13px] font-medium text-[#0A2540] mb-1.5">
                            Mobile Number
                        </label>
                        <input
                            required
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00D4AA] focus:ring-0 text-[14px] outline-none transition-all placeholder:text-[#94A3B8]"
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-[13px] font-medium text-[#0A2540] mb-1.5">
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00D4AA] focus:ring-0 text-[14px] outline-none transition-all placeholder:text-[#94A3B8]"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-6 bg-[#00D4AA] hover:bg-[#00b890] text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-[#00D4AA]/20 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            'Download Now'
                        )}
                    </button>

                    <p className="text-center text-[11px] text-[#94A3B8] mt-4">
                        We respect your privacy. No spam.
                    </p>
                </form>
            </div>
        </div>
    );
}
