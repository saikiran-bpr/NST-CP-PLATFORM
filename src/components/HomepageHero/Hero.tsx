"use client"
import React from "react";
import { cn } from "../../utils/accertinityUtil";
import { Spotlight } from "./spotlight";
import { SparklesCore } from "./sparkles";
import { motion } from "framer-motion";



export function HomePageHero() {
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden h-screen">
      <div className=" max-w-7xl mt-28  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <motion.h1
          className="p-5 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-loose"
          initial={{ z: -100, opacity: 0 }}
          animate={{ z: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          Welcome to <span className="text-red-400">Competitive</span> Programming Club of NST
        </motion.h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto">
            An official page for Competitive Programming club at <b>Newton School of Technology</b>. Here, you will get all the resources, contests and updates on CP. Join us to enhance your skills and compete with the best!
        </p>
      </div>
      <div className="w-[40rem] h-40 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
