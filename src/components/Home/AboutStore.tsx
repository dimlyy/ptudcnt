"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { homePageFooterOffers, shopImgs } from "@constants";
const AboutStore = () => {
  const carouselRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const isDragging = useRef(false);
  const isMoving = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const activeIndex = useRef(0);

  const handleMouseDown = (e: MouseEvent, index: number) => {
    e.preventDefault();
    const container = carouselRefs.current[index];
    if (!container) return;
    isDragging.current = true;
    isMoving.current = false;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.style.scrollBehavior = "auto";
    activeIndex.current = index;
  }

  const handleMouseMove = (e: MouseEvent, index: number) => {
    e.preventDefault();
    const container = carouselRefs.current[index];
    if (!isDragging.current || !container) return;
    isMoving.current = true;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  }

  const handleMouseUp = (e: MouseEvent, index: number) => {
    const wasMoving = isDragging.current && isMoving.current;
    const container = carouselRefs.current[index];

    if(!container) return;
    isDragging.current = false;
    isMoving.current = false;


    if(wasMoving){
        container.dataset.preventClick = "true";

        setTimeout(() => {
            delete container.dataset.preventClick; 
        }, 50)
    }

    snapToClosest(index);
  }

// 


//   Snap To Closets Item
  const snapToClosest = (index:number) => {
    const container = carouselRefs.current[index];
    if (!container) return;
    const itemWidth = container.children[0].getBoundingClientRect().width + 8;
    const nearestIndex = Math.round(container.scrollLeft / itemWidth);
    const newScrollLeft = nearestIndex * itemWidth;

    // Scroll To Nearest Item
    container.scrollTo({left: newScrollLeft, behavior: "smooth"});
  }
 
  useEffect(() => {
    if (homePageFooterOffers) {
        setScrollPositions(new Array(homePageFooterOffers.length).fill(0));
    }
}, [homePageFooterOffers]);

  const handleScroll = (direction: string, index: number) => {
    const container = carouselRefs.current[index];

    if (container) {
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
    <section className="container mb-10">
      <div className="w-full flex flex-col px-4 gap-20">
        <div className="flex flex-col overflow-hidden">
          {homePageFooterOffers &&
            homePageFooterOffers.map((item, index) => (
              <div key={index} className="flex flex-col mt-10 relative">
                <h1 className="uppercase text-red-500 text-3xl text-left pl-5">
                  {item.label}
                </h1>
                <div
                  className="w-full flex flex-row gap-2 mt-4 overflow-x-auto"
                  ref={(el) => (carouselRefs.current[index] = el)}
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseUp={(e) => handleMouseUp(e, index)}
                  onMouseLeave={(e) => handleMouseUp(e, index)}
                  onTouchEnd={() => snapToClosest(index)}
                >
                  {item.data.map((data, i) => (
                    <Link
                      href={data.slug ? `/blog/${data.slug}` : "#"}
                      key={i}
                      className="md:w-[calc(25%-0.4rem)] w-2/3 shrink-0"
                      onClick={(e) => {
                        if(carouselRefs.current[index]?.dataset.preventClick === "true"){
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

                {/* Prev Button - Chỉ hiển thị khi có thể di chuyển về trước */}
                <div
                  onClick={() => handleScroll("prev", index)}
                  className="hidden md:flex items-center justify-center absolute top-2/4 left-[2px] w-9 h-9
                                bg-gray-400 duration-300 rounded-lg opacity-50 hover:opacity-100 cursor-pointer"
                >
                  <i className="uil uil-angle-left text-2xl text-white " />
                </div>

                {/* Next Button - Chỉ hiển thị khi có thể di chuyển về sau */}
                <div
                  onClick={() => handleScroll("next", index)}
                  className="hidden md:flex items-center justify-center absolute top-2/4 right-1 w-9 h-9
                                bg-gray-400 duration-300 rounded-lg opacity-50 hover:opacity-100 cursor-pointer"
                >
                  <i className="uil uil-angle-right text-2xl text-white " />
                </div>
              </div>
            ))}
        </div>

        {/* Shop IMG */}
        <div className="w-full flex flex-row overflow-auto rounded-lg">
          {shopImgs &&
            shopImgs.map((item, index) => (
              <div
                key={index}
                className="md:w-1/5 w-2/5 shrink-0 hover:opacity-60 duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={230}
                  height={230}
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStore;
