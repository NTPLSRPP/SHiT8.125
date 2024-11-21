"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Tabs } from "@/components/ui/tabs";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import Image from "next/image";
import CreatorGarten from "@/assets/creatorsgarten.svg"
import kmutt from "@/assets/kmutt_Graphic_notext.svg"
import MicrosoftLogo from "@/assets/Microsoft_logo.svg"
import loongnhoom from "@/assets/loongnhoom.jpg"
import Doro from "@/assets/Doro.png"

import AgendaTable1 from "./agendatable1";
import AgendaTable2 from "./agendatable2";
import { projectData } from "./projectData";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { FocusCards } from "@/components/ui/focus-cards";

const SingleDoro = "https://preview.redd.it/doro-meme-explaining-v0-48tja35a4sec1.png?width=777&format=png&auto=webp&s=5fc9da33c7a417aff826f812e7464893d27a6f0f"

const RandomDoro = () => {
  const [doroCount, setDoroCount] = useState(1);
  
  useEffect(() => {
    const countInterval = setInterval(() => {
      setDoroCount(prev => prev + 1);
    }, 30000);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <>
      {[...Array(doroCount)].map((_, index) => (
        <SingleRandomDoro key={index} />
      ))}
    </>
  );
};

const SingleRandomDoro = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState({ x: 1, y: 1 });
  
  useEffect(() => {
    const updatePosition = () => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      const newRotation = Math.random() * 360;
      const newFlipX = Math.random() > 0.5 ? 1 : -1;
      const newFlipY = Math.random() > 0.5 ? 1 : -1;
      
      setPosition({ x, y });
      setRotation(newRotation);
      setFlip({ x: newFlipX, y: newFlipY });
    };

    const interval = setInterval(updatePosition, 3000);
    updatePosition();

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={SingleDoro}
      alt="Random Doro"
      width={75}
      height={75}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 50,
        pointerEvents: 'none',
        transform: `rotate(${rotation}deg) scaleX(${flip.x}) scaleY(${flip.y})`,
        transition: 'all 0.5s ease-in-out',
      }}
    />
  );
};

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
    },
    {
      name: "Agenda",
      link: "#agenda",
    },
    {
      name: "Supporters",
      link: "#supporters",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ]

  const title = [
    {
      text: "The",
    },
    {
      text: "Stupid",
      className: "text-purple-500 dark:text-purple-500",
    },
    {
      text: "Hackathon",
    },
    {
      text: "at KMUTT",
    }
  ]

  const tabs = [
    {
      title: "Day 1",
      value: "day1",
      content: (
        <AgendaTable1 />
      )
    },
    {
      title: "Day 2",
      value: "day2",
      content: (
        <AgendaTable2 />
      )
    }
  ]

  const supporters = [
    {
      title: "Microsoft",
      description: "Microsoft creates platforms and tools powered by AI to deliver innovative solutions that meet the evolving needs of our customers. The technology company is committed to making AI available broadly and doing so responsibly, with a mission to empower every person and every organization on the planet to achieve more.",
      link: "https://learn.microsoft.com/en-us/credentials/",
      icon: <Image src={MicrosoftLogo} alt="logo" width={70} height={70} />,
    },
    {
      title: "KMUTT",
      description: "King Mongkut’s University of Technology Thonburi was founded as a research university serving as both educational park and industrial park. KMUTT currently produces qualified graduates and skillful human resources with strong quality and morality ground. The university actively involves in researchand development as well as provides quality academic services contributing to enhancement of economy and quality of life.",
      link: "https://www.kmutt.ac.th/",
      icon: <Image src={kmutt} alt="logo" width={100} height={100} />,
    },
    {
      title: "CreatorsGarten",
      description: "We are a community of creators (mostly) based in Thailand. We work with 🌃 open source communities, 💻 developers, 🚀 educators, 🦾 artists, and more to explore new possibilities and co-create fascinating things together.",
      link: "https://creatorsgarten.org/",
      icon: <Image src={CreatorGarten} alt="logo" width={100} height={100} className="dark:invert" />,
    },
    {
      title: "Loongnhoom_square",
      description: "ลุงหนุ่ม สแควร์ จำหน่ายเครื่องดื่ม น้ำปั่น ทาโกยากิ และเครป เปิดบริการ : วันจันทร์ – วันศุกร์ เวลา 06:30 น. - 18:00 น.",
      link: "https://www.instagram.com/loongnhoom_square/",
      icon: <Image src={loongnhoom} alt="logo" width={100} height={100} className="" />,
    }
  ]

  return (
    <div className="flex flex-col overflow-x-hidden dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <RandomDoro />
      <FloatingNav navItems={navItems} />
      <div className="">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
          <section id="hero" className="section w-screen h-screen">
            <Image src={Doro} alt="logo" width={1080} height={1920} className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-10" />
            <Image src={SingleDoro} alt="logo" width={250} height={250} className="lg:hidden absolute bottom-0 right-0 object-cover z-10" />
            <HeroHighlight className="">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-5xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug sm:ml-0 lg:text-center mx-auto"
              >
                <TypewriterEffectSmooth words={title} className="text-xl" />
                <Highlight className="text-black dark:text-white text-xl">
                  version 8.125
                </Highlight>
              </motion.h1>
            </HeroHighlight>
          </section>
          <section id="agenda" className="section flex flex-col  p-1 justify-center items-center w-full h-full">
            <h2 className="text-3xl font-semibold my-4 lg:my-8">Agenda</h2>
            <div className="w-full lg:w-[100vh] px-5 h-[100vh] lg:h-screen">
              <Tabs tabs={tabs} tabClassName="px-6 py-3" />
            </div>
          </section>
          <section id="supporters" className="section flex flex-col p-8 mt-4 pt-44 lg:pt-48 justify-center items-center w-full h-full">
            <p className="text-[#0078D4] opacity-40 text-[390px] absolute mb-4 translate-y-[-450px] hidden lg:block">Supporters</p>
            <h2 className="text-3xl font-semibold mb-4 lg:hidden">Supporters/Partner</h2>
            <p className="text-lg mb-4 lg:hidden">Thanks to our equally misguided supporters who made this event possible:</p>
            <div className="flex flex-col md:flex-row h-full justify-center content-center space-x-6 mt-4 lg:mt-24 gap-8">
              <HoverEffect items={supporters} />
            </div>
          </section>
          <section id="projects" className="section flex flex-col p-8 mt-4 justify-center items-center w-screen h-full">
            <h2 className="text-3xl font-semibold mb-4 lg:hidden">Projects</h2>
            <div className="hidden lg:block">
              <HeroParallax products={projectData}/>
            </div>
            <div className="block lg:hidden w-full">
              <FocusCards cards={projectData} />
            </div>
          </section>
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-52 bg-white dark:bg-black">
        <div className="flex flex-col px-5 items-start justify-center">
          <p>&copy; 2024 Stupid Hackathon in KMUTT. We apologize for nothing.</p>
          <p>Source code: <Link className="underline" href="https://github.com/NTPLSRPP/SHiT8.125">SHiT 8.125</Link></p>
          <p>Made with ❤️ by <Link className="underline" href="https://github.com/NTPLSRPP">NTPLSRPP</Link></p>
          <p>Visit <Link className="underline" href="https://stupid.hackathon.in.th/">stupid.hackathon.in.th</Link> for more of this SHiT</p>
        </div>
        <Image src="https://i.redd.it/n6ouh8znv3zb1.png" alt="logo" width={350} height={350} />
      </footer>
    </div>
  );
}
