"use client";

import { useState } from "react";
import GalleryGrid from "@/components/public/gallery/GalleryGrid";
import GalleryFilter from "@/components/public/gallery/GalleryFilter";

type Props = {
    data: any[];
};

export default function GalleryClient({ data }: Props) {
    const [search, setSearch] = useState("");

    const filtered = data.filter((item: any) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Header + Search */}
            <div className="flex md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Gallery
                </h1>

                <div className="w-full md:w-80">
                    <GalleryFilter onSearch={setSearch} />
                </div>
            </div>

            {/* Grid */}
            <GalleryGrid data={filtered} />
        </div>
    );
}