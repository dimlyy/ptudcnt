"use client"

import React from 'react'

const Slider = () => {
  const videoSrc= window.innerWidth < 760 ? 'assets/video/smallHero.mp4' : 'assets/video/hero.mp4';

  return (
    <div className='w-full p-4 h-92 relative'>
        <video className='rounded-md' autoPlay muted playsInline={true} loop key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
        </video>

        <div className='absolute top-10 left-1/2'>
            <span className='text-2xl text-slate-400 uppercase'>Iphone 16</span>
        </div>
    </div>
  )
}

export default Slider
