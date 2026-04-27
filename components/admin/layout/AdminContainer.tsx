'use client';

import Sidebar from './Sidebar';
import { useState } from 'react';
import BreadCrumbs from './BreadCrumbs';

export default function AdminContainer({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            {/* Content */}
            <div className={`relative transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                <div className="px-6 py-8 space-y-6">
                    <BreadCrumbs  />
                {children}
                </div>
            </div>
        </div>
    );
}