"use client"

import React, { useRef, useState, useEffect } from "react";
import ItemCarousel from "./ItemCarousel/ItemCarousel";
import { carouselItems } from '@constants'; // Ensure this import is correct
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CarouselItem = () => {
  gsap.registerPlugin(ScrollTrigger);

  const carouselContainerRef = useRef([]);
  const [scrollPosition, setScrollPosition] = useState(Array(carouselItems.length).fill(false)); // Initialize with false

  const handleScroll = (index) => {
    const scrollLeft = carouselContainerRef.current[index].scrollLeft;

    setScrollPosition((prev) => {
      const newPosition = [...prev];
      newPosition[index] = scrollLeft > 0; // true if scrolled, false if at the start
      return newPosition;
    });
  };

  useEffect(() => {
    carouselItems.forEach((_, i) => {
      const container = carouselContainerRef.current[i];
      if (container) {
        // Pass a function reference to the event listener
        container.addEventListener('scroll', () => handleScroll(i));
      }
    });

    return () => {
      carouselItems.forEach((_, i) => {
        const container = carouselContainerRef.current[i];
        if (container) {
          // Cleanup the event listener correctly
          container.removeEventListener('scroll', () => handleScroll(i));
        }
      });
    };
  }, []); // Empty dependency array if carouselItems is static

  const handleOnPrev = (index) => {
    if (carouselContainerRef.current[index]) {
      carouselContainerRef.current[index].scrollBy({
        left: -620, // Scroll left for previous
        behavior: "smooth",
      });
    }
  };

  const handleOnNext = (index) => {
    if (carouselContainerRef.current[index]) {
      carouselContainerRef.current[index].scrollBy({
        left: 620, // Scroll right for next
        behavior: "smooth",
      });
    }
  };

  useGSAP(() => {
    carouselContainerRef.current.forEach((carousel, index) => {
      if (carousel) {
        gsap.from(carousel, {
          scrollTrigger: {
            trigger: carousel,
            start: '20% bottom',
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: index * 0.2, 
        });
      }
    });
  });
  


  return (
    <section>
      {carouselItems.map((items, i) => (
        <div className="container px-4 mt-10 relative" key={i}>
          {/* Title */}
          <h1 className="text-[var(--title-color)] text-3xl text-left mb-5 p-3 pr-10 pl-5 inline-block bg-[var(--container-color)] rounded-3xl">
            {items.product}
          </h1>

          {/* Carousel Container */}
          <div
            className="w-full min-h-72 flex flex-row whitespace-nowrap overflow-hidden overflow-x-auto"
            ref={(el) => (carouselContainerRef.current[i] = el)}
          >
            {/* Carousel Items */}
            <div className="flex flex-row gap-1"> {/* Added gap for spacing between items */}
              {items.data.map((item, id) => (
                <ItemCarousel key={id} items={item} />
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-400 w-10 h-10"
            onClick={() => handleOnNext(i )}
          >
            <i className="uil uil-arrow-right text-base text-[var(--title-color)]"/>
          </button>

          {scrollPosition[i] && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-400 w-10 h-10"
              onClick={() => handleOnPrev(i)}
            >
              <i className="uil uil-arrow-left text-base text-[var(--title-color)]"/>
            </button>
          )}
        </div>
      ))}
    </section>
  );
};

export default CarouselItem;