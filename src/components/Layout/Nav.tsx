"use client";

import React, { useState , useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import "@styles/nav.scss";

const Nav = () => {
  const navbar = useRef<HTMLDivElement | null>(null);
  const [isNavbarHover, setIsNavbarHover] = useState(false);
  const [activeNavbarBackground, setActiveNavbarBackground] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);


  // dropdown text (khi call API nhớ thay lại)
  const isDropdown = true;

  const handleMouseEnter = () => {
    setTimeout(() => {
        setIsNavbarHover(true);
    }, 400); 

    setActiveNavbarBackground(true);
    if (timeoutId) {
      clearTimeout(timeoutId); // Xóa timeout nếu có
    }
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsNavbarHover(false);
      setActiveNavbarBackground(false);
    }, 100); // Thay đổi thời gian nếu cần
    setTimeoutId(id);
  };

  return (
    <div>
      {activeNavbarBackground && (
        <div className="transition-opacity duration-300 fixed inset-0 bg-black opacity-50 z-40  pointer-events-auto" />
      )}

      <div
        ref={navbar}
        className={classNames(
          "navbar",
          "left-0 fixed h-[100vh] w-[var(--sticky-nav)] z-50 bg-[var(--container-color)]",
          "hidden md:flex flex-col border-[var(--border-color)] border-r-[1px]"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={classNames(
            "flex cursor-default h-11",
            "items-center m-2 py-0 px-3 rounded-full",
            "bg-[var(--btn-color)] justify-start text-[var(--body-color)]"
          )}
        >
          <i className="uil uil-bars ml-[-2px] flex items-center justify-center text-2xl" />
          <span className="transition-opacity nav_text hidden whitespace-nowrap ml-3 text-lg">
            Tất cả sản phẩm
          </span>
        </div>

        <ul>
          <li className={classNames("relative max-w-full w-full",
            {"li_dropdown-active" : isNavbarHover}
          )}>
            <Link
              href="#"
              className="px-5 py-1 flex items-center min-w-1 min-h-11"
            >
              <Image
                src="/assets/images/navCatergories.png"
                alt="categories"
                width={600}
                height={600}
                className="flex max-w-none max-h-none w-6 h-6 object-contain"
              />
              <span className="w-full justify-between hidden nav_text text-[var(--title-color)] whitespace-nowrap font-medium ml-3 text-base">
                Điện thoại
                {isDropdown &&
                  <i className="uil uil-arrow-right ml-[-2px] flex items-center justify-center text-[var(--text-color)] text-2xl" />}
              </span>

            </Link>
          {isDropdown &&
            <div
              className={classNames(
                "absolute m-0 top-0 right-[-220px] w-[var(--dropdown-width)] px-5 py-3",
                "bg-[var(--container-color)] navbar_li-dropdown shadow-lg",
              )}
            >
              <ul>
                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>
            
              </ul>
            </div>}
          </li>
          
          <li className={classNames("relative max-w-full w-full",
            {"li_dropdown-active" : isNavbarHover}
          )}>
            <Link
              href="#"
              className="px-5 py-1 flex items-center min-w-1 min-h-11"
            >
              <Image
                src="/assets/images/navCatergories.png"
                alt="categories"
                width={600}
                height={600}
                className="flex max-w-none max-h-none w-6 h-6 object-contain"
              />
              <span className="w-full justify-between hidden nav_text text-[var(--title-color)] whitespace-nowrap font-medium ml-3 text-base">
                Điện thoại
                {isDropdown &&
                  <i className="uil uil-arrow-right ml-[-2px] flex items-center justify-center text-[var(--text-color)] text-2xl" />}
              </span>

            </Link>
          {isDropdown &&
            <div
              className={classNames(
                "absolute m-0 top-0 right-[-220px] w-[var(--dropdown-width)] px-5 py-3",
                "bg-[var(--container-color)] navbar_li-dropdown shadow-lg",
              )}
            >
              <ul>
                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>
            
              </ul>
            </div>}
          </li>

          <li className={classNames("relative max-w-full w-full",
            {"li_dropdown-active" : isNavbarHover}
          )}>
            <Link
              href="#"
              className="px-5 py-1 flex items-center min-w-1 min-h-11"
            >
              <Image
                src="/assets/images/navCatergories.png"
                alt="categories"
                width={600}
                height={600}
                className="flex max-w-none max-h-none w-6 h-6 object-contain"
              />
              <span className="w-full justify-between hidden nav_text text-[var(--title-color)] whitespace-nowrap font-medium ml-3 text-base">
                Điện thoại
                {isDropdown &&
                  <i className="uil uil-arrow-right ml-[-2px] flex items-center justify-center text-[var(--text-color)] text-2xl" />}
              </span>

            </Link>
          {isDropdown &&
            <div
              className={classNames(
                "absolute m-0 top-0 right-[-220px] w-[var(--dropdown-width)] px-5 py-3",
                "bg-[var(--container-color)] navbar_li-dropdown shadow-lg",
              )}
            >
              <ul>
                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <span className="uppercase py-2 flex items-center whitespace-nowrap font-medium text-base text-[var(--title-color)] hover:text-cyan-600">
                      Iphone
                    </span>
                  </Link>
                </li>
            
              </ul>
            </div>}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Nav;