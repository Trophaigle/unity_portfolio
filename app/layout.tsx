import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unity Serious Game Developer",
  description: "Unity developer specialized in serious games and risk management simulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="br-neutral-950 text-neutral-100"
      >
        {children}
      </body>
    </html>
  );
}
