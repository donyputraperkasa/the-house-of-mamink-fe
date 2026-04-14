import GreetingSection from "@/components/public/profile/GreetingSection";
import ProfileCard from "@/components/public/profile/ProfileCard";
import { Profile } from "@/types/profile";

async function getProfile(): Promise<Profile | null> {
    try {
        const res = await fetch("http://localhost:4000/profile", {
        cache: "no-store",
        });

        if (!res.ok) return null;

        return res.json();
    } catch {
        return null;
    }
}

export default async function ProfilePage() {
    const data = await getProfile();

    return (
        <main className="pt-24">
            <GreetingSection />
            <ProfileCard data={data} />
        </main>
    );
}
