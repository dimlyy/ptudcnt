"use client";
import React, { useRef } from "react";

import Link from "next/link";
import Image from "next/image";

const ProductRelateCarousel = ({ data }) => {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Scroll On Mouse
  // Kéo bằng chuột
  const handleMouseDown = (e) => {
    e.preventDefault(); // Ngăn mở link khi đang kéo
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e) => {
    e.preventDefault(); // Ngăn mở link khi đang kéo
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = (e: MouseEvent) => {
    e.preventDefault(); // Ngăn mở link khi đang kéo
    isDragging.current = false;
    if (!carouselRef.current) return;

    snapToClosest();
  };

  // Prevent Link Behavior When Dragging
  const handlePreventClick = (e: MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  // Drag On Phone

  const handleTouchStart = (e: TouchEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!carouselRef.current || !isDragging.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    snapToClosest();
  };

  const snapToClosest = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const itemWidth = container.children[0].getBoundingClientRect().width + 8;
    const nearestIndex = Math.round(container.scrollLeft / itemWidth);
    const newScrollLeft = nearestIndex * itemWidth;

    container.style.scrollBehavior = "smooth";
    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const handleButtonScroll = (direction: string) => {
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
    <div>
      <div className="flex flex-col relative md:mt-5 mb-2 mt-2 gap-1 px-2 overflow-hidden">
        <span className="uppercase text-red-500 text-lg font-bold">
          {data.product}
        </span>
        <div
          className="w-full flex flex-row gap-1 overflow-auto scrollbar-hide select-none"
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
        >
          {data.datas.map((item, index) => (
            <Link
              onClick={handlePreventClick}
              key={index}
              href={item.slug ? item.slug : "#"}
              className="md:w-[calc(26%-0.75rem)] w-[calc(45%-0.5rem)] snap-start flex flex-col p-2 gap-1 shrink-0 bg-[var(--container-color)] rounded-md
              "
            >
              <div className="flex flex-row gap-1">
                <span className="py-1 px-2 bg-pink-500 text-white rounded-lg text-xs">
                  {Math.round(100 - (item.discountPrice / item.price) * 100)}%
                </span>
                {item.instatement && (
                  <span className="bg-gray-400 px-1 text-xs flex items-center justify-center rounded-md text-gray-100">
                    Trả góp 0%
                  </span>
                )}
              </div>

              <div className="mx-1 relative overflow-hidden rounded-lg">
                <Image
                  alt={item.alt}
                  src={item.img}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <Image
                  alt={item.alt}
                  src={item.absoluteImg}
                  width={600}
                  height={600}
                  className="absolute bottom-0 w-full h-auto object-cover"
                />
              </div>

              <div className="flex flex-col mt-1 gap-1">
                <span className="text-sm line-clamp-2 leading-[1.4]">
                  {item.label}
                </span>
                <div className="flex flex-row items-center gap-2 mt-1">
                  <span className="text-red-500 text-sm">
                    {item.discountPrice.toLocaleString("vi-VN")}đ
                  </span>
                  <span className="flex justify-center text-xs line-through text-gray-400">
                    {item.price.toLocaleString("vi-VN")}đ
                  </span>
                </div>

                <span className="text-xs text-green-500">
                  Giảm{" "}
                  {(item.price - item.discountPrice).toLocaleString("vi-VN")}đ
                </span>

                <div className="flex flex-row items-center">
                  <div className="mr-auto w-fit">
                    <Image
                      src={item.discountGif}
                      alt="Giảm giá"
                      width={50}
                      height={20}
                      className="object-cover w-full h-auto rounded-md"
                    />
                  </div>
                  <div className="ml-auto gap-1 mr-2 flex flex-row text-pink-500">
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
              </div>
            </Link>
          ))}
        </div>

        {/* Prev Button */}
        <div
          className="absolute top-[35%] flex items-center justify-center left-2 rounded-lg cursor-pointer bg-gray-400
            w-10 h-10 opacity-60 hover:opacity-100"
          onClick={() => handleButtonScroll("prev")}
        >
          <i className="uil uil-angle-left text-2xl text-white" />
        </div>

        {/* Next Button */}
        <div
          className="absolute top-[35%] flex items-center justify-center right-3 rounded-lg cursor-pointer bg-gray-400
            w-10 h-10 opacity-60 hover:opacity-100"
          onClick={() => handleButtonScroll("next")}
        >
          <i className="uil uil-angle-right text-2xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductRelateCarousel;
