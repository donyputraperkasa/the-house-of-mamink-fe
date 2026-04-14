"use client";

const dummyImages = [
    "https://source.unsplash.com/random/300x300?nature",
    "https://source.unsplash.com/random/300x301",
    "https://source.unsplash.com/random/300x302",
    "https://source.unsplash.com/random/300x303",
    "https://source.unsplash.com/random/300x304",
    "https://source.unsplash.com/random/300x305",
    "https://source.unsplash.com/random/300x306",
    "https://source.unsplash.com/random/300x307",
];

export default function HighlightGallery() {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
                Gallery Terbaru
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dummyImages.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className="rounded-xl object-cover h-40 w-full hover:scale-105 transition"
                    alt="gallery"
                />
                ))}
            </div>

            <div className="text-center mt-8">
                <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition">
                Lihat Semua
                </button>
            </div>
        </section>
    );
}
