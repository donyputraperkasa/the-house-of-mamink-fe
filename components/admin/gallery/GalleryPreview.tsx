type Props = {
    image?: string;
};

export default function GalleryPreview({ image }: Props) {
    if (!image) {
        return (
        <div className="w-full h-40 flex items-center justify-center border border-dashed rounded-xl text-gray-400">
            Belum ada gambar
        </div>
        );
    }

    return (
        <div className="w-full">
            <img
                src={
                    image?.startsWith('http')
                    ? image
                    : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${image}`
                }
                alt="Preview"
                className="w-full h-40 object-cover rounded-xl shadow"
            />
        </div>
    );
}
