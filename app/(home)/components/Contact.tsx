"use client"
import BackgroundBeams from '@/components/background-beams';
import Input from '@/components/input';
import Label from '@/components/label';
import InputMultiline from '@/components/multiline-input';
import { cn } from '@/lib/utils';
import React, { useState } from 'react'

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

    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email,message,subject);
        console.log("Form submitted");
        setEmail('');
        setMessage('');
        setSubject('');
    };

    return (
        <section id="contact" className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 mt-4">
                <h1 className="relative z-10 text-2xl md:text-7xl font-bold dark:text-white">
                Get in touch
                </h1>
                <p></p>
                <h3 className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
                {"Let's turn our ideas into reality"}
                </h3>
                <form className="my-8 relative z-10" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" placeholder="example@ex.com" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="subject" type="text" value={subject} onChange={(event)=>setSubject(event.target.value)}/>
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <InputMultiline
                        id="message"
                        value={message} onChange={(event)=>setMessage(event.target.value)}
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
            <BackgroundBeams />
        </section>
    )
}
