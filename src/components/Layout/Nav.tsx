"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import "../../styles/nav.scss";
import { navItems } from "../../constants";

// Type cho item con trong dropdown
type ChildData = {
  name: string;
  data: {
    name: string;
    slug: string;
  }[];
};

// Type cho nav item chính
type NavItem = {
  label: string;
  img: string;
  children?: ChildData[];
};

const Nav: React.FC = () => {
  const navbar = useRef<HTMLDivElement | null>(null);
  const [isNavbarHover, setIsNavbarHover] = useState(false);
  const [activeNavbarBackground, setActiveNavbarBackground] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isDropdown = true;

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsNavbarHover(true);
    }, 400);

    setActiveNavbarBackground(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsNavbarHover(false);
      setActiveNavbarBackground(false);
    }, 100);
    setTimeoutId(id);
  };

  return (
    <div>
      {activeNavbarBackground && (
        <div className="transition-opacity duration-300 fixed inset-0 bg-black opacity-50 z-40 pointer-events-auto" />
      )}

      <div
        ref={navbar}
        className={classNames(
          "navbar hidden lg:flex",
          "left-0 top-0 fixed h-[100vh] w-[var(--sticky-nav)] z-50 bg-[var(--background-color)]",
          "flex-col border-gray-300 border-r-[1px]"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={classNames(
            "flex cursor-default h-11 mb-2",
            "items-center m-2 py-0 px-3 rounded-full",
            "bg-[var(--btn-color)] justify-start text-[var(--body-color)]"
          )}
        >
          <i className="uil uil-bars ml-[-2px] text-white flex items-center justify-center text-[var(--title-color)] text-2xl" />
          <span className="transition-opacity text-white nav_text hidden text-[var(--title-color)] whitespace-nowrap ml-3 text-lg">
            Tất cả sản phẩm
          </span>
        </div>

        <ul className="gap-2 flex flex-col">
          {navItems.map((item: NavItem, index: number) => (
            <li
              key={index}
              className={classNames("relative max-w-full w-full", {
                "li_dropdown-active": isNavbarHover,
              })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href="#"
                className="px-5 py-1 flex items-center min-w-1 min-h-11"
              >
                <Image
                  src={item.img}
                  alt="categories"
                  width={600}
                  height={600}
                  className="flex max-w-none max-h-none w-6 h-6 object-contain"
                />
                <span className="w-full justify-between hidden nav_text text-[var(--title-color)] whitespace-nowrap font-medium ml-3 text-base">
                  {item.label}
                  {item.children && (
                    <i className="uil uil-arrow-right ml-[-2px] flex items-center justify-center text-[var(--text-color)] text-2xl" />
                  )}
                </span>
              </Link>

              {/* Dropdown hiển thị nếu có children */}
              {item.children && hoveredIndex === index && (
                <div
                  className={`absolute z-50 w-fit min-h-[200px] overflow-y-auto rounded-lg left-[99%]
                    border border-gray-300 top-0 bg-[var(--background-color)] animate-fade-in fadein duration-300 p-4`}
                >
                  <div className="flex flex-row flex-wrap w-[640px]">
                    {item.children.map((child: ChildData, childIndex: number) => (
                      <div
                        key={childIndex}
                        className="w-1/4 flex flex-col gap-2 mb-2"
                      >
                        <span className="text-lg text-black">{child.name}</span>
                        {child.data.map((data, dataIndex: number) => (
                          <Link
                            key={dataIndex}
                            href={`/${data.slug}`}
                            className="group"
                          >
                            <span className="text-gray-500 group-hover:underline group-hover:decoration-pink-500 group-hover:text-pink-500 duration-200">
                              {data.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
