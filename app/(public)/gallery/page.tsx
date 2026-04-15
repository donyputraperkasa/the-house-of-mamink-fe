import { getGallery } from '@/services/gallery.service';
import GalleryClient from '@/components/public/gallery/GalleryClient';

export default async function GalleryPage() {
    const data = await getGallery();

    return (
        <main className="pt-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title moved to GalleryClient */}

                <GalleryClient data={data} />
            </div>
        </main>
    );
}