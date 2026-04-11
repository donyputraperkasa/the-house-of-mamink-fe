'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BreadCrumbs() {
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
