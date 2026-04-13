'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Gallery } from '@/types/gallery';
import { getGallery, getGalleryById, createGallery, updateGallery, deleteGallery } from '@/services/gallery.service';


export function useGalleryForm() {
    const [form, setForm] = useState<Partial<Gallery>>({});
    const [data, setData] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const params = useParams();
    const id = params?.id ? Number(params.id) : null;
    

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpload = async (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        setUploading(true);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: 'POST',
        body: formData,
        });

        const result = await res.json();

        setForm((prev) => ({
        ...prev,
        image: result.url,
        }));

        setUploading(false);
    };

    const fetchData = async () => {
        const res = await getGallery();
        setData(res);
    };

    useEffect(() => {
        fetchData();

        if (id) {
            const fetchDetail = async () => {
                const detail = await getGalleryById(id);
                setForm(detail);
            };
            fetchDetail();
        }
    }, [id]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        if (id) {
            await updateGallery(id, form);
        } else {
            await createGallery(form);
        }

        setForm({});
        await fetchData();

        setLoading(false);
    };

    const handleDelete = async (id: number) => {
        await deleteGallery(id);
        await fetchData();
    };

    return {
        form,
        data,
        loading,
        uploading,
        handleChange,
        handleUpload,
        handleSubmit,
        handleDelete,
    };
}