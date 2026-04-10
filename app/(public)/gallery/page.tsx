import { getGallery } from '@/services/gallery.service';

export default async function GalleryPage() {
    const data = await getGallery();

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gallery</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((item: any) => (
            <div key={item.id} className="border rounded p-2">
                <img
                src={`http://localhost:4000/uploads/${item.image}`}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-2 font-semibold">{item.title}</h2>
            </div>
            ))}
        </div>
        </div>
    );
}