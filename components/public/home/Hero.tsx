"use client";

export default function Hero() {
    return (
        <section className="h-[80vh] flex items-center justify-center text-center px-6 bg-gradient-to-b from-orange-100 to-white">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                The House of Mamink
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                Tempat berbagi cerita, karya, dan momen berharga.
                </p>

                <div className="mt-6 flex gap-4 justify-center">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
                    Lihat Gallery
                </button>
                <button className="border px-6 py-3 rounded-xl hover:bg-gray-100">
                    Tentang Kami
                </button>
                </div>
            </div>
        </section>
    );
}
