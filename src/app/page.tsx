"use client";
import Bio from "@/components/Bio";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projectts from "@/components/Projectts";
import Skills from "@/components/Skills";
import Image from "next/image";
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect (() => {
  Aos.init({
easing:"ease-out-back",
duration:1200,
delay:100,
mirror:true,
anchorPlacement: "bottom-bottom",
offset:160,
});

Aos.refresh();
  },[]);

  
return (
        
  <main>
    
<Navbar/>

    
<Bio/>
  

<Projectts />
<About />
    <Skills />
    <Contact />
    
  </main>        
    
  );
}


