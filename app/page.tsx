import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Demos from "@/components/sections/Demos";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Vision from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
    <Nav />
    <main>
     <Hero />
     <Problem />
     <Vision />
     <Services />
     <Demos />
     <Skills />
     <About />
     <Contact />
    </main>
    </>
   
  );
}
