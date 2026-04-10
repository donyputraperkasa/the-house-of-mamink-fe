import { apiFetch } from '@/lib/api';

export async function getProfile() {
    return apiFetch('/profile');
}

export async function updateProfile(data: any) {
    return apiFetch('/profile', {
        method: 'PATCH',
        body: JSON.stringify(data),
    });
}