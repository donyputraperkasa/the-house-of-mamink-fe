import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Profile } from '@/types/profile';

interface Props {
    form: Partial<Profile>;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ProfileFields({ form, onChange }: Props) {
    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-amber-700">Name</label>
                <Input name="name" value={form.name || ''} onChange={onChange} />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Region</label>
                <Input name="region" value={form.region || ''} onChange={onChange} />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Email</label>
                <Input name="email" value={form.email || ''} onChange={onChange} />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Phone</label>
                <Input name="phone" value={form.phone || ''} onChange={onChange} />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Instagram</label>
                <Input name="instagram" value={form.instagram || ''} onChange={onChange} />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Description</label>
                <Textarea name="description" value={form.description || ''} onChange={onChange} rows={4} />
            </div>
        </div>
    );
}
