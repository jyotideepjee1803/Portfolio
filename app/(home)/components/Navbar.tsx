import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
export default function Navbar() {

    const socials = [
        {
            Label : "Github",
            Icon : SiGithub,
            Link : "#"
        },
        {
            Label : "Linkedin",
            Icon : SiLinkedin,
            Link : "#"
        },
        {
            Label : "Twitter",
            Icon : SiX,
            Link : "#"
        }
    ]
    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1>Jyotideep</h1>
            <div className='flex items-center gap-5'>
                {socials.map((item, index)=>{
                    const Icon = item.Icon
                    return <Link href={item.Link} key={index} aria-label={item.Label}> <Icon className='w-5 h-5 hover:scale-125 transition-all'/> </Link>
                })}
            </div>
        </nav>
    )
}
