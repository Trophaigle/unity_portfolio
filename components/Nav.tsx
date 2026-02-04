"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "FR">("EN");

  const links = [
    { label: "Approach", href: "#vision" },
    { label: "Services", href: "#services" },
    { label: "Demos", href: "#demos" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-bold">Thomas Serafin</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}

          {/* Language selector
          <button
            onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
            className="ml-4 px-2 py-1 border border-neutral-600 rounded hover:bg-neutral-800 transition"
          >
            {lang}
          </button> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-neutral-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur transform transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 h-full">
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="mb-6 self-end p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile links */}
          <div className="flex flex-col gap-6 text-lg text-neutral-200">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Language selector */}
            <button
              onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
              className="mt-4 px-4 py-2 border border-neutral-600 rounded hover:bg-neutral-800 transition"
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}