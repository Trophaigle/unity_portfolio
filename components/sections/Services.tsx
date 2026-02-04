import React from 'react'

// src/components/sections/Services.tsx
import Section from "../ui/Section";
import Card from '../ui/Card';

export default function Services() {
  return (
    <Section id="services" title="What I can build">
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
        <Card
          title="Serious games"
          items={[
            "Training-oriented interactive experiences",
            "Focus on risk management and safety",
            "Learning through decision-making",
          ]}
        />

        <Card
          title="Simulations"
          items={[
            "Exploration of complex systems",
            "Human behavior and constraints",
            "Safe environments for experimentation",
          ]}
        />

        <Card
          title="Prototypes & POCs"
          items={[
            "Rapid iteration and validation",
            "Gameplay and interaction testing",
            "Concepts for training or R&D",
          ]}
        />

        <Card
          title="Multi-platform builds"
          items={[
            "Desktop applications",
            "Mobile (Android / iOS)",
            "WebGL / Unity Play",
          ]}
        />
      </div>
    </Section>
  );
}