'use client';

import { useGalleryForm } from './useGalleryForm';
import GalleryFields from './GalleryFields';
import GalleryUpload from './GalleryUpload';
import GalleryPreview from './GalleryPreview';
import { Button } from '@/components/ui/Button';

export default function GalleryForm() {
    const {
        form,
        loading,
        uploading,
        handleChange,
        handleUpload,
        handleSubmit,
    } = useGalleryForm();

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl border border-amber-200 shadow space-y-6"
        >
            <h2 className="text-xl font-bold text-amber-700">
                Gallery Management
            </h2>

            <GalleryFields form={form} onChange={handleChange} />

            <GalleryUpload
                image={form.image || ''}
                uploading={uploading}
                onUpload={handleUpload}
            />

            <GalleryPreview image={form.image || ''} />

            <div className="flex justify-end">
                <Button disabled={loading || uploading}>
                {loading ? 'Saving...' : 'Save'}
                </Button>
            </div>
        </form>
    );
}