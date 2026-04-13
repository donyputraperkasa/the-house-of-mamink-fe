import AdminContainer from '@/components/admin/layout/AdminContainer';
import GalleryForm from '@/components/admin/gallery/GalleryForm';

export default function EditGalleryPage() {
    return (
        <AdminContainer>
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-amber-700">
            Edit Gallery
            </h1>

            <GalleryForm />
        </div>
        </AdminContainer>
    );
}
