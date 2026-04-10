'use client';

import Sidebar from './sidebar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Breadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <nav className="mb-4 text-sm text-gray-600">
        <ol className="flex items-center gap-2">
            <li>
            <Link href="/admin" className="hover:underline">Admin</Link>
            </li>
            {segments.slice(1).map((seg, idx) => {
            const href = '/' + segments.slice(0, idx + 2).join('/');
            const label = seg.charAt(0).toUpperCase() + seg.slice(1);

            return (
                <li key={href} className="flex items-center gap-2">
                <span>/</span>
                <Link href={href} className="hover:underline">
                    {label}
                </Link>
                </li>
            );
            })}
        </ol>
        </nav>
    );
}

export default function AdminContainer({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Content */}
        <div className={`relative transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
            <div className="p-6">
            <Breadcrumbs />
            {children}
            </div>
        </div>
        </div>
    );
}