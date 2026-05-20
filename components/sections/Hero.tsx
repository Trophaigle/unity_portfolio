import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/bg-hero.jpg"
        alt="3D engine creation environment"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 sm:pt-28 md:pt-0">

        {/* SMALL LABEL */}
        <p className="text-sm tracking-[0.2em] uppercase text-neutral-300 mb-4">
          Unity · Unreal Engine · XR
        </p>

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white max-w-4xl mb-6">
          Real-time 3D Developer crafting immersive interactive applications
        </h1>

        {/* DESCRIPTION */}
        <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed mb-8">
          I build real-time experiences across desktop, mobile, and VR/AR platforms, combining technical development with strong audio and visual direction.
        </p>

        {/* EXPERIENCE */}
        <p className="text-sm uppercase tracking-wide text-neutral-400 mb-10">
          3+ years working with 3D engines and immersive technologies
        </p>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 flex-wrap">

          <a
            href="#unity"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-600 text-white rounded-lg hover:border-neutral-400 transition-colors"
          >
            Get in touch
          </a>

          <a
            href="/files/CV_ThomasSERAFIN-EN.pdf"
            target="_blank"
            className="text-sm tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            Resume ↗
          </a>

        </div>
      </div>
    </section>
  );
}
