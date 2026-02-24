import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";
import Image from 'next/image';



const demos = [
  
  {
    title: "Risk awareness training module",
    description:
      "Interactive 3D environment designed to identify, evaluate and mitigate risks.",
    image: "/image2.png",
    link: "https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo",
  },
  {
    title: "Cybersecurity training module",
    description:
      "Scenario-based simulation focused on identifying and mitigating cybersecurity threats in a simulated corporate workstation.",
    image: "/cybersecuMailFile.png",
    link: "https://play.unity.com/fr/games/8726d29d-574e-49e8-bfa6-b3ccdeddfbd4/cyber-desk-threat-detection",
  },
  {
    title: "SafePath: Risk Assessment - Prototype",
    description:
      "Immersive 3D racing game where players identify and mitigate risks on a dynamic track. (cinemachine, interfaces, scriptable object, inheritance)",
    image: "/image.png",
    link: "https://play.unity.com/fr/games/4685d6a6-a22f-4fe2-bf0d-d94da52bf4b2/safepath-risk-assessment-proto",
  }
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
                Desktop · WebGL . Mobile
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