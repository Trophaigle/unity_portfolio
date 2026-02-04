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
          <h2 className="text-3xl font-semibold mb-3">
            {title}
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
        </div>
      )}

      {children}
    </section>
  );
}