import GalleryCard from "./GalleryCard";

type Props = {
    data: any[];
};

export default function GalleryGrid({ data }: Props) {
    if (!data || data.length === 0) {
        return (
        <p className="text-center text-gray-500 py-10">
            Belum ada gallery
        </p>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
            <GalleryCard key={item.id} item={item} />
        ))}
        </div>
    );
}
