export default function GreetingSection() {
    return (
        <section className="py-20 px-6 text-center bg-gradient-to-b from-orange-100 via-orange-50 to-white">
            <div className="max-w-2xl mx-auto">

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Halo, Saya Mamink 👋
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-gray-600 text-base md:text-lg">
                Selamat datang di halaman profile. Di sini kamu bisa mengenal lebih dekat tentang saya,
                perjalanan, dan cerita yang saya bagikan.
                </p>

                {/* Divider */}
                <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                </div>

                {/* Optional small tagline */}
                <p className="mt-6 text-sm text-gray-500 italic">
                "Sharing stories through moments and memories"
                </p>

            </div>
        </section>
    );
}
