import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";
import Image from 'next/image';



const Adddemos = [
  {
    title: "Northern Lights - VR",
    platform: "Virtual Reality",
    description:
      "Northern Lights made with Unity / Blender (mesh) and Shader Graphs for colors and animations",
    image: "/NorthernLights.jpg",
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  }
];

export default function AddDemos() {
  return (
    <Section id="Adddemos" title="Additional Demos">
      <div className="grid gap-8 md:grid-cols-2">
        {Adddemos.map((demo) => (
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
                {demo.platform}
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