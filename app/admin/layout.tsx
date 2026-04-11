import AdminContainer from '@/components/admin/layout/AdminContainer';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AdminContainer>{children}</AdminContainer>;
}
