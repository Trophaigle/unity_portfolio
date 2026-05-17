type SkillCardProps = {
  title: string;
  items: string[];
};

export default function SkillCard({
  title,
  items,
}: SkillCardProps) {
  return (
    <div
      className="
        border border-neutral-800
        rounded-2xl
        p-6
        bg-white/[0.03]
        backdrop-blur-md
      "
    >
      <h3 className="text-lg font-semibold text-white mb-5">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-sm text-neutral-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}