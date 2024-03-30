"use client"
import Input from '@/components/input';
import Label from '@/components/label';
import { cn } from '@/lib/utils';
import React from 'react'

const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
};

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
};

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <section id='contact' className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-col items-center justify-center py-20'>
            <div className='space-y-2'>
                <h1 className='text-4xl lg:text-7xl font-bold'>    
                    Get in Touch
                </h1>
                <p className='md:w-96 text-lg text-grey-300'>
                    Ready to Turn Your Ideas into Reality?
                </p>
            </div>

            <div>
               <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="example@ex.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <Input
                    multiple
                    id="message"
                    type="text"
                />
                </LabelInputContainer>
        
                <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                >
                Send &rarr;
                <BottomGradient />
                </button>
                </form>
            </div>
        </section>
    )
}
