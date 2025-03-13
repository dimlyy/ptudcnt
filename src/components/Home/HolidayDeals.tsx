"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { holidayDealImgs, hotDealsItem } from "@constants";

const HolidayDeals = () => {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const isMoving = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Kéo bằng chuột
  const handleMouseDown = (e: MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    isMoving.current = false;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    isMoving.current = true;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = (e: MouseEvent) => {
    const wasMoving = isDragging.current && isMoving.current;

    isDragging.current = false;
    if (!carouselRef.current) return;

    isMoving.current = false;

    // Snap về item gần nhất
    const container = carouselRef.current;
    const itemWidth = container.children[0].getBoundingClientRect().width + 8;
    const nearestIndex = Math.round(container.scrollLeft / itemWidth);
    const newScrollLeft = nearestIndex * itemWidth;

    container.style.scrollBehavior = "smooth";
    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    if (wasMoving) {
      container.dataset.preventClick = "true";

      // Xóa đánh dấu sau một khoảng thời gian ngắn
      setTimeout(() => {
        delete container.dataset.preventClick;
      }, 50);
    }
  };


  // 🔹 Kéo bằng cảm ứng (điện thoại)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    snapToClosest();
  };

  // 🔥 Snap về phần tử gần nhất
  const snapToClosest = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.children[0].getBoundingClientRect().width + 8;
    const nearestIndex = Math.round(container.scrollLeft / itemWidth);
    const newScrollLeft = nearestIndex * itemWidth;

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.children[0].offsetWidth + 8;

      if (direction === "next") {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="container mt-5 flex flex-col">
      {/* Header IMG */}
      <div className="max-w-full">
        <Image
          src={holidayDealImgs.img}
          alt={holidayDealImgs.alt}
          width={1200}
          height={200}
          className="object-cover w-full h-auto rounded-t-2xl"
        />
      </div>

      {/* Carousel */}
      <div className="bg-[#ecbf8c] md:p-[10px] px-1 py-2 relative">
        <div
          ref={carouselRef}
          onMouseDown={(e) => {
            e.stopPropagation();
            handleMouseDown(e);
          }}
          onMouseMove={(e) => {
            e.stopPropagation();
            handleMouseMove(e);
          }}
          onMouseUp={(e) => {
            e.stopPropagation();
            handleMouseUp(e);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            handleMouseUp(e);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`bg-[var(--background-color)] flex flex-row flex-nowrap 
          overflow-auto gap-4 scrollbar-hide select-none relative pl-2`}
        >
          {hotDealsItem.data.map((item, index) => (
            <Link
              key={index}
              href={item.slug ? `/products/${item.slug}` : "#"}
              className="w-[46%] md:w-[calc(20%-0.5rem)] flex flex-col flex-none gap-1
             rounded-lg my-2 p-2 snap-start shadow-xl bg-white hover:scale-105 relative"
              draggable={false}
              onClick={(e) => {
                if (carouselRef.current?.dataset.preventClick === "true") {
                  e.preventDefault();
                  return;
                }
              }}
            >
              <div className="flex flex-row gap-1">
                <span className="px-2 py-1 bg-[var(--btn-color)] text-[var(--title-color)] rounded-md text-xs">
                  {Math.round((1 - item.discountPrice / item.price) * 100)}%
                </span>
                {item.instatement && (
                  <span className="px-2 py-1 bg-gray-300 text-gray-500 rounded-md text-xs text-[0.5rem]">
                    Trả góp 0%
                  </span>
                )}
              </div>

              <div className="w-full relative">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto pointer-events-none"
                />
                <Image
                  src="/assets/images/sunday_discount.png"
                  alt="Sunday discount"
                  width={600}
                  height={200}
                  className="absolute bottom-0 object-cover w-full h-auto pointer-events-none"
                />
              </div>

              <div className="mt-3">
                <span className="text-sm line-clamp-2 leading-[1.4]">
                  {item.label}
                </span>
                <div className="flex flex-row items-center gap-2 mt-1">
                  <span className="text-red-500">
                    {item.discountPrice.toLocaleString("vi-VN")}₫
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    {item.price.toLocaleString("vi-VN")}₫
                  </span>
                </div>
              </div>

              <span className="text-green-500 text-xs">
                Giảm {(item.price - item.discountPrice).toLocaleString("vi-VN")}
                đ
              </span>

              <div className="flex flex-row mt-2">
                <div className="mr-auto w-fit">
                  <Image
                    src={item.discountGif}
                    alt="Giảm giá"
                    width={50}
                    height={20}
                    className="object-cover w-full h-auto rounded-md"
                  />
                </div>
                <div className="ml-auto mr-2 flex flex-row items-center text-pink-400 hover:text-red-500 gap-1">
                  <span className="text-xs">Yêu thích</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    className="w-4 h-4 transition-all duration-300 hover:fill-red-500 hover:stroke-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.438 4.562a5.5 5.5 0 0 0-7.78 0L12 6.22l-1.658-1.658a5.5 5.5 0 0 0-7.78 7.78L12 21.001l9.438-9.438a5.5 5.5 0 0 0 0-7.78Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Prev Button */}
        <button
          className="hidden md:flex absolute left-4 top-[35%] w-9 h-9 cursor-pointer bg-gray-500 opacity-70 hover:opacity-100 transition-all duration-300 items-center justify-center rounded-lg"
          onClick={() => handleScroll("prev")}
        >
          <i className="uil uil-angle-left text-white text-2xl"></i>
        </button>

        {/* Next Button */}
        <button
          className="hidden md:flex absolute right-6 top-[35%] w-9 h-9 cursor-pointer bg-gray-500 opacity-70 hover:opacity-100 transition-all duration-300 items-center justify-center rounded-lg"
          onClick={() => handleScroll("next")}
        >
          <i className="uil uil-angle-right text-white text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default HolidayDeals;
