import React from 'react'

// src/components/sections/Skills.tsx
import Section from "../ui/Section";
import Card from '../ui/Card';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
        <Card
          title="Unity"
          items={[
            "C# scripting",
            "Gameplay systems",
            "UI / UX",
          ]}
        />

        <Card
          title="Serious game design"
          items={[
            "Pedagogical mechanics",
            "Scenario design",
            "Feedback & scoring",
          ]}
        />

        <Card
          title="Development"
          items={[
            "Git / version control",
            "Clean architecture",
            "Rapid iteration",
          ]}
        />
      </div>
    </Section>
  );
}