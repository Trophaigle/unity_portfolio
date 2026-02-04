type CardProps = {
  title: string;
  items: string[];
};

export default function Card({ title, items }: CardProps) {
  return (
    <div className="border border-neutral-700 rounded-xl p-6 bg-white/5 backdrop-blur-md hover:shadow-lg transition">
      <h3 className="flex items-center gap-2 font-medium text-lg mb-4">
        <span className="w-2 h-2 bg-white rounded-full" />
            {title}
        </h3>

      <ul className="space-y-2 text-neutral-300 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-neutral-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}