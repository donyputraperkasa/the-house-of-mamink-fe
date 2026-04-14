import { Activity } from "@/types/activity";
import ActivityCard from "./ActivityCard";

export default function ActivityList({ data }: { data: Activity[] }) {
    if (!data || data.length === 0) {
        return (
        <section className="py-16 px-6 text-center">
            <p className="text-gray-500">Belum ada kegiatan</p>
        </section>
        );
    }

    return (
        <section className="py-16 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.map((item) => (
            <ActivityCard key={item.id} item={item} />
            ))}
        </div>
        </section>
    );
}