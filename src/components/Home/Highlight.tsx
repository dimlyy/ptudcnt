import React from 'react'
import VideoCarousel from './videoCarousel/VideoCarousel'

const Highlight = () => {
  return (
    <section className='px-4 container overflow-hidden w-screen h-full flex items-center justify-center'>
        <div className='max-w-full'>
            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highlight
