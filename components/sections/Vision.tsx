import React from 'react'

// src/components/sections/Vision.tsx
import Section from "../ui/Section";

export default function Vision() {
  return (
    <Section id="vision" title="My approach">
      <ul className="max-w-2xl space-y-4 text-neutral-300">
        <li>
          • Learning through action rather than explanation
        </li>
        <li>
          • Meaningful choices with visible consequences
        </li>
        <li>
          • Realistic scenarios inspired by real-world constraints
        </li>
        <li>
          • Iterative design with rapid prototyping
        </li>
      </ul>
    </Section>
  );
}