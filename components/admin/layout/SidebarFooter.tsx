import { LogOut } from 'lucide-react';

export default function SidebarFooter({ isCollapsed, setIsOpen }: any) {
    return (
        <div className="p-4 border-t border-gray-200">
            <button
                className={`bg-red-100 flex items-center ${
                isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'
                } w-full rounded-xl text-red-600 font-semibold hover:bg-red-500 hover:text-white transition shadow-sm`}
                onClick={() => {
                setIsOpen(false);
                localStorage.removeItem('token');
                window.location.href = '/admin-login';
                }}
            >
                <LogOut size={20} className="min-w-[20px]" />
                {!isCollapsed && (
                <span className="text-sm font-bold">Logout</span>
                )}
            </button>
        </div>
    );
}
