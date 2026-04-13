'use client';

import StatsCard from './StatsCard';
import { Image, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DashboardOverview() {
    const [stats, setStats] = useState({
        gallery: 0,
        activity: 0,
        views: 120,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
            const galleryRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
            const galleryData = await galleryRes.json();

            const activityRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity`);
            const activityData = await activityRes.json();

            setStats({
                gallery: galleryData.length || 0,
                activity: activityData.length || 0,
                views: 120,
            });
            } catch (err) {
            console.error('Failed to fetch stats', err);
            }
        };

        fetchStats();
    }, []);

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
                value={stats.gallery}
                icon={<Image />}
            />

            <StatsCard
                title="Total Activities"
                value={stats.activity}
                icon={<Calendar />}
            />

            <StatsCard
                title="Profile Views"
                value={stats.views}
                icon={<User />}
            />
        </div>
        </div>
    );
}
