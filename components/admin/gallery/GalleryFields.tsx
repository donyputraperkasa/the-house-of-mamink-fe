import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Gallery } from '../../../types/gallery';

interface Props {
    form: Partial<Gallery>;
    onChange: (e: any) => void;
}

export default function GalleryFields({ form, onChange }: Props) {
    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-amber-700">
                    Title
                </label>
                <Input
                    name="title"
                    value={form.title || ''}
                    onChange={onChange}
                    placeholder="Enter title"
                />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">
                    Description
                </label>
                <Textarea
                    name="description"
                    value={form.description || ''}
                    onChange={onChange}
                    placeholder="Write description"
                />
            </div>
        </div>
    );
}