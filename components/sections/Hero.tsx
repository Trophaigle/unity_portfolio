import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/bg-hero.jpg" //engine-like scene image
        alt="3D engine creation environment"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0  bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

       <h1 className="text-5xl font-semibold mb-6 leading-tight text-white">
  Unity / Unreal Engine Developer <br />
  Real-time 3D · XR · Interactive Applications
</h1>

<p className="text-xl text-neutral-300 max-w-2xl mb-10">
  I design and develop real-time 3D applications, from interactive simulations to immersive XR experiences across desktop, mobile, and VR/AR platforms.
</p>

<p className="text-lg text-neutral-400 mb-10">
  3 years of experience with Unity and Unreal Engine
</p>

        <div className="flex gap-4">
          <a
            href="#unity"
            className="px-6 py-3 bg-white text-black"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-600 text-white"
          >
            Get in touch
          </a>
        </div>

      </div>
    </section>
  );
}
