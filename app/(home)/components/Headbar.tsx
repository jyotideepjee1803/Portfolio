import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Headbar() {

    const socials = [
        {
            Label : "Github",
            Icon : SiGithub,
            Link : "https://github.com/jyotideepjee1803"
        },
        {
            Label : "Linkedin",
            Icon : SiLinkedin,
            Link : "https://www.linkedin.com/in/jyotideep-acharjee-43b7361a6/"
        },
        {
            Label : "Twitter",
            Icon : SiX,
            Link : "https://twitter.com/JohnSir2318"
        }
    ]
    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1>Jyotideep</h1>
            <div className='flex items-center gap-5'>
                {socials.map((item, index)=>{
                    const Icon = item.Icon
                    return <Link href={item.Link} target="_blank" key={index} aria-label={item.Label} className='z-[20]'> <Icon className='w-5 h-5 hover:scale-125 transition-all '/> </Link>
                })}
            </div>
        </nav>
    )
}
