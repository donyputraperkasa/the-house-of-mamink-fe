import { Activity } from "@/types/activity";
import ActivityHeader from "./ActivityHeader";
import ActivityList from "./ActivityList";

export default function ActivitySection({ data }: { data: Activity[] }) {
    return (
        <div>
            <ActivityHeader />
            <ActivityList data={data} />
        </div>
    );
}
