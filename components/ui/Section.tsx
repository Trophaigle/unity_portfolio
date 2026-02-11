// src/components/ui/Section.tsx
type Props = {
  id?: string;
  title?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      className="py-28 px-6 max-w-5xl mx-auto "
    >
      {title && (
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-3 relative after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-emerald-400 after:to-cyan-400 after:rounded-full after:mt-2">
            {title}
          </h2>
        </div>
      )}

      {children}
    </section>
  );
}