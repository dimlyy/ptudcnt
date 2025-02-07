"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { AboutImg } from '@constants'
import { useGSAP } from '@gsap/react'
const AboutStore = () => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutRef = useRef();
    const titleRef = useRef();

    const [currentImg, setCurrentImg] = useState(0);

    const handleOnNext = () => {
        setCurrentImg((prev)=> (prev === AboutImg.length - 1 ? 0 : prev + 1))
    }

    const handelOnPrev = () => {
        setCurrentImg((prev) => (prev === 0 ? AboutImg.length - 1 : prev - 1))
    }

    useGSAP(() => {
        gsap.from(aboutRef.current, {
            scrollTrigger: {
                trigger: aboutRef.current,
                start: '20% bottom',
            },
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.inOut',
        })

        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: aboutRef.current,
                start: '20% bottom',
            },
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.inOut',
        })
    })

  return (
    <section className='my-32'>
        <div className='container px-4 flex flex-col items-center md:flex-row min-h-[310px]'>
            <div className='w-full flex justify-center md:w-1/2 rounded-2xl'>
                <div ref={aboutRef} className='relative'>
                    <Image
                    alt='About Apple Store'
                    src={AboutImg[currentImg].img}
                    width={500}
                    height={600}
                    className='object-contain rounded-2xl'
                    />

                    <div
                    onClick={handleOnNext}
                    className='absolute cursor-pointer w-10 h-10 flex items-center justify-center right-1 top-1/2 z-10 bg-[var(--container-color)] rounded-full opacity-80'>
                        <i className='uil uil-arrow-right mt-1 text-[var(--title-color)] text-3xl'/>
                    </div>

                    <div
                    onClick={handelOnPrev}
                    className='absolute cursor-pointer w-10 h-10 flex items-center justify-center left-1 top-1/2 z-10 bg-[var(--container-color)] rounded-full opacity-80'>
                        <i className='uil uil-arrow-left mt-1 text-[var(--title-color)] text-3xl'/>
                    </div>
                </div>
            </div>
            
            <div ref={titleRef} className='w-full md:w-1/2 mx-20 items-start h-full md:mx-40'>
                <h1 className='text-[--title-color] uppercase text-3xl mb-5'>Thông tin về DimLy Store</h1>
                <span className='text-[var(--text-color)]'>Được thành lập vào nằm 2025 bởi Trần Ánh Dương thuộc ngành công nghệ thông tin, chuyên ngành khoa học máy tính</span>
            </div>
        </div>
    </section>
  )
}

export default AboutStore
