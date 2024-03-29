import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
            <div className='space-y-10'>
                <h1 className='text-4xl lg:text-7xl font-bold'>    
                    Some random intro <br/> 
                    <span>hello hi</span>
                </h1>
                <p className='md:w-96 text-lg text-grey-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur commodi 
                    at eveniet, minima doloribus impedit exercitationem aspernatur veniam beatae ut 
                </p>
                <Link href={"mailto:ex@gmail.com"} className='inline-block'>
                    Contact
                </Link>
            </div>

            <div>
                <div className='w-72 h-72 space-y-3 relative'>
                    <div className='glow absolute top-[40%] right-[50%]'></div>
                </div>
            </div>
        </div>
    )
}
