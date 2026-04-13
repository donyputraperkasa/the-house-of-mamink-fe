import { ReactNode } from 'react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon?: ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
    return (
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between border border-amber-200">
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>

        {icon && (
            <div className="text-amber-600 text-3xl">
            {icon}
            </div>
        )}
        </div>
    );
}
