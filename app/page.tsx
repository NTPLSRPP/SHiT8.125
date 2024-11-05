"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Tabs } from "@/components/ui/tabs";

import AgendaTable1 from "./agendatable1";
import AgendaTable2 from "./agendatable2";

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

  // const description = `The Stupid Hackathon is a mad lit event where people create apps that are totally mid, showcasing their creativity in building useless projects that no one is asking for, often with a negative aura and a touch of skibidi vibes, leaving everyone feeling a bit sus about the whole thing.`;

  return (
    <div className="flex flex-col overflow-x-hidden dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <FloatingNav navItems={navItems} />
      <div className="">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
          <section id="hero" className="section w-screen h-screen">
            <HeroHighlight>
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
                className="text-5xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug sm:ml-0 lg:text-center mx-auto "
              >
                <TypewriterEffectSmooth words={title} className="text-xl" />
                <Highlight className="text-black dark:text-white text-xl">
                  version 8.125
                </Highlight>
              </motion.h1>
            </HeroHighlight>
          </section>
          {/* <section id="description" className="section flex flex-col p-8 justify-center items-center w-screen h-full">
            <TextGenerateEffect words={description} className="px-8" />
          </section> */}
          <section id="agenda" className="section flex flex-col  p-1 sm:p-4 justify-center items-center w-full">
            <h2 className="text-3xl font-semibold my-8 ">Agenda</h2>
            <div className="w-full lg:w-[120vh] px-5 h-[150vh] lg:h-screen">
            <Tabs tabs={tabs} tabClassName="px-10 py-3"/>
            </div> 
          </section>
          <section id="supporters" className="section flex flex-col p-8 mt-4 justify-center items-center w-screen h-full">
            <h2 className="text-3xl font-semibold mb-4">Supporters</h2>
            <p>Thanks to our equally misguided supporters who made this event possible:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <img src="/logo1.png" alt="Logo 1" className="h-16" />
              <img src="/logo2.png" alt="Logo 2" className="h-16" />
              <img src="/logo3.png" alt="Logo 3" className="h-16" />
            </div>
          </section>
          <section id="projects" className="section flex flex-col p-8 mt-4 justify-center items-center w-screen h-full">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className=" p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project 1: Useless Button</h3>
                <p>A button that doesn’t do anything – truly innovative.</p>
              </div>
              <div className="p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project 2: Confusing Calculator</h3>
                <p>Every calculation is wrong, but at least it’s entertaining.</p>
              </div>
              <div className="p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project 3: Reverse Alarm Clock</h3>
                <p>Wakes you up at random times to make sure you never sleep well.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-52">
        <p>&copy; 2024 Stupid Hackathon. We apologize for nothing.</p>
      </footer>
    </div>
  );
}
