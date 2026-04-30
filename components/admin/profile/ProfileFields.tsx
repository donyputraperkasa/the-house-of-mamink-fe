"use client";

import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Profile } from '../../../types/profile';

interface Props {
    form: Partial<Profile>;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ProfileFields({ form, onChange }: Props) {
    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-amber-700">Name</label>
                <Input name="name" value={form.name || ''} onChange={onChange} placeholder="Enter your name" />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Region</label>
                <Input name="region" value={form.region || ''} onChange={onChange} placeholder="Enter your region" />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Email</label>
                <Input name="email" value={form.email || ''} onChange={onChange} placeholder="Enter your email" />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Phone</label>
                <Input name="phone" value={form.phone || ''} onChange={onChange} placeholder="Enter your phone number" />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Instagram</label>
                <Input name="instagram" value={form.instagram || ''} onChange={onChange} placeholder="Enter your Instagram username" />
            </div>

            <div>
                <label className="text-sm font-semibold text-amber-700">Description</label>
                <Textarea name="description" value={form.description || ''} onChange={onChange} rows={4} placeholder="Write a short description about yourself" />
            </div>
        </div>
    );
}
