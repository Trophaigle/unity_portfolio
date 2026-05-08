"use client";
import React from 'react'

// src/components/sections/Demos.tsx
import Section from "../ui/Section";
import Image from 'next/image';
import { useRef } from "react";
import { xrDemos } from '@/data/demos';
import MediaCard from '../ui/MediaCard';

export default function XR() {
  return (
    <Section id="xr" title="XR - Extended Reality">
      <div className="grid gap-8 md:grid-cols-2">
        {xrDemos.map((demo) => (
          <MediaCard key={demo.slug} {...demo} />
        ))}
      </div>
    </Section>
  );
}