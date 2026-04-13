"use client";

import GalleryForm from '@/components/admin/gallery/GalleryForm';
import GalleryTable from '@/components/admin/gallery/GalleryTable';
import { useGalleryForm } from '@/components/admin/gallery/useGalleryForm';

export default function GalleryPage() {
    const {
        data,
        handleDelete,
    } = useGalleryForm();

    return (
    <div className="p-6 space-y-6">
        <GalleryForm />

        <GalleryTable
            data={data}
            onDelete={handleDelete}
        />
    </div>
    );
}
