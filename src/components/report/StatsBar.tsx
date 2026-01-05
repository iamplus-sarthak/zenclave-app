import React from 'react';
import { TrendingUp, Users, Clock, Eye } from 'lucide-react';

interface StatsBarProps {
    stats?: {
        totalViews: string;
        avgTime: string;
        completion: string;
        activeReaders: string;
    };
}

export default function StatsBar({ stats }: StatsBarProps) {
    // Safe default if stats are missing
    const safeStats = stats || {
        totalViews: "0",
        avgTime: "0m",
        completion: "0%",
        activeReaders: "0"
    };

    const statItems = [
        { label: "Total Views", value: safeStats.totalViews, icon: Eye, change: "+12%" },
        { label: "Avg. Time", value: safeStats.avgTime, icon: Clock, change: "+8%" },
        { label: "Completion", value: safeStats.completion, icon: TrendingUp, change: "+3%" },
        { label: "Active Readers", value: safeStats.activeReaders, icon: Users, change: "+24%" },
    ];

    return (
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 lg:overflow-visible">
                <div className="flex gap-3 sm:gap-4 lg:grid lg:grid-cols-4 min-w-max lg:min-w-0">
                    {statItems.map((stat, idx) => (
                        <div key={idx} className="bg-white border-2 border-[#E2E8F0] rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[160px] lg:min-w-0 relative overflow-hidden group hover:border-[#00D4AA] hover:shadow-md transition-all duration-200">
                            {/* Shimmer animation effect */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 212, 170, 0.25) 30%, rgba(0, 212, 170, 0.4) 50%, rgba(0, 212, 170, 0.25) 70%, transparent 100%)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 3s ease-in-out infinite',
                                    animationDelay: `${idx * 0.3}s`
                                }}
                            ></div>

                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E0F2FE] rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4AA]" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-[10px] sm:text-[11px] font-medium text-[#64748B] uppercase tracking-wide">{stat.label}</div>
                                <div className="flex items-baseline gap-1.5 sm:gap-2">
                                    <span className="text-[16px] sm:text-[18px] font-bold text-[#0A2540] font-display">{stat.value}</span>
                                    <span className="text-[10px] sm:text-[11px] font-medium text-[#10B981] bg-[#ECFDF5] px-1 sm:px-1.5 py-0.5 rounded">{stat.change}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
