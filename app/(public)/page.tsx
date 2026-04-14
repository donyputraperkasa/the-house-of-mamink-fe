import Hero from "@/components/public/home/Hero";
import HighlightGallery from "@/components/public/home/HighlightGallery";
import CTA from "@/components/public/home/CTA";

export default function Home() {
    return (
        <section>
            <Hero />
            <HighlightGallery />
            <CTA />
        </section>
    );
}