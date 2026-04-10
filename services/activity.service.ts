import { apiFetch } from '@/lib/api';

export async function getActivity() {
    return apiFetch('/activity');
}

export async function createActivity(data: any) {
    return apiFetch('/activity', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}