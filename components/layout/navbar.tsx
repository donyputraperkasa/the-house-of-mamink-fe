"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Newspaper, Calendar, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
        <nav className="w-[92%] max-w-7xl flex items-center justify-between bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 text-white backdrop-blur-xl border border-yellow-900/20 rounded-2xl shadow-lg px-4 md:px-8 py-3 md:py-4 transition-all duration-300">

            {/* Logo */}
            <h1 className="text-lg font-bold tracking-wide text-yellow-100">
                the house of mamink
            </h1>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-yellow-50">

                <Link href="/" className={`flex items-center gap-1 relative transition ${pathname === "/" ? "text-yellow-300" : "hover:text-yellow-200"}`}>
                    <Home size={16} /> Home
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                <Link href="/about" className={`flex items-center gap-1 relative transition ${pathname === "/about" ? "text-yellow-300" : "hover:text-yellow-200"}`}>
                    <Info size={16} /> About
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                <Link href="/gallery" className={`flex items-center gap-1 relative transition ${pathname.startsWith("/ppdb") ? "text-yellow-300" : "hover:text-yellow-200"}`}>
                    <User size={16} /> Gallery
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all ${pathname.startsWith("/ppdb") ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-lg border border-gray-200 bg-white/60 backdrop-blur"
            >
                {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Right */}
            <div className="hidden md:flex items-center gap-3 text-sm">
                <span className="text-lg">🇮🇩</span>
                <span className="font-medium text-yellow-100">Indonesia</span>
            </div>

        </nav>
        {open && (
            <>
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in zoom-in-90 duration-300"
                    onClick={() => setOpen(false)}
                />

                {/* Mobile Menu */}
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-gradient-to-b from-amber-700 to-yellow-600 text-white backdrop-blur-xl border border-yellow-900/20 rounded-2xl shadow-2xl p-6 space-y-4">

                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname === "/" ? "text-yellow-300 font-semibold" : "text-yellow-50"}`}
                    >
                        <Home size={18} /> Home
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname === "/about" ? "text-yellow-300 font-semibold" : "text-yellow-50"}`}
                    >
                        <Info size={18} /> About
                    </Link>

                    <Link
                        href="/articles"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname.startsWith("/articles") ? "text-yellow-300 font-semibold" : "text-yellow-50"}`}
                    >
                        <Newspaper size={18} /> Articles
                    </Link>

                    <Link
                        href="/activities"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname.startsWith("/activities") ? "text-yellow-300 font-semibold" : "text-yellow-50"}`}
                    >
                        <Calendar size={18} /> Activities
                    </Link>

                    <Link
                        href="/ppdb"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname.startsWith("/ppdb") ? "text-yellow-300 font-semibold" : "text-yellow-50"}`}
                    >
                        <User size={18} /> PPDB
                    </Link>

                </div>
            </>
        )}
    </div>
    );
}
