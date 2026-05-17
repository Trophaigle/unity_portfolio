import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Prototypes from "@/components/sections/Proto";
import ClientAndCollaboration from "@/components/sections/ClientAndCollab";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Featured />
     <ClientAndCollaboration />
     <Prototypes />
     <Skills /> 
     <Contact />  
    </>   
  );
}
