"use client";

import React, { useRef, useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import ShopCarouselImgs from "./shopCarouselImg/shopCarouselImgs";
import { homePageFooterOffers, shopImgs } from "../../constants";

// Type cho từng carousel item
interface CarouselItem {
  slug?: string;
  img: string;
  alt: string;
}

// Type cho từng nhóm offer
interface OfferGroup {
  label: string;
  data: CarouselItem[];
}

const AboutStore: React.FC = () => {
  const carouselRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const isDragging = useRef(false);
  const isMoving = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const activeIndex = useRef(0);

  // Mouse down event
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
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

  // Mouse move event
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const container = carouselRefs.current[index];
    if (!isDragging.current || !container) return;
    isMoving.current = true;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  // Mouse up & leave event
  const handleMouseUp = (index: number) => {
    const wasMoving = isDragging.current && isMoving.current;
    const container = carouselRefs.current[index];
    if (!container) return;

    isDragging.current = false;
    isMoving.current = false;

    if (wasMoving) {
      container.dataset.preventClick = "true";
      setTimeout(() => {
        delete container.dataset.preventClick;
      }, 50);
    }

    snapToClosest(index);
  };

  // Snap to closest item
  const snapToClosest = (index: number) => {
    const container = carouselRefs.current[index];
    if (!container || container.children.length === 0) return;
    const itemWidth = container.children[0].getBoundingClientRect().width + 8;
    const nearestIndex = Math.round(container.scrollLeft / itemWidth);
    const newScrollLeft = nearestIndex * itemWidth;
    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  // Tạo scroll positions
  useEffect(() => {
    if (homePageFooterOffers) {
      setScrollPositions(new Array(homePageFooterOffers.length).fill(0));
    }
  }, []);

  // Handle scroll buttons
  const handleScroll = (direction: "prev" | "next", index: number) => {
    const container = carouselRefs.current[index];
    if (!container || container.children.length === 0) return;

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
  };

  return (
    <section className="container mb-10">
      <div className="w-full flex flex-col px-4 gap-20">
        <div className="flex flex-col overflow-hidden">
          {homePageFooterOffers &&
            homePageFooterOffers.map((item: OfferGroup, index: number) => (
              <div key={index} className="flex flex-col mt-10 relative">
                <h1 className="uppercase text-red-500 text-3xl text-left pl-5">{item.label}</h1>
                <div
                  className="w-full flex flex-row gap-2 mt-4 overflow-x-auto"
                  ref={(el) => {
                    carouselRefs.current[index] = el;
                  }}                  
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseUp={() => handleMouseUp(index)}
                  onMouseLeave={() => handleMouseUp(index)}
                  onTouchEnd={() => snapToClosest(index)}
                >
                  {item.data.map((data: CarouselItem, i: number) => (
                    <Link
                      href={data.slug ? `/blog/${data.slug}` : "#"}
                      key={i}
                      className="md:w-[calc(25%-0.4rem)] w-2/3 shrink-0"
                      onClick={(e) => {
                        if (carouselRefs.current[index]?.dataset.preventClick === "true") {
                          e.preventDefault();
                          return;
                        }
                      }}
                    >
                      <Image
                        src={data.img}
                        alt={data.alt}
                        width={280}
                        height={125}
                        className="object-cover w-full h-auto rounded-xl"
                      />
                    </Link>
                  ))}
                </div>

                {/* Prev button */}
                <div
                  onClick={() => handleScroll("prev", index)}
                  className="hidden md:flex items-center justify-center absolute top-2/4 left-[2px] w-9 h-9
                                bg-gray-400 duration-300 rounded-lg opacity-50 hover:opacity-100 cursor-pointer"
                >
                  <i className="uil uil-angle-left text-2xl text-white" />
                </div>

                {/* Next button */}
                <div
                  onClick={() => handleScroll("next", index)}
                  className="hidden md:flex items-center justify-center absolute top-2/4 right-1 w-9 h-9
                                bg-gray-400 duration-300 rounded-lg opacity-50 hover:opacity-100 cursor-pointer"
                >
                  <i className="uil uil-angle-right text-2xl text-white" />
                </div>
              </div>
            ))}
        </div>

        <ShopCarouselImgs />
      </div>
    </section>
  );
};

export default AboutStore;
