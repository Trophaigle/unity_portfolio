"use client";
import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";
import Image from 'next/image';
import { useRef } from "react";

type Demo =
  | {
      title: string;
      platform: string;
      description: string;
      image: string;
      video?: never;
      link: string;
    }
  | {
      title: string;
      platform: string;
      description: string;
      video: string;
      image?: never;
      link: string;
    };

const Adddemos: Demo[] = [
  {
    title: "Northern Lights - VR",
    platform: "Virtual Reality",
    description:
      "Northern Lights made with Unity / Blender (mesh) and Shader Graphs for colors and animations",
    image: "/NorthernLights.jpg",
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
  {
    title: "Echoes of the Museum",
    platform: "Desktop - (VR comming...)",
    description:
      "Explore an interactive museum where art and music come alive. Listen closely and uncover hidden stories through sound.",
    video: "/videos/TraillerCutWithMusicCompressed.mp4",
    link: "https://play.unity.com/fr/games/00553f75-f7e4-4db1-bd7c-68bc2d99f070/echoes-of-the-museum",
  }
];

export default function AddDemos() {
  return (
    <Section id="Adddemos" title="Additional Demos made with Unity">
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
            {demo.video ? <HoverVideo src={demo.video} /> : demo.image ? (
              <Image
                src={demo.image}
                alt={demo.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            ) : null}
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

function HoverVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-full object-cover transition group-hover:scale-105"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause();
          videoRef.current!.currentTime = 0; // reset au début (optionnel)
      }}
    />
  );
}