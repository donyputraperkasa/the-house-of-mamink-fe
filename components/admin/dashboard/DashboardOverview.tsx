'use client';

import StatsCard from './StatsCard';
import { Image, Calendar, User } from 'lucide-react';

export default function DashboardOverview() {
    return (
        <div className="space-y-6">
        {/* Title */}
        <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-gray-500">
            Overview of your website data
            </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard
                title="Total Gallery"
                value={12}
                icon={<Image />}
            />

            <StatsCard
                title="Total Activities"
                value={8}
                icon={<Calendar />}
            />

            <StatsCard
                title="Profile Views"
                value={120}
                icon={<User />}
            />
        </div>
        </div>
    );
}
