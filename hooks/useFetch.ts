import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
        try {
            const res = await fetch(url);

            if (!res.ok) {
            throw new Error("Gagal fetch data");
            }

            const result = await res.json();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}
