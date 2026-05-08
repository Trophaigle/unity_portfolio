import Nav from "@/components/Nav";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Engine Portfolio",
  description: "A showcase of my work in Unity, Unreal Engine, and XR development. Explore interactive demos, immersive experiences, and innovative projects that highlight my skills in 3D engine development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="br-neutral-950 text-neutral-10"
      >
         <Nav />

         <main>
          {children}
        </main>
      </body>
    </html>
  );
}
