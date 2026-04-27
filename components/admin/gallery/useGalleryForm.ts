'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Gallery } from '../../../types/gallery';
import { getGallery, getGalleryById, createGallery, updateGallery, deleteGallery } from '../../../services/gallery.service';


export function useGalleryForm() {
    const [form, setForm] = useState<Partial<Gallery>>({});
    const [data, setData] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const params = useParams();
    const id = params?.id ? Number(params.id) : null;
    

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpload = (e: any) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        setFile(selectedFile);
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

        const formData = new FormData();
        formData.append('title', form.title || '');
        formData.append('description', form.description || '');

        if (file) {
            formData.append('image', file);
        }

        if (id) {
            await updateGallery(id, formData);
        } else {
            await createGallery(formData);
        }

        setForm({});
        setFile(null);
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