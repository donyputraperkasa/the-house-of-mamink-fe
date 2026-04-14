export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            {children}
        </section>
    );
}