import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Unity from "@/components/sections/Unity";
import Unreal from "@/components/sections/Unreal";

import XR from "@/components/sections/XR";

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Unity />
     <XR />
     <Unreal />
     {/* <Skills /> */}
     <Contact />  
    </>   
  );
}
