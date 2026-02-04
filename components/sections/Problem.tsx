import React from 'react'

import Section from "../ui/Section";

export default function Problem() {
  return (
    <Section id="problem" title="Why serious games">
      <div className="max-w-2xl space-y-4 text-neutral-300">
        <p>
          Risk management and decision-making are often taught through static
          content, abstract examples, or passive learning.
        </p>
        <p>
          In real situations, people must act under pressure, interpret signals,
          and deal with consequences.
        </p>
        <p>
          Serious games make it possible to train these skills in a safe,
          engaging and repeatable environment.
        </p>
      </div>
    </Section>
  );
}
