"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { homePageFooterOffers, shopImgs } from '@constants'
const AboutStore = () => {
    // Object lưu trữ vị trí slider cho mỗi section
    const [sliderPositions, setSliderPositions] = useState({});

    const handleOnPrev = (index: number) => {
        setSliderPositions(prev => ({
            ...prev,
            // Chỉ cho phép di chuyển về 0 là điểm bắt đầu
            [index]: Math.max((prev[index] || 0) - 1, 0)
        }));
    }
    
    const handleOnNext = (index: number, totalItems) => {
        setSliderPositions(prev => ({
            ...prev,
            // Giới hạn di chuyển dựa trên số lượng phần tử có thể hiển thị
            // totalItems - 4 là vị trí cuối cùng có thể di chuyển tới (4 là số phần tử hiển thị trên một màn hình)
            [index]: Math.min((prev[index] || 0) + 1, totalItems - 4)
        }));
    }

    return (
        <section className="container mb-10">
            <div className='w-full flex flex-col px-4 gap-20'>
                <div className='flex flex-col overflow-hidden'>   
                    {homePageFooterOffers && 
                    homePageFooterOffers.map((item, index) => (
                        <div key={index} className='flex flex-col mt-10 relative'>
                            <h1 className='uppercase text-red-500 text-3xl text-left pl-5'>{item.label}</h1>
                            <div className='w-full flex flex-row gap-2 mt-4'
                             style={{ 
                                transform: `translateX(-${(sliderPositions[index] || 0) * 25}%)`,
                                transition: 'transform 0.3s ease-in-out'
                             }}>
                                {item.data.map((data, i) => (
                                    <Link href={data.slug ? `/blog/${data.slug}` : "#"} key={i} className='md:w-[calc(25%-0.4rem)] w-2/3 shrink-0'>
                                        <Image
                                        src={data.img}
                                        alt={data.alt}
                                        width={280}
                                        height={125}
                                        className='object-cover w-full h-auto rounded-xl'/>
                                    </Link>
                                ))}
                            </div>

                            {/* Prev Button - Chỉ hiển thị khi có thể di chuyển về trước */}
                            {item.data.length >= 5 && (sliderPositions[index] || 0) > 0 ? (
                                <div
                                onClick={() => handleOnPrev(index)}
                                className='hidden md:flex items-center justify-center absolute top-2/4 left-[2px] w-9 h-9
                                bg-gray-400 duration-300 rounded-lg opacity-50 hover:opacity-100 cursor-pointer'>
                                    <i className='uil uil-angle-left text-2xl text-white '/>
                                </div>
                            ) : null}

                            {/* Next Button - Chỉ hiển thị khi có thể di chuyển về sau */}
                            {item.data.length >= 5 && (sliderPositions[index] || 0) < item.data.length - 4 ? (
                                <div
                                onClick={() => handleOnNext(index, item.data.length)}
                                className='hidden md:flex items-center justify-center absolute top-2/4 right-1 w-9 h-9
                                bg-gray-400 duration-300 rounded-lg opacity-50 hover:opacity-100 cursor-pointer'>
                                    <i className='uil uil-angle-right text-2xl text-white '/>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div className='w-full flex flex-row overflow-hidden rounded-lg'>
                    {shopImgs && (
                        shopImgs.map((item,index) => (
                            <div key={index} className='md:w-1/5 w-2/5 shrink- hover:opacity-60 duration-300'>
                                <Image 
                                src={item.img}
                                alt={item.alt}
                                width={230}
                                height={230}
                                className='object-cover w-full h-auto'
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutStore