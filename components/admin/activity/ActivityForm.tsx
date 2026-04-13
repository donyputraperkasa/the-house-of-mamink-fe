'use client';

import { useState } from 'react';
import { Activity } from '@/types';
import { createActivity } from '@/services/activity.service';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

type Props = {
    initialData?: Activity;
};

export default function ActivityForm({ initialData }: Props) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [description, setDescription] = useState(initialData?.description || '');
    const [date, setDate] = useState(initialData?.date || '');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', date);

        if (image) {
        formData.append('image', image);
        }

        createActivity(formData);
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl border border-amber-200 shadow space-y-6"
        >
        <h2 className="text-xl font-bold text-amber-700">
            Activity Management
        </h2>

        <div className="space-y-4">
            <div>
            <label className="text-sm font-semibold text-amber-700">Title</label>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />
            </div>

            <div>
            <label className="text-sm font-semibold text-amber-700">Description</label>
            <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write description"
            />
            </div>

            <div>
            <label className="text-sm font-semibold text-amber-700">Date</label>
            <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            </div>

            <div>
            <label className="text-sm font-semibold text-amber-700">Image</label>
            <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
            </div>
        </div>

        <div className="flex justify-end">
            <Button type="submit">
            Submit
            </Button>
        </div>
        </form>
    );
}