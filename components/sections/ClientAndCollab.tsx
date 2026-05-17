"use client";
import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";

import MediaCard from '../ui/MediaCard';
import { clientAndCollaborativeProjects } from '@/data/demos';

export default function ClientAndCollaboration() {
  return (
    <Section
      id="client-collab"
      title="Client & Collaborative Work"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {clientAndCollaborativeProjects.map((project) => (
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