"use client";

import { useState } from "react";

type Props = {
    onSearch: (value: string) => void;
};

export default function GalleryFilter({ onSearch }: Props) {
    const [value, setValue] = useState("");

    return (
        <div className="mb-6">
        <input
            type="text"
            placeholder="Cari gallery..."
            value={value}
            onChange={(e) => {
            setValue(e.target.value);
            onSearch(e.target.value);
            }}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        </div>
    );
}
