import React from 'react'
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT */}
        <p className="max-w-2xl text-neutral-300">
  I develop interactive 3D applications and XR systems (VR/AR) using Unity and Unreal Engine, ranging from real-time simulations to immersive environments.
  <br /><br />
  My focus lies in building technically robust systems with a strong emphasis on visual clarity, interaction design, and overall coherence.
  <br /><br />
  I bridge engineering and design to deliver real-time experiences that are both functional and intentionally crafted.
</p>

        {/* RIGHT */}
        <div className="md:ml-auto md:max-w-xs text-neutral-300">
          
          <h3 className="text-white font-semibold mb-3">
            Multilingual mindset
          </h3>

          <p className="text-sm leading-relaxed">
            Speaking multiple languages allows me to collaborate with people from diverse backgrounds. 
            I enjoy discovering new cultures, perspectives, and ways of thinking — both personally and professionally.
          </p>

          <ul className="mt-4 space-y-1 text-sm text-neutral-400">
            <li>🇫🇷 French — Native</li>
            <li>🇬🇧 English — Fluent</li>
            <li>🇩🇪 German — A2+</li>
            <li>🇪🇸 Spanish — A2+</li>
          </ul>

          {/* ART LINK */}
          <div className="mt-6">
            <a
              href="https://thomaserafin.com/en/art"
              className="text-sm text-white underline underline-offset-4 hover:text-neutral-300 transition"
            >
              Discover my artistic creations →
            </a>

            <p className="mt-2 text-xs text-neutral-500">
              A selection of visual and creative work reflecting my interest in aesthetics and composition.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}