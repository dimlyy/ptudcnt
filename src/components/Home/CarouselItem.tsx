"use client";
import React, { useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { carouselItems } from "../../constants";

type Direction = "prev" | "next";

const CarouselItem: React.FC = () => {
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDragging = useRef(false);
  const isMoving = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const activeIndex = useRef(0);

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const container = carouselRefs.current[index];
    if (!container) return;
    isDragging.current = true;
    isMoving.current = false;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.style.scrollBehavior = "auto";
    activeIndex.current = index;
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>, index: number) => {
    if (!isDragging.current || !carouselRefs.current[index]) return;
    e.preventDefault();
    isMoving.current = true;
    const container = carouselRefs.current[index]!;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = (e: ReactMouseEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const wasMoving = isMoving.current && isDragging.current;
    isDragging.current = false;
    isMoving.current = false;
    const container = carouselRefs.current[index];
    if (!container) return;

    const itemWidth = container.children[0].getBoundingClientRect().width + 8;
    const nearestIndex = Math.round(container.scrollLeft / itemWidth);
    const newScrollLeft = nearestIndex * itemWidth;

    container.style.scrollBehavior = "smooth";
    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    if (wasMoving) {
      container.dataset.preventClick = "true";
      setTimeout(() => {
        delete container.dataset.preventClick;
      }, 50);
    }
  };

  const handlePreventClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  const handleScroll = (direction: Direction, index: number) => {
    const container = carouselRefs.current[index];
    if (container) {
      const scrollAmount = container.children[0].clientWidth + 8;
      if (direction === "next") {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const cleanup = () => {
      isDragging.current = false;
    };
  
    if (typeof window !== "undefined") {
      document.addEventListener("mouseup", cleanup);
    }
  
    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("mouseup", cleanup);
      }
    };
  }, []);
  

  return (
    <div className="container bg-white rounded-lg mt-10">
      {carouselItems.map((items, i) => (
        <div className="px-4" key={i}>
          <h1 className="text-red-500 text-xl md:text-3xl text-left p-3 pr-10 pl-5 inline-block bg-[var(--container-color)] rounded-3xl uppercase">
            {items.product}
          </h1>

          <div className="w-full pl-3 mt-2 gap-2 flex flex-row flex-nowrap mb-3 overflow-x-auto">
            {items.dealImg?.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="flex-none basis-[85%] md:basis-[calc(50%-0.5rem)]"
              >
                <Image
                  src={item.img}
                  alt="Deal Image"
                  width={580}
                  height={210}
                  className="object-cover w-full h-auto rounded-lg border-gray-400 border"
                />
              </Link>
            ))}
          </div>

          <div className="w-full mx-2 relative">
            <div
              ref={(el) => {
                carouselRefs.current[i] = el;
              }}
              onMouseDown={(e) => handleMouseDown(e, i)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseUp={(e) => handleMouseUp(e, i)}
              onMouseLeave={(e) => handleMouseUp(e, i)}
              className="flex flex-row flex-nowrap gap-2 scroll-smooth scrollbar-hide overflow-x-auto pl-2"
            >
              {items.data.map((item, index) => (
                <Link
                  onClick={(e) => {
                    if (carouselRefs.current[i]?.dataset.preventClick === "true") {
                      e.preventDefault();
                      return;
                    }
                  }}
                  key={index}
                  href={item.slug ? `/products/${item.slug}` : "#"}
                  className="w-[46%] md:w-[calc(20%-0.4rem)] flex flex-col flex-none gap-1 rounded-lg my-3 p-2 bg-white shadow-xl hover:shadow-xl group"
                >
                  <div className="flex flex-row gap-1 pt-2 pl-2 bg-white z-10">
                    <span className="px-2 py-1 bg-[var(--btn-color)] text-[var(--title-color)] rounded-md text-xs">
                      {Math.round((1 - item.discountPrice / item.price) * 100)}%
                    </span>
                    {item.instatement && (
                      <span className="px-2 py-1 bg-gray-300 text-gray-500 rounded-md text-xs text-[0.5rem]">
                        Trả góp 0%
                      </span>
                    )}
                  </div>

                  <div className="flex w-fit relative">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={600}
                      height={600}
                      className="object-cover w-full h-auto group-hover:translate-y-[-10px] duration-300"
                    />
                    <Image
                      src={item.specialDealImg}
                      alt="Special Deals"
                      width={600}
                      height={200}
                      className="absolute bottom-0 object-cover w-full h-auto"
                    />
                  </div>

                  <div className="flex flex-col mt-3 gap-1">
                    <h3 className="text-sm line-clamp-2 leading-[1.4]">{item.label}</h3>
                    <div className="flex flex-row gap-2 items-center">
                      <span className="text-red-500">
                        {item.discountPrice.toLocaleString("vi-VN")}đ
                      </span>
                      <span className="line-through text-xs text-gray-400">
                        {item.price.toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    <span className="text-green-500 text-xs">
                      Giảm {(item.price - item.discountPrice).toLocaleString("vi-VN")}đ
                    </span>
                    <div className="flex flex-row">
                      <div className="mr-auto">
                        <Image
                          src={item.discountGif}
                          alt="Discount Gif"
                          width={50}
                          height={20}
                          className="object-cover w-full h-auto rounded-md"
                        />
                      </div>
                      <div className="ml-auto mr-2 flex flex-row items-center gap-1 text-pink-400 hover:text-red-500">
                        <span className="text-sm">Yêu thích</span>
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

            <button
              onClick={() => handleScroll("prev", i)}
              className="absolute hidden md:flex items-center justify-center top-1/3 left-0 w-9 h-9 rounded-xl bg-gray-500 opacity-60 hover:opacity-100 duration-300 cursor-pointer"
            >
              <i className="uil uil-angle-left text-white text-2xl" />
            </button>

            <button
              onClick={() => handleScroll("next", i)}
              className="absolute hidden md:flex items-center justify-center top-1/3 right-2 w-9 h-9 rounded-xl bg-gray-500 opacity-60 hover:opacity-100 duration-300 cursor-pointer"
            >
              <i className="uil uil-angle-right text-white text-2xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselItem;
