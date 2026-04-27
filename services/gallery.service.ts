import { apiFetch } from '@/lib/api';

export async function getGallery() {
    return apiFetch('/gallery');
}

export async function getGalleryById(id: number) {
    return apiFetch(`/gallery/${id}`);
}

export async function createGallery(data: any) {
    return apiFetch('/gallery', {
        method: 'POST',
        body: data,
    });
}

export async function updateGallery(id: number, data: any) {
    return apiFetch(`/gallery/${id}`, {
        method: 'PATCH',
        body: data,
    });
}

export async function deleteGallery(id: number) {
    return apiFetch(`/gallery/${id}`, {
        method: 'DELETE',
    });
}