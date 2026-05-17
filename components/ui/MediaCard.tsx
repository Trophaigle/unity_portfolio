"use client";

import { Project } from "@/data/demos";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = Project & {
  fallbackImage?: string;
};

const statusStyles: Record<Project["status"], string> = {
  completed: "bg-green-500/10 text-green-300 border-green-500/20",
  "in-progress": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  paused: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  volunteer: "bg-pink-500/10 text-pink-300 border-pink-500/20",
};

export default function MediaCard({
  slug,
  title,
  platform,
  short_description,
  status,
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

        {/* STATUS BADGE */}
        {status && (
          <div className="absolute top-3 left-3">
            <span
              className={`
                text-xs px-2 py-1 rounded-full border backdrop-blur-md capitalize
                ${statusStyles[status]}
              `}
            >
              {status.replace("-", " ")}
            </span>
          </div>
        )}

        {/* VIDEO HOVER */}
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

        <p className="text-neutral-400 text-sm">
          {short_description}
        </p>
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
      className="w-full h-full object-cover"
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