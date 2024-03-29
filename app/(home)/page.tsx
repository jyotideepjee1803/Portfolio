import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Profile from './components/Profile'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden p-5'>
      <div className='w-full dark:bg-black bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto'>
          <Navbar/>
          <Hero />
        </div>
      </div>
      <Skills/>
      <Profile/>
      <Projects/>
    </div>
  )
}
