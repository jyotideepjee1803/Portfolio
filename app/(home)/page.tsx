"use client"
import React from 'react'
import Headbar from './components/Headbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Navbar } from './components/Navbar'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <Navbar/>
      <div className='w-full dark:bg-black bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] relative p-5'>
        <div className='max-w-7xl mx-auto'>
          <Headbar/>
          <Hero />
        </div>
      </div>
      <Skills/>
      <Profile/>
      <Projects/>
      <Contact/>
    </div>
  )
}
