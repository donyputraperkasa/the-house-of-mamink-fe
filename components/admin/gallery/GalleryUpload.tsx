interface Props {
    image: string;
    uploading: boolean;
    onUpload: (e: any) => void;
}

export default function GalleryUpload({ image, uploading, onUpload }: Props) {
    return (
        <div>
        <label className="text-sm font-semibold text-amber-700">
            Image
        </label>

        <input
            type="file"
            accept="image/*"
            onChange={onUpload}
            className="mt-1 w-full border border-amber-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-500"
        />

        {uploading && (
            <p className="text-xs text-amber-600 mt-1">
            Uploading...
            </p>
        )}

        {image && (
            <img
            src={image}
            className="w-40 h-40 object-cover rounded-lg mt-2 border-2 border-amber-300"
            />
        )}
        </div>
    );
}