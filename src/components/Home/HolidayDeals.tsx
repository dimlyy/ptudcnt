"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { holidayDealImgs, hotDealsItem } from "@constants";

const HolidayDeals = () => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.children[0].offsetWidth + 8; // Width của một item + gap

      if (direction === "next") {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          // Nếu đã cuộn hết → Quay về đầu
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        // Chỉ scroll về trước, không nhảy đến cuối nếu về đầu
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
          className="flex flex-row flex-nowrap overflow-x-auto scroll-smooth gap-2 scrollbar-hide"
        >
          {hotDealsItem.data.map((item, index) => (
            <Link
              href={item.slug ? `/products/${item.slug}` : "#"}
              key={index}
              className="w-[46%] md:w-[calc(20%-0.5rem)] p-2 flex flex-col gap-1 flex-shrink-0 bg-[var(--background-color)] rounded-md overflow-hidden"
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
                  className="object-cover w-full h-auto"
                />
                <Image
                  src="/assets/images/sunday_discount.png"
                  alt="Sunday discount"
                  width={600}
                  height={200}
                  className="absolute bottom-0 object-cover w-full h-auto"
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
