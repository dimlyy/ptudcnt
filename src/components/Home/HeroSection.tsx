import React from 'react'
import Slider from './Slider/Slider'

const HeroSection = () => {
  return (
    <section className='container px-4'>
      <div className='w-full flex-col md:flex-row '>
        <Slider/>
      </div>
    </section>
  )
}

export default HeroSection
