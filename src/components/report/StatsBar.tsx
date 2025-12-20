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
        <div className="w-full max-w-[1600px] mx-auto px-6">
            <div className="grid grid-cols-4 gap-4">
                {statItems.map((stat, idx) => (
                    <div key={idx} className="bg-white border border-[#E2E8F0] rounded-xl p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#E0F2FE] rounded-lg flex items-center justify-center flex-shrink-0">
                            <stat.icon className="w-5 h-5 text-[#00D4AA]" />
                        </div>
                        <div>
                            <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wide">{stat.label}</div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-[18px] font-bold text-[#0A2540] font-display">{stat.value}</span>
                                <span className="text-[11px] font-medium text-[#10B981] bg-[#ECFDF5] px-1.5 py-0.5 rounded">{stat.change}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
