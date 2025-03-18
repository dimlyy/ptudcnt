"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@constants";

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className="relative w-full flex flex-col justify-center items-center pb-4 rounded-xl border border-gray-300 gap-1">
      {navItems.map((item, index) => (
        <div key={index} className="w-full"
        onMouseEnter={()=> setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}>
          {/* Link chính */}
          <div 
            className="flex flex-row justify-start w-full items-center gap-4 px-1 py-[7px] cursor-pointer"
          >
            <div className="w-5 h-5">
              <Image
                src={item.img}
                alt=""
                width={20}
                height={20}
                className="w-full h-auto object-cover"
              />
            </div>
            <span className="text-md text-gray-500 flex-1">{item.label}</span>

            {/* Hiển thị mũi tên nếu có menu con */}
            {item.children && (
              <i className={`uil uil-angle-right text-gray-500`} />
            )}
          </div>

          {/* Dropdown Menu */}
          {item.children && hoveredIndex === index &&(
            <div className={`absolute z-50 lg:w-[980px] max-w-[980px] min-h-[522px] overflow-y-auto rounded-lg left-[99%]
            border border-gray-300 top-0 bg-[var(--background-color)] animate-fade-in fadein duration-300 p-4`}>
              <div className="w-full h-full flex flex-row">
                {item.children.map((child, childIndex) => (
                  <div className="w-1/4 flex flex-col gap-2">
                    <span className="text-lg text-black">{child.name}</span>
                    {child.data.map((data,index) => (
                      <Link 
                      key={index}
                      href={`/${data.slug}`} 
                      className="group"
                    >
                      <span className="text-gray-500 group-hover:underline group-hover:decoration-pink-500 group-hover:text-pink-500 duration-200">{child.name}</span>
                    </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Nav;
