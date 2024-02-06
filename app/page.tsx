'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Founders from "./_components/Founders";
import Timeline from "./_components/Timeline";
import { useScroll } from "framer-motion";
import Nav from "./_components/navbar";
import Contact from "./_components/Contact";
import Contribute from "./_components/Contribute";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const {scrollYProgress} = useScroll()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  return (
    <main className=" bg-[#001612] h-fit w-[100vw]">
      <Nav progress={scrollYProgress} />
      <Hero />
      <Founders />
      <About />
      <Timeline />
      {/* <Contribute /> */}
      {/* <Contact /> */}
    </main>
  );
}
