import { API_URL } from './constants';

export async function apiFetch(
    endpoint: string,
    options: RequestInit = {}
) {
    const token =
        typeof window !== 'undefined'
        ? localStorage.getItem('token')
        : null;

    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        throw new Error('API Error');
    }

    return res.json();
}