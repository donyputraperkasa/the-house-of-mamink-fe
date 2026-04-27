import { Gallery } from '@/types/gallery';
import GalleryActions from './GalleryActions';

interface Props {
    data: Gallery[];
    onDelete: (id: number) => void;
}

export default function GalleryTable({ data, onDelete }: Props) {
    return (
        <div className="mt-6 bg-white border border-amber-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-amber-700 mb-4">
            Gallery List
        </h2>

        <table className="w-full text-sm">
            <thead>
            <tr className="border-b border-amber-200 text-left">
                <th className="p-2">Image</th>
                <th className="p-2">Title</th>
                <th className="p-2">Description</th>
                <th className="p-2">Action</th>
            </tr>
            </thead>

            <tbody>
            {data.map((item) => (
                <tr
                key={item.id}
                className="border-b border-amber-100 hover:bg-amber-50"
                >
                <td className="p-2">
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${item.image}`}
                        className="w-16 h-16 object-cover rounded"
                    />
                </td>
                <td className="p-2">{item.title}</td>
                <td className="p-2 text-gray-600 max-w-xs truncate">
                    {item.description && item.description.trim() ? item.description : '-'}
                </td>
                <td className="p-2">
                    <GalleryActions
                    id={item.id}
                    onDelete={onDelete}
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}