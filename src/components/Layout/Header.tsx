"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import "../../styles/header.scss";
import ActiveCart from "./Header/ActiveCart";
import Nav from "./Nav";

const Header: React.FC = () => {
  const [onActiveCart, setOnActiveCart] = useState<boolean>(false);
  const [inputPlaceholder, setInputPlaceholder] = useState<string>("Tìm kiếm");
  const [onActiveNav, setOnActiveNav] = useState<boolean>(false);
  const liDropDown: boolean = true;

  // Chữ chạy trên search input
  const typeWriterEffect = (
    text: string,
    setPlaceholder: React.Dispatch<React.SetStateAction<string>>,
    delay = 150
  ): void => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setPlaceholder(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          typeWriterEffect(text, setPlaceholder, delay);
        }, 2000);
      }
    }, delay);
  };

  useEffect(() => {
    const text = "Tìm kiếm ở đây";
    typeWriterEffect(text, setInputPlaceholder);
  }, []);

  const handleCartToggle = (): void => {
    setOnActiveCart(true);
    setWishListOpen(false);
  };

  const handleCloseCart = (): void => {
    console.log("handleCloseCart");
    setOnActiveCart(false);
  };

  const [isWishListOpen, setWishListOpen] = useState<boolean>(false);

  return (
    <header>
      {/* Header row 1 */}
      <div className="bg-[var(--btn-color)] max-w-full">
        <div className="container h-20 px-4 flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ml-3">
            <Link href="/">
              <div className="relative w-[140px] h-[80px] flex items-center">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={850}
                  height={450}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative flex flex-row grow shrink basis-auto items-center border border-[var(--border-color)] rounded-3xl overflow-hidden max-h-[inherit] mx-10 bg-[var(--container-color)]">
            <div className="pd-4 flex w-full items-center h-11 overflow-hidden">
              <form className="flex flex-row relative w-full h-full items-center">
                <input
                  className="flex lg:min-w-[270px] min-w-40 h-full w-full text-[var(--text-color)] bg-transparent pl-3 pr-11 outline-none"
                  placeholder={inputPlaceholder}
                />
                <button
                  type="submit"
                  className="min-h-[unset] absolute right-1 w-[38px] h-[38px] bg-[var(--btn-color)] rounded-full flex items-center justify-center"
                >
                  <i className="uil uil-search-alt flex items-center justify-center text-2xl font-normal text-[var(--container-color)]" />
                </button>
              </form>
            </div>
          </div>

          {/* Info Contact */}
          <div className="lg:flex hidden flex-row m-h-[inherit] items-center justify-end mr-[-10px]">
            <div className="px-3 flex flex-row items-center">
              <i className="uil uil-envelope-download flex text-3xl mr-2 text-[var(--background-color)]" />
              <div className="flex flex-col">
                <span className="text-medium text-[var(--background-color)]">dimlytad@gmail.com</span>
                <span className="text-sm text-[var(--background-color)]">+0378808834</span>
              </div>
            </div>

            <div className="px-3 flex flex-row items-center">
              <i className="uil mt-1 uil-dribbble flex text-3xl mr-2 text-[var(--background-color)]" />
              <div className="flex flex-col">
                <span className="text-medium text-[var(--background-color)]">Toàn quốc</span>
                <span className="text-sm text-[var(--background-color)]">Miễn phí giao hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header row 2 */}
      <div className="hidden lg:flex bg-[#e6effd] w-full mx-auto h-14">
        <div className="container flex flex-row items-center px-4 h-full">
          <div className="relative flex flex-rows h-11 items-center justify-center rounded-full bg-[var(--background-color)]">
            <span className="flex items-center justify-center h-9 w-9 bg-[var(--btn-color)] rounded-full mx-2 pd-3">
              <i className="uil uil-mobile-android text-2xl text-[var(--container-color)]" />
            </span>
            <span className="flex text-base pr-3 font-light">Điện thoại chính hãng</span>

            {onActiveNav && (
              <div className="absolute top-[140%] w-[242px] z-50 animate-fade-in">
                <Nav />
              </div>
            )}
            {onActiveNav && (
              <div className="fixed bg-black opacity-50 top-0 right-0 left-0">
                <Nav />
              </div>
            )}
          </div>

          <div className="flex flex-row shrink grow basis-auto items-center h-full">
            <ul className="flex flex-row h-full items-center">
              <li className="flex text-[var(--title-color)] h-full ml-6 relative text-sm">
                <Link href="/catergories" className="flex h-full items-center">Sản phẩm</Link>
              </li>

              <li className="flex text-[var(--title-color)] h-full ml-6 relative text-sm">
                <Link href="/blogs" className="flex h-full items-center">Tin tức</Link>
              </li>

              <li className="flex text-[var(--title-color)] h-full ml-6 relative text-sm">
                <Link href="#" className="flex h-full items-center">Giới thiệu sản phẩm</Link>
              </li>

              <li className="flex text-[var(--title-color)] h-full ml-6 relative text-sm header_li-dropdown-active">
                <Link href="#" className="flex h-full items-center">
                  Sản phẩm nổi bật
                  {liDropDown && <span><i className="uil uil-angle-down ml-1" /></span>}
                </Link>
                {liDropDown && (
                  <div className="header_li-dropdown absolute z-50 left-[-10px] top-12 mt-2 w-[220px] min-h-[40px] rounded-xl bg-[var(--container-color)] shadow-lg px-5 py-3">
                    <ul>
                      <li><Link className="flex w-full h-full py-2" href="#">Sản phẩm 1</Link></li>
                      <li><Link className="flex w-full h-full py-2" href="#">Sản phẩm 2</Link></li>
                      <li><Link className="flex w-full h-full py-2" href="#">Sản phẩm 3</Link></li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="flex text-[var(--title-color)] h-full ml-6 relative text-sm">
                <Link href="#" className="flex h-full items-center">Liên hệ</Link>
              </li>
            </ul>
          </div>

          {/* User + Cart */}
          <div className="flex flex-row items-center h-full">
            <div className="flex user-btn relative mr-6 h-11 w-11 bg-[var(--background-color)] rounded-full">
              <button className="flex relative h-full w-full items-center justify-center">
                <i className="uil uil-user text-xl" />
              </button>
              <div className="user-dropdown absolute z-50 top-12 right-0 w-52 min-h-16 bg-[var(--container-color)] rounded-xl shadow-2xl">
                <ul className="flex flex-col my-2 mx-3">
                  <li className="my-1"><Link href="#"><span className="text-sm font-light text-[var(--text-color)]">Thông tin người dùng</span></Link></li>
                  <li className="my-1"><Link href="#"><span className="text-sm font-light text-[var(--text-color)]">Chính sách cá nhân</span></Link></li>
                  <li className="my-1"><Link href="#"><span className="text-sm font-light text-[var(--text-color)]">Đổi mật khẩu</span></Link></li>
                  <li className="my-1"><Link href="#"><span className="text-sm font-light text-[var(--text-color)]">Đăng xuất</span></Link></li>
                </ul>
              </div>
            </div>

            <div className="flex h-11 w-11 bg-[var(--btn-color)] rounded-full">
              <button onClick={handleCartToggle} className="flex relative h-full w-full items-center justify-center">
                <i className="uil uil-shopping-cart text-xl text-[var(--container-color)]" />
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[var(--btn-color)] border text-[var(--container-color)] border-slate-300 text-xs">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ActiveCart onActiveCart={onActiveCart} handleCloseCart={handleCloseCart} />
    </header>
  );
};

export default Header;
