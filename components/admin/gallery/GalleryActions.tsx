import Link from 'next/link';

interface Props {
    id: number;
    onDelete: (id: number) => void;
}

export default function GalleryActions({ id, onDelete }: Props) {
    return (
        <div className="flex gap-2">
        <Link href={`/admin/gallery/${id}/edit`}>
            <button className="text-amber-600 hover:text-amber-700">
                Edit
            </button>
        </Link>

        <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-600"
        >
            Delete
        </button>
        </div>
    );
}