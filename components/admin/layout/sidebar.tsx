"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    LayoutDashboard,
    FileText,
    CalendarDays,
    Users,
    LogOut,
    School,
    ExternalLink,
    Menu,
    X,
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Activity",
        href: "/admin/activity",
        icon: CalendarDays,
    },
    {
        name: "Gallery",
        href: "/admin/gallery",
        icon: FileText,
    },
    {
        name: "Profile",
        href: "/admin/profile",
        icon: Users,
    },
];

export default function Sidebar({
    isCollapsed,
    setIsCollapsed,
}: {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {/* Mobile Toggle Button */}
        <button
            className="lg:hidden fixed top-4 left-4 z-[100] bg-white text-gray-800 p-2 rounded-xl shadow"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isOpen && (
            <div
                className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}

        <aside
            className={`fixed top-0 left-0 h-full ${isCollapsed ? 'w-20' : 'w-64'} bg-white text-gray-800 flex flex-col z-50 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
            {/* Logo and controls */}
            <div
                className={`px-4 py-6 border-b border-gray-200 flex ${
                    isCollapsed
                    ? 'flex-col items-center gap-3'
                    : 'items-center justify-between'
                }`}
            >
                <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                    <School size={28} className="text-blue-500" />
                    {!isCollapsed && (
                        <span className="font-semibold text-lg text-gray-900">THOM Panel</span>
                    )}
                </div>

                {/* Desktop collapse button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="hidden lg:flex items-center justify-center text-gray-500 hover:text-gray-900"
                >
                    {isCollapsed ? <Menu size={20} /> : <X size={20} />}
                </button>

                {/* Mobile close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-900"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Menu */}
            <nav className={`flex-1 ${isCollapsed ? 'px-2' : 'px-4'} py-6 ${isCollapsed ? 'space-y-4' : 'space-y-2'}`}>
                <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'} mb-4 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-sm transition`}
                    onClick={() => setIsOpen(false)}
                >
                    <ExternalLink size={20} className="min-w-[20px]" />
                    {!isCollapsed && (
                        <span className="text-sm font-medium">View Website</span>
                    )}
                </Link>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center ${isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'} rounded-xl transition
                        ${
                            active
                                ? "bg-blue-500 text-white shadow"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <Icon size={20} />
                            {!isCollapsed && (
                                <span className="text-sm font-medium">{item.name}</span>
                            )}
                        </Link>
                    );
                })}

            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-200">
                <button
                    className={`bg-red-100 flex items-center ${isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'} w-full rounded-xl text-red-600 font-semibold hover:bg-red-500 hover:text-white transition shadow-sm`}
                    onClick={() => {
                        setIsOpen(false);
                        localStorage.removeItem("token");
                        window.location.href = "/admin-login";
                    }}
                >
                    <LogOut size={20} className="min-w-[20px]" />
                    {!isCollapsed && (
                        <span className="text-sm font-bold">Logout</span>
                    )}
                </button>
            </div>
        </aside>
        </>
    );
}