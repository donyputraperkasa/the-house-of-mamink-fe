import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function SidebarMenu({
    menuItems,
    pathname,
    isCollapsed,
    setIsOpen,
}: any) {
    return (
        <nav
        className={`flex-1 ${isCollapsed ? 'px-2' : 'px-4'} py-6 ${
            isCollapsed ? 'space-y-4' : 'space-y-2'
        }`}
        >
        <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
            isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'
            } mb-4 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 shadow-sm transition`}
            onClick={() => setIsOpen(false)}
        >
            <ExternalLink size={20} className="min-w-[20px]" />
            {!isCollapsed && (
            <span className="text-sm font-medium">View Website</span>
            )}
        </Link>

        {menuItems.map((item: any) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
            <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'
                } rounded-xl transition
                ${
                    active
                    ? 'bg-amber-600 text-white shadow'
                    : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
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
    );
}
