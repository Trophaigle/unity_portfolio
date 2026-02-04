import React from 'react'

// src/components/sections/Skills.tsx
import Section from "../ui/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl text-neutral-300">
        <div>
          <h3 className="font-medium mb-2">Unity</h3>
          <ul className="space-y-1">
            <li>• C# scripting</li>
            <li>• Gameplay systems</li>
            <li>• UI / UX</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Serious game design</h3>
          <ul className="space-y-1">
            <li>• Pedagogical mechanics</li>
            <li>• Scenario design</li>
            <li>• Feedback & scoring</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Development</h3>
          <ul className="space-y-1">
            <li>• Git / version control</li>
            <li>• Clean architecture</li>
            <li>• Rapid iteration</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}