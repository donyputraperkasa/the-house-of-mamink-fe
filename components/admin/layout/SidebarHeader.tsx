import { School, Menu, X } from 'lucide-react';

export default function SidebarHeader({
    isCollapsed,
    setIsCollapsed,
    setIsOpen,
}: {
    isCollapsed: boolean;
    setIsCollapsed: (v: boolean) => void;
    setIsOpen: (v: boolean) => void;
}) {
    return (
        <div
        className={`px-4 py-6 border-b border-gray-200 flex ${
            isCollapsed
            ? 'flex-col items-center gap-3'
            : 'items-center justify-between'
        }`}
        >
        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
            <School size={28} className="text-amber-600" />
            {!isCollapsed && (
            <span className="font-semibold text-lg text-gray-900">THOM Panel</span>
            )}
        </div>

        <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex items-center justify-center text-gray-500 hover:text-gray-900"
        >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
        </div>
    );
}
