import { notFound } from "next/navigation";
import GalleryDetail from '@/components/public/gallery/GalleryDetail';

async function getGalleryDetail(id: string) {
    try {
        const res = await fetch(`http://localhost:4000/gallery/${id}`, {
        cache: "no-store",
        });

        if (!res.ok) return null;

        return res.json();
    } catch {
        return null;
    }
}

export default async function GalleryDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const data = await getGalleryDetail(params.id);

    if (!data) return notFound();

    return (
        <main className="pt-24 px-6">
            <GalleryDetail data={data} />
        </main>
    );
}