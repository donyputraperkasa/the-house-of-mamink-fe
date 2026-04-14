import { Activity } from "@/types/activity";

export default function ActivityCard({ item }: { item: Activity }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-44 object-cover"
        />

        <div className="p-4">
            <p className="text-xs text-gray-400">
            {new Date(item.date).toLocaleDateString("id-ID")}
            </p>

            <h3 className="font-semibold text-lg mt-1 text-gray-800">
            {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {item.description}
            </p>
        </div>
        </div>
    );
}