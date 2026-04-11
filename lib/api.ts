import { API_URL } from './constants';

export async function apiFetch(
    endpoint: string,
    options: RequestInit = {}
) {
    const token =
        typeof window !== 'undefined'
        ? localStorage.getItem('token')
        : null;

    console.log('API REQUEST:', `${API_URL}${endpoint}`);

    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        const text = await res.text();
        console.error('API ERROR:', {
            url: `${API_URL}${endpoint}`,
            status: res.status,
            response: text,
        });
        throw new Error(`API Error: ${res.status} - ${text}`);
    }

    return res.json();
}