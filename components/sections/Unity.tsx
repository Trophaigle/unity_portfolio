"use client";
import React, { useRef } from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";
import Image from 'next/image';
import { unityDemos } from '@/data/demos';
import MediaCard from '../ui/MediaCard';

export default function Unity() {
  return (
    <Section id="unity" title="Unity">
      <div className="grid gap-8 md:grid-cols-2">
        {unityDemos.map((demo) => (
          <MediaCard key={demo.slug} {...demo} />
        ))}
      </div>
    </Section>
  );
}