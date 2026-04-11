import { Activity } from '@/types';

type Props = {
    data: Activity;
    onDelete?: (id: number) => void;
};

export default function ActivityRow({ data, onDelete }: Props) {
    return (
        <tr className="border-b border-amber-100">
            <td className="p-2">{data.title}</td>
            <td className="p-2">{data.date}</td>

            <td className="p-2">
                <img
                src={`http://localhost:4000/uploads/${data.image}`}
                className="w-16 h-16 object-cover rounded"
                />
            </td>

            <td className="p-2 flex gap-2">
                <button className="text-amber-600 hover:text-amber-700">Edit</button>
                <button
                    onClick={() => onDelete?.(data.id)}
                    className="text-red-500"
                    >
                    Delete
                </button>
            </td>
        </tr>
    );
}