'use client';

import ProfileFields from './ProfileFields';
import AvatarUpload from './AvatarUpload';
import { Button } from '@/components/ui/Button';
import { useProfileForm } from './useProfileForm';

export default function ProfileForm() {
    const {
        form,
        loading,
        uploading,
        handleChange,
        handleFileUpload,
        handleSubmit,
    } = useProfileForm();

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl bg-white p-6 rounded-xl shadow border border-amber-200"
        >
            <div>
                <h2 className="text-xl font-bold mb-1">Profile</h2>
                <p className="text-sm text-amber-600">
                Manage your profile information
                </p>
            </div>

            <div className="space-y-4">
                <ProfileFields form={form} onChange={handleChange} />

                <AvatarUpload
                    avatar={form.avatar || ''}
                    uploading={uploading}
                    onUpload={handleFileUpload}
                />
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={loading || uploading} className="disabled:opacity-50">
                {loading ? 'Saving...' : 'Save Profile'}
                </Button>
            </div>
        </form>
    );
}