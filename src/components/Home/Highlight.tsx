import React from 'react'
import VideoCarousel from './videoCarousel/VideoCarousel'

const Highlight = () => {
  return (
    <section className='px-4 container overflow-hidden w-screen h-full'>
        <div className='max-w-full'>
            <div className='mb-12 w-full items-ebd justify-between'>
              <h1 className='text-2xl text-center text-[var(--title-color)}'>Get the Highlight</h1>
            </div>
            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highlight
