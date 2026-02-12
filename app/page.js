import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {

  return (
    <div >
      <Hero/>
      <Features/>
      <Testimonials/>
      <CTA/>
      <Contact/>
    </div>
  )
}

export default Home
