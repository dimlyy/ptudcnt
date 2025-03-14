"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imgAdvertiseCarousel, imgAdvertiseGrid } from "@constants";
import Link from "next/link";

const CarouselSlider = () => {
  const [isHover, setIsHover] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handlePrev = () => {
    setCurrentImg((prev) => (prev === 0 ? imgAdvertiseCarousel.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImg((prev) => (prev === imgAdvertiseCarousel.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    let touchEndX = e.touches[0].clientX;
    let swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      handleNext();
      setTouchStartX(null);
    } else if (swipeDistance < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };

  // 🔥 Tự động chạy slider mỗi 3 giây (3000ms)
  useEffect(() => {
    if (!isHover) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval); // Xóa interval khi component unmount hoặc hover vào
    }
  }, [currentImg, isHover]); // Chạy lại khi ảnh thay đổi hoặc hover vào

  return (
    <div className="flex md:flex-row flex-col container mt-4">
      <div
        className="md:w-1/2 w-full mx-3 overflow-hidden relative"
        onMouseEnter={() => setIsHover(true)}  // Khi hover vào, dừng autoplay
        onMouseLeave={() => setIsHover(false)} // Khi rời chuột, tiếp tục autoplay
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Slider Images */}
        <div
          className="flex flex-row w-full transition-transform duration-300"
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
        >
          {imgAdvertiseCarousel.map((item, index) => (
            <Link href={item.slug ? `/blog/${item.slug}` : "#"} key={index} className="w-full shrink-0">
              <Image
                src={item.img}
                alt={item.title}
                width={700}
                height={600}
                className="object-contain w-full rounded-2xl"
              />
            </Link>
          ))}
        </div>

        {/* Nút Prev */}
        <div
          onClick={handlePrev}
          className={`absolute cursor-pointer w-10 h-10 flex items-center justify-center left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 bg-[var(--container-color)] rounded-full transition-transform duration-300 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          <i className="uil uil-arrow-left text-[var(--title-color)] text-3xl" />
        </div>

        {/* Nút Next */}
        <div
          onClick={handleNext}
          className={`absolute cursor-pointer w-10 h-10 flex items-center justify-center right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 bg-[var(--container-color)] rounded-full transition-transform duration-300 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          <i className="uil uil-arrow-right text-[var(--title-color)] text-3xl" />
        </div>
      </div>
{/* 
      <div className="hidden md:flex md:w-1/2 w-full">
            <div className="flex flex-row flex-wrap gap-2">
               {imgAdvertiseGrid.map((item, index) => (
                <Link href={item.slug ? `/blog/${item.slug}` : "#"} key={index} className="flex-shrink-0 w-[49%] overflow-hidden">
                  <Image
                  alt={item.title}
                  src={item.img}
                  width={700}
                  height={600}
                  className="object-cover w-full h-full rounded-2xl hover:scale-105 duration-500"/>
                </Link>
               ))}
            </div>
      </div> */}


    </div>
  );
};

export default CarouselSlider;
