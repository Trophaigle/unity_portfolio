// src/components/Nav.tsx
export default function Nav() {
  return (
    <nav className="sticky top-0 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex gap-6 text-sm">
        <a href="#vision" className="hover:underline">Approach</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#demos" className="hover:underline">Demos</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="ml-auto underline">Contact</a>
      </div>
    </nav>
  );
}