"use client";

import AdminContainer from '@/components/admin/layout/AdminContainer';
import ProfileForm from '@/components/admin/profile/ProfileForm';

export default function ProfilePage() {
    return (
        <AdminContainer>
        <div className="space-y-6">
            <div>
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-sm text-gray-500">
                Manage your profile information
            </p>
            </div>

            <ProfileForm />
        </div>
        </AdminContainer>
    );
}