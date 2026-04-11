import ActivityForm from '@/components/admin/activity/ActivityForm';
import ActivityTable from '@/components/admin/activity/ActivityTable';

export default function ActivityPage() {
    return (
        <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Activity Management</h1>

        {/* FORM */}
        <ActivityForm />

        {/* TABLE */}
        <ActivityTable />
        </div>
    );
}