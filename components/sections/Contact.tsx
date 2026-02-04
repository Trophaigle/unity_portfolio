import React from 'react'

// src/components/sections/Contact.tsx
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Let’s talk">
      <div className="max-w-2xl space-y-4 text-neutral-300">
        <p>
          If you have a project, a training need or an idea to explore,
          feel free to reach out.
        </p>
        <p>
          📧 email@example.com <br />
          🔗 LinkedIn / GitHub
        </p>
      </div>
    </Section>
  );
}