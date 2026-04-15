import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Updates from '../components/Updates'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="scanlines grid-bg">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Updates />
      <Sponsors />
      <Contact />
    </div>
  )
}