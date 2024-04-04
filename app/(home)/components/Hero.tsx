import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import { Spotlight } from '@/components/Spotlight'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='space-y-10'>
                <h1 className='text-4xl lg:text-7xl font-bold'>    
                    Hello there <br/>
                    <span>{"I'm Jyotideep"}</span>
                </h1>
                <p className='md:w-96 text-lg text-grey-300'>
                I am a CS undergrad, full stack developer with a strong foundation in both frontend and backend development.
                Also deeply interested in competitive programming with strong fundamentals of C++
                </p>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/coding.jpg"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="coder"
                        />
                        </CardItem>
                    </CardBody>
                    </CardContainer>
            </div>
        </div>
    )
}
