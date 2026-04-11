'use client';

import { useEffect, useState } from 'react';
import { Activity } from '@/types';
import ActivityRow from './ActivityRow';

export default function ActivityTable() {
    const [data, setData] = useState<Activity[]>([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await fetch('http://localhost:4000/activity');
        const json = await res.json();

        console.log('API RESULT:', json);

        // adjust sesuai response
        setData(Array.isArray(json) ? json : json.data || []);
        } catch (err) {
        console.error(err);
        }
    };

    fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        await fetch(`http://localhost:4000/activity/${id}`, {
        method: 'DELETE',
        });

        setData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="p-4 border border-amber-600 rounded-xl bg-white">
            <h2 className="text-lg font-bold mb-4 text-amber-700">Activity List</h2>

            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-amber-200 text-left">
                        <th className="p-2">Title</th>
                        <th className="p-2">Date</th>
                        <th className="p-2">Image</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <ActivityRow
                        key={item.id}
                        data={item}
                        onDelete={handleDelete}
                        />
                ))}
                </tbody>
            </table>
        </div>
    );
}