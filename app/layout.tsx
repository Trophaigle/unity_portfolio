import Nav from "@/components/Nav";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Engine Portfolio",
  description: "A portfolio presenting my work in real-time 3D, XR development, and interactive systems using Unity and Unreal Engine. It highlights immersive applications, simulations, and engineering-driven projects focused on performance, interaction design, and visual clarity.",
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
