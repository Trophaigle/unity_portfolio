"use client";

import Section from "../ui/Section";

import MediaCard from "../ui/MediaCard";
import { prototypeProjects } from "@/data/demos";

export default function Prototypes() {
  return (
    <Section
      id="prototypes"
      title="Experimental & Prototype Projects"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {prototypeProjects.map((project) => (
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