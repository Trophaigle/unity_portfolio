import Image from 'next/image';
import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

    {/* Background image */}
      <Image
        src="/image2.png"
        alt="Serious game simulation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-semibold mb-6 leading-tight">
          Unity Developer <br />
          Serious Games & Risk Management
        </h1>

        <p className="text-xl text-neutral-300 max-w-2xl mb-10">
          I design interactive simulations that help people train, make decisions,
          and understand risk through experience.
        </p>

        <div className="flex gap-4">
          <a
            href="#demos"
            className="px-6 py-3 bg-white text-black"
          >
            View demos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-600"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}