import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";
import Image from 'next/image';



const demos = [
  {
    title: "Crisis decision simulation",
    description:
      "Scenario-based simulation focused on decision-making under time pressure and uncertainty.",
    image: "/unity-image.png",
    link: "https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo",
  },
  {
    title: "Risk awareness training module",
    description:
      "Interactive environment designed to identify, evaluate and mitigate risks.",
    image: "/unity-image.png",
    link: "https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo",
  },
];

export default function Demos() {
  return (
    <Section id="demos" title="Demos & prototypes">
      <div className="grid gap-8 md:grid-cols-2">
        {demos.map((demo) => (
          <a
            key={demo.title}
            href={demo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral-900 rounded-xl overflow-hidden hover:bg-neutral-800 transition"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
             
              <Image
                src={demo.image}
                alt={demo.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <span className="text-xs text-neutral-400 block mb-2">
                Unity Play · WebGL
              </span>
                    
              <h3 className="font-medium mb-2">
                {demo.title}
              </h3>
                    
              <p className="text-neutral-400 text-sm">
                {demo.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}