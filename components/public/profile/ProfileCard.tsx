import { Profile } from "@/types/profile";

export default function ProfileCard({ data }: { data: Profile | null }) {
    if (!data) {
        return (
        <section className="py-16 px-6 text-center">
            <p className="text-gray-500">Data profile belum tersedia</p>
        </section>
        );
    }

    return (
        <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10">

                {/* Image + Info */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={data.avatar || "https://source.unsplash.com/random/300x300?person"}
                        alt="profile"
                        className="w-40 h-40 rounded-full object-cover shadow-md"
                    />

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-800">
                        {data.name}
                        </h2>

                        {data.instagram && (
                        <a
                            href={`https://instagram.com/${data.instagram}`}
                            target="_blank"
                            className="text-orange-600 text-sm mt-1 block hover:underline"
                        >
                            @{data.instagram}
                        </a>
                        )}

                        <p className="mt-4 text-gray-600">
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t"></div>

                    {/* Detail */}
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                    {data.region && (
                        <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Alamat</h3>
                        <p>{data.region}</p>
                        </div>
                    )}

                    {data.email && (
                        <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                        <p>{data.email}</p>
                        </div>
                    )}

                    {data.phone && (
                        <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                        <p>{data.phone}</p>
                        </div>
                    )}

                    {data.instagram && (
                        <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Instagram</h3>
                        <p>@{data.instagram}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
