"use client"
import React from "react";
import { TracingBeam } from "@/components/tracing-beams";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

const content = [
  {
    title: "React-native developer @ BikerBuds",
    duration : "July 2023 - Oct 2023",
    description: (
      <div className="max-w-lg mx-auto">
        <ul className="list-disc list-inside">
          <li className="mb-4">
            Refactored the codebase, leveraging reusable components, resulting in a significant increase in performance
          </li>
          <li className="mb-4">
            Developed authentication portal using OAuth for the application, ensuring secure and seamless access for users.
          </li>
          <li className="mb-4">
            Developed backend for the realtime conversation feature using socket.io, 
            MongoDB, Express, Node and user authentication.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Competitive Programming",
    duration : "2022 - Present",
    description: (
      <div className="max-w-lg mx-auto">
        <p className="text-lg mb-4">I have demonstrated proficiency in competitive programming through my achievements on platforms such as Codeforces and LeetCode.</p>
        
        <div className="border-l-4 border-gray-700 pl-4 mb-6">
          <Link href="https://codeforces.com/profile/DraggerJd03" target="_blank" className="flex items-center"><AiOutlineLink className="w-5 h-5 hover:scale-125 transition-all mr-3"/><h3 className="text-xl font-semibold">Codeforces</h3></Link>
          <ul className="list-disc list-inside">
            <li>Achieved a maximum rating of <span className="text-green-600">1652</span>.</li>
            <li>Ranked in the top <span className="text-green-600">7%</span> worldwide.</li>
          </ul>
        </div>

        <div className="border-l-4 border-gray-700 pl-4 mb-6">
        <Link href="https://leetcode.com/jyotideepjee" target="_blank" className="flex items-center"><AiOutlineLink className="w-5 h-5 hover:scale-125 transition-all mr-3"/><h3 className="text-xl font-semibold">Leetcode</h3></Link>

          <ul className="list-disc list-inside">
            <li>Attained the <span className="text-yellow-500">Knight</span> rank.</li>
            <li>Reached a maximum rating of <span className="text-yellow-500">2086</span>.</li>
            <li>Ranked in the top <span className="text-yellow-500">2%</span> globally.</li>
            
          </ul>
        </div>
      </div>
    ),
  },
];

export default function Profile() {
  return (
    <section id="profiles" className='mb-10 min-h-[60vh]'>
    {/* <div className="flex flex-row justify-around p-20"> */}
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full flex justify-center top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Experience
      </h1>
    </div>
    <TracingBeam className="px-5">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">

            <div className="flex justify-between items-center">
              <h2 className={"text-xl mb-4 font-bold dark:text-white"}>
                {item.title}
              </h2>
              <p>
                {item.duration}
              </p>
            </div>
            <div className="text-md prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    {/* </div> */}
    </section>
  );
}
