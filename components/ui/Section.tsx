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
      className="max-w-5xl mx-auto px-6 py-24"
    >
      {title && (
        <h2 className="text-3xl font-semibold mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}