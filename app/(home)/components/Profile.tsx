"use client"
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PinContainer from "@/components/pin-container";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export default function Profile() {
  return (
    <section id="profiles" className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
       <h1 className='text-4xl lg:text-7xl font-bold'>    
          Coding Profiles
      </h1>
      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer
          title="/codeforces/DraggerJd03"
          href="https://codeforces.com/profile/DraggerJd03"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Codeforces Profile
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Expert at codeforces. Maximum rating 1652, top 7% worldwide
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center">
              <SiCodeforces className='w-20 h-20 hover:scale-125 transition-all'/>
            </div>
          </div>
        </PinContainer>
        
        <PinContainer
          title="/leetcode/jyotideepjee"
          href="https://leetcode.com/jyotideepjee"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Leetcode Profile
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Knight at leetcode. Maximum rating 2086, top 2% worldwide
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center">
            <SiLeetcode className='w-20 h-20 hover:scale-125 transition-all'/>
            </div>
          </div>
        </PinContainer>
      
      </div>
    </section>
  );
}
