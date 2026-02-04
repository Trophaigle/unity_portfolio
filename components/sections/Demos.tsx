import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";


export default function Demos() {
  return (
    <Section id="demos" title="Demos & prototypes">
      <div className="space-y-10 max-w-3xl">
        <div>
          <h3 className="font-medium mb-1">
            Crisis decision simulation
          </h3>
          <p className="text-neutral-400 mb-2">
            A scenario-based simulation where players make decisions
            under time pressure and uncertainty.
          </p>
          <a className="underline" href="#">
            Play on Unity Play
          </a>
        </div>

        <div>
          <h3 className="font-medium mb-1">
            Risk awareness training module
          </h3>
          <p className="text-neutral-400 mb-2">
            Interactive environment designed to identify, evaluate
            and mitigate risks.
          </p>
          <a className="underline" href="#">
            View prototype
          </a>
        </div>
      </div>
    </Section>
  );
}