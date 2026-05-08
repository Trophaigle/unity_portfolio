"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  slug: string;
  title: string;
  platform: string;
  short_description: string;
  description?: string;
  images?: string[];
  videos?: {
    src: string;
    poster?: string;
  }[];
  fallbackImage?: string;
};

export default function MediaCard({
  slug,
  title,
  platform,
  short_description,
  images,
  videos,
  fallbackImage = "/images/fallback.jpg",
}: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-neutral-900 rounded-xl overflow-hidden hover:bg-neutral-800 transition"
    >
      {/* MEDIA */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={images?.[0] || fallbackImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />

        {videos?.[0] && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <HoverVideo src={videos[0].src} />
          </div>
        )}
      </div>

      {/* TEXT */}
      <div className="p-6">
        <span className="text-xs text-neutral-400 block mb-2">
          {platform}
        </span>

        <h3 className="font-medium mb-2">{title}</h3>

        <p className="text-neutral-400 text-sm">{short_description}</p>
      </div>
    </Link>
  );
}

function HoverVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-full object-cover transition"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    />
  );
}