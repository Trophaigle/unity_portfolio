import React from 'react'

// src/components/sections/Services.tsx
import Section from "../ui/Section";

export default function Services() {
  return (
    <Section id="services" title="What I can build">
      <div className="grid gap-8 md:grid-cols-2 text-neutral-300 max-w-4xl">
        <div>
          <h3 className="font-medium mb-2">Serious games</h3>
          <p>
            Training-oriented games focused on risk management,
            safety, and decision-making.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Simulations</h3>
          <p>
            Interactive simulations to explore complex systems
            and human behavior.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Prototypes & POCs</h3>
          <p>
            Rapid prototypes to test ideas, mechanics, or training concepts.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Multi-platform builds</h3>
          <p>
            Desktop, mobile or WebGL builds depending on project needs.
          </p>
        </div>
      </div>
    </Section>
  );
}