'use client';

interface AvatarUploadProps {
    avatar: string;
    uploading: boolean;
    onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AvatarUpload({ avatar, uploading, onUpload }: AvatarUploadProps) {
    return (
        <div>
            <label className="text-sm font-semibold text-amber-700">Avatar</label>
            <input
                type="file"
                accept="image/*"
                onChange={onUpload}
                className="mt-1 block w-full text-sm border border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            {uploading && (
                <p className="text-xs text-amber-600 mt-1">Uploading...</p>
            )}

            {avatar && (
                <img
                src={avatar}
                alt="preview"
                className="w-32 h-32 object-cover rounded-lg mt-2 border-2 border-amber-300"
                />
            )}
        </div>
    );
}
