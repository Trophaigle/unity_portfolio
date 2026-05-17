"use client";
import React, { useRef } from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";

import MediaCard from '../ui/MediaCard';
import { featuredProjects } from '@/data/demos';

export default function Featured() {
  return (
    <Section
      id="featured"
      title="Featured Projects"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <MediaCard
  key={project.slug}
  {...project}
   fallbackImage='/imageNotAvailable.png'
/>
        ))}
      </div>
    </Section>
  );
}