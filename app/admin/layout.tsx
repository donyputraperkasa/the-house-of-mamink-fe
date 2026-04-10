import AdminContainer from '@/components/admin/layout/admin-container';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AdminContainer>{children}</AdminContainer>;
}
