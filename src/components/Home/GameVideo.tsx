"use client"

import { frameImg, frameVideo } from '@utils'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const GameVideo = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=> {
        gsap.from('#videoTrigger', {
            scrollTrigger: {
                trigger: '#videoTrigger',
                start: '40% bottom'
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
    })

  return (
    <section>
    <div id='videoTrigger' className='container px-4'>
        <div className='mt-10 md:mt-20 mb-14'>
            <div>
                <h1 className='text-center text-3xl text-[var(--title-color-dark)] mb-5'>Độ phân giải 4k</h1>
            </div>

            <div className='relative h-full flex items-center justify-center overflow-hidden'>
                <div className='overflow-hidden '>
                    <Image
                    width={1392}
                    height={680}
                    src={frameImg}
                    alt="frame"
                    className="bg-transparent relative z-10"
                    />
                </div>
    
                <div className='absolute pointer-events-none w-[95%] h-[90%] rounded-[56px] overflow-hidden'>
                    <video autoPlay loop muted playsInline>
                        <source src={frameVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default GameVideo
