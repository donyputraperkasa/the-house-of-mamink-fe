import ActivitySection from "@/components/public/activity/ActivitySection";
import { Activity } from "@/types/activity";

async function getActivities(): Promise<Activity[]> {
    try {
        const res = await fetch("http://localhost:4000/activities", {
        cache: "no-store",
        });

        if (!res.ok) return [];

        return res.json();
    } catch {
        return [];
    }
}

export default async function ActivityPage() {
    const data = await getActivities();

    return (
        <main className="">
            <ActivitySection data={data} />
        </main>
    );
}