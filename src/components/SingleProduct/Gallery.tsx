"use client";

import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

import { fatherProduct, shopHighlight } from "@constants";

interface GalleryProps {
  product: {
    label: string;
    short: string;
    fatherProduct: [];
    varients: [];
  };
}

const Gallery: React.FC<GalleryProps> = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const [current, setCurrent] = useState(0);

  const currency = "₫";

  const rating = 5;

  const currentProduct = product.varients[current];

  const handleOnPrev = () => {
    setCurrentImg((prev) =>
      prev === 0 ? product.varients.length - 1 : prev - 1
    );
  };

  const handleOnNext = () => {
    setCurrentImg((prev) =>
      prev === product.varients.length - 1 ? 0 : prev + 1
    );
  };

  return (
   <div className="flex md:flex-row flex-col container mt-5">
        {/* Img Gallery */}
      <div className="md:w-5/12 w-full relative flex flex-col items-center mb-5 px-10">
        <div className="w-11/12 max-w-full relative overflow-hidden">
          {/* Product Carousel */}
          <div className="w-full flex transition-transform duration-500 ease-in-out">
            <div className="w-full flex-shrink-0">
              <Image
                alt="Product Img"
                src={currentProduct.imgs[currentImg]}
                width={400}
                height={400}
                className="w-full rounded-xl"
              />
            </div>
          </div>
  
          {/* Button Prev and Next*/}
          <button
            onClick={handleOnNext}
            className="absolute
          right-2 top-1/2 w-8 h-8"
          >
            <i className="text-4xl uil uil-angle-right text-[var(--title-color)]" />
          </button>
  
          <button
            onClick={handleOnPrev}
            className="absolute left-2 top-1/2 w-8 h-8"
          >
            <i className="text-4xl uil uil-angle-left text-[var(--title-color)]" />
          </button>
        </div>
  
        <div className="h-20 flex flex-row mt-5">
          {currentProduct.imgs.map((item, index) => (
            <Image
              onClick={() => setCurrentImg(index)}
              alt="Product Img"
              src={item}
              width={400}
              height={400}
              className={classNames("w-20 mx-3 rounded-2xl p-2 cursor-pointer", {
                "border-white border": index === currentImg,
              })}
            />
          ))}
        </div>
  
        {/* Information  */}
        <div className="flex flex-row gap-4 mt-6">
          <Link href="#" className="flex flex-col w-14 text-center group">
            <div className="flex items-center justify-center w-full h-14 bg-[var(--container-color)] rounded-2xl">
              <i className="uil uil-award text-3xl text-[var(--title-color)]" />
            </div>
            <span className="text-xs text-[var(--title-color)] text-center whitespace-normal group-hover:text-[var(--text-color)]">
              Điểm nổi bật
            </span>
          </Link>
  
          <Link href="#" className="flex flex-col w-14 text-center group">
            <div className="flex items-center justify-center w-full h-14 bg-[var(--container-color)] rounded-2xl">
              <i className="uil uil-slack-alt text-3xl text-[var(--title-color)]" />
            </div>
            <span className="text-xs text-[var(--title-color)] text-center whitespace-normal group-hover:text-[var(--text-color)]">
              Điểm nổi bật
            </span>
          </Link>
  
          <Link href="#" className="flex flex-col w-14 text-center group">
            <div className="flex items-center justify-center w-full h-14 bg-[var(--container-color)] rounded-2xl">
              <i className="uil  uil-blogger-alt text-3xl text-[var(--title-color)]" />
            </div>
            <span className="text-xs text-[var(--title-color)] text-center whitespace-normal group-hover:text-[var(--text-color)]">
              Điểm nổi bật
            </span>
          </Link>
        </div>
  
      </div>

      {/* Product Price */}
      <div className="md:w-4/12 w-full relative flex flex-col items-start mt-5">
        {/* Label */}
        <div className="flex flex-row">
          <h1 className="text-3xl">{product.label}</h1>
          <div>
            <Image
              alt="Sale Gif"
              src="/assets/images/Sale_Gif.gif"
              width={1100}
              height={1100}
              className="ml-3 object-contain w-14 h-14"
            />
          </div>
        </div>
  
        {/* Rating Stars */}
        <div className="flex items-center my-2 ">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`star ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              size={20}
            />
          ))}
          <span className="text-gray-500 ml-3">5 đánh giá</span>
        </div>
  
        {/*Price  */}
        {currentProduct.discountPrice ? (
          <div className="mt-4 flex flex-row items-center">
            <span className="text-3xl font-bold text-[var(--btn-color)]">
              {currentProduct.discountPrice.toLocaleString("vi-VN")} {currency}
            </span>
            <span className="line-through ml-4 text-gray-500">
              {currentProduct.price.toLocaleString("vi-VN")} {currency}
            </span>
          </div>
        ) : (
          <div className="mt-4 flex flex-row items-center">
            <span className="text-3xl font-bold text-[var(--btn-color)]">
              {currentProduct.price.toLocaleString("vi-VN")} {currency}
            </span>
          </div>
        )}
  
        {/* Father Varients */}
        <div className="flex flex-row mt-5 h-11">
          {fatherProduct.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "mr-3 relative border rounded-md h-full flex items-center",
                item.capacity === product.capacity
                  ? "border-[var(--btn-color)]"
                  : "border-[var(--text-color)]"
              )}
            >
              <Link href={item.slug} className="">
                <span className="text-[var(--text-color)] px-5 py-5">
                  {item.capacity}
                </span>
              </Link>
              {item.capacity === product.capacity ? (
                <div className="absolute top-0 right-0 h-4 flex items-center bg-[var(--btn-color)]">
                  <span className="text-[var(--title-color)]">
                    <i className="uil uil-check"></i>
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
  
        {/* Product Varients */}
        <div className="flex flex-col mt-5">
          <span className="text-[var(--text-color)]">
            Chọn màu để xem giá và tình trạng hàng
          </span>
  
          <div className="flex flex-row mt-2 h-11">
            {product.varients.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  "mr-3 relative border rounded-md h-full flex items-center",
                  index === current
                    ? "border-[var(--btn-color)]"
                    : "border-[var(--text-color)]"
                )}
                onClick={() => {
                  setCurrent(index)
                  setCurrentImg(0)
                }}
              >
                <button>
                  <span className="text-[var(--text-color)] px-5 py-5">
                    {item.color}
                  </span>
                </button>
                {index === current ? (
                  <div className="absolute top-0 right-0 h-4 flex items-center bg-[var(--btn-color)]">
                    <span className="text-[var(--title-color)]">
                      <i className="uil uil-check"></i>
                    </span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex flex-col mt-6 w-full">
            <div className="flex flex-row">
              <div className="w-1/2 uppercase cursor-pointer bg-red-500 rounded-xl text-center mr-2 text-white py-3">
                Mua ngay
              </div>
              <div className="w-1/2 uppercase cursor-pointer bg-red-300 rounded-xl text-center text-white py-3 items-center">
                Thêm vào giỏ hàng
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <div className="w-full uppercase cursor-pointer bg-blue-400 rounded-xl text-center text-white py-3">
                Trả góp 0%
              </div>
            </div>
            <div>

            
            </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-row mt-5 gap-3">
            <a target="_blank" href="https://www.facebook.com/anh.duong.135488/" className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-500">
              <i className="uil uil-facebook-f text-2xl text-[var(--title-color)]"></i>
            </a>

            <a target="_blank" href="https://www.instagram.com/dimlyyyyy/" className="rounded-full flex items-center justify-center w-8 h-8 bg-violet-500">
              <i className="uil uil-instagram text-2xl text-[var(--title-color)]"></i>
            </a>

            <a target="_blank" href="tel:0378808834" className="rounded-full flex items-center justify-center w-8 h-8 bg-green-600">
              <i className="uil uil-phone text-2xl text-[var(--title-color)]"></i>
            </a>
        </div>
      </div>

      {/* Shop Highlight */}
      <div className="flex-grow mt-4 md:mt-0 mx-3 ml-7 flex flex-col items-center bg-gray-800 rounded-2xl">
        <a
        href="https://www.facebook.com/anh.duong.135488/" 
        target="_blank"
        className="py-2 px-4 bg-gray-900 mt-4 text-[var(--title-color)] rounded-2xl"
        >Liên hệ ngay</a>

        <ul className="mt-4 text-[var(--title-color)] mx-5 list-disc">
          {shopHighlight.map((item, index) => (
            <li key={index} className="mt-2">
              <span className="text-[var(--text-color)]">{item}</span>
            </li>
          ))}
        </ul>
       <div className="w-full">
            <Image
            alt="free-ship"
            width={400}
            height={400}
            src="/assets/images/free-ship.jpg"
            className="object-contain max-w-full rounded-2xl"
            />
       </div>
    </div>
   </div>
  );
};

export default Gallery;
