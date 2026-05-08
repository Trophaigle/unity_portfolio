"use client";
import { unrealDemos } from "@/data/demos";
import Section from "../ui/Section";
import Image from "next/image";
import { useRef } from "react";
import MediaCard from "../ui/MediaCard";


const DEFAULT_IMAGE = "/images/fallback.jpg";

export default function Unreal() {
  return (
    <Section id="unreal" title="Unreal Engine">
      <div className="grid gap-8 md:grid-cols-2">
        {unrealDemos.map((demo) => (
          <MediaCard key={demo.title} {...demo} />
        ))}
      </div>
    </Section>
  );
}