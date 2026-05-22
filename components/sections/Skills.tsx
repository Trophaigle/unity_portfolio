import React from 'react'

// src/components/sections/Skills.tsx
import Section from "../ui/Section";
import SkillCard from '../ui/SkillCard';

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-6xl">

        <SkillCard
          title="Engines"
          items={[
            "Unity",
            "Unreal Engine 5",
            "Blueprint System",
          ]}
        />

        <SkillCard
          title="Programming"
          items={[
            "C#",
            "C++",
            "Python",
            "Web Stack",
          ]}
        />

        <SkillCard
          title="XR Development"
          items={[
            "VR / AR / MR",
            "OpenXR",
            "Meta Quest",
            "AR Foundation",
          ]}
        />

        <SkillCard
          title="Tools & Workflow"
          items={[
            "Git / GitHub",
            "Blender",
            "Shader Graph",
            "Cinemachine",
          ]}
        />

      </div>
    </Section>
  );
}