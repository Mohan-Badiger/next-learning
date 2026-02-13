import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import PortfolioPreview from '@/components/PortfolioPreview'
import ServicesSnapshot from '@/components/ServicesSnapshot'
import Testimonials from '@/components/Testimonials'
import WhyChooseSection from '@/components/WhyChooseSection'
import React from 'react'

const Home = () => {

  return (
    <div >
      <Hero/>
      <ServicesSnapshot/>
      <WhyChooseSection/>
      <PortfolioPreview/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Home
