"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import { catergoriesSlug, filterItems } from "../../constants";
import CatergoriesItems from "../../components/Catergories/CatergoriesItems";
import ShopCarouselImgs from "../../components/Home/shopCarouselImg/shopCarouselImgs";

export async function generateStaticParams() {
  return catergoriesSlug.navigatorts.map(item => ({
    slug: item.slug,
  }));
}

// Type for Price Range
type PriceRange = 'all' | 'under10' | '10-16' | '16-22' | 'above22';

const Catergories = () => {
  const [selected, setSelected] = useState<PriceRange>("all");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPriceRange = () => {
    setIsOpen(!isOpen);
  };

  // Function to fetch products based on price range
  // const fetchProductsByPriceRange = async (range: PriceRange) => {
  //   try {
  //     // Close the dropdown after selection
  //     setIsOpen(false);

  //     // API endpoint - replace with your actual API endpoint
  //     const apiUrl = `/api/products?priceRange=${range}`;
      
  //     const response = await fetch(apiUrl, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch products');
  //     }

  //     const data = await response.json();
      
  //     // TODO: Handle the returned product data 
  //     // For example, you might want to update a state with the products
  //     console.log('Fetched products:', data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     // TODO: Add error handling (e.g., show error message to user)
  //   }
  // };

  // Handler for price range selection
  const handlePriceRangeSelect = (range: PriceRange) => {
    setSelected(range);
    // fetchProductsByPriceRange(range);
  };

  return (
    <div className="container px-4 flex flex-col">
      {/*Breadcumb navigation  */}
      <div className="flex flex-row items-center text-gray-400 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="w-4 h-4 mb-1"
        >
          <path d="M12 2.5L2 11.5c0 0 0.5 0.5 1.5 0.5h1v8c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-8h1.5c1 0 1.5-0.5 1.5-0.5L12 2.5z" />
          <path
            d="M12 17v-4c-1.7 0-3 1.3-3 3v3h6v-3c0-1.7-1.3-3-3-3z"
            fill="white"
          />
        </svg>
        <Link href="/" className="text-sm">
          Trang chủ
        </Link>
        {catergoriesSlug &&
          catergoriesSlug.navigatorts.map((item, index) => (
            <Link
              key={index}
              href={`/catergories/${item.slug}`}
              className="text-sm"
            >
              &#160;/&#160;{item.label}
            </Link>
          ))}
      </div>

      {/*Catergories Ads Imgs */}
      <div className="my-2">
        <div className="flex flex-row overflow-x-auto snap-x gap-2">
          {catergoriesSlug &&
            catergoriesSlug.catergoriesAds.map((item, index) => (
              <Link
                href={item.slug}
                key={index}
                className="flex-none basis-[100%] md:basis-[calc(50%-0.5rem)]"
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
      </div>

      {/* Series  */}
      <div className="bg-white rounded-lg">
        <div className="w-full py-2 flex flex-row flex-wrap gap-1 md:gap-4">
          {filterItems.series.map((item, index) => (
            <Link
              href={`/product/${item.value}`}
              key={index}
              className="flex flex-nowrap items-center justify-center md:min-w-24 border bg-pink-400 text-white
              border-gray-500 hover:scale-105 hover:bg-pink-500 rounded-md"
            >
              <span className="uppercase p-2 text-xs md:text-lg">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-lg my-2 flex flex-row">

        <div className="flex flex-row items-center justify-start gap-3 py-2">
          
          {/* Choose Price Range */}
          <div className="relative">
            <div
              className="flex flex-row items-center gap-1 py-2 px-3 justify-center
          text-white bg-pink-400 border border-gray-200 rounded-lg cursor-pointer
          hover:scale-105 hover:bg-pink-500"
              onClick={handleOpenPriceRange}
            >
              <span className="text-xs md:text-lg whitespace-nowrap">Chọn khoảng giá</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-500 h-5 w-5 md:h-8 md:w-8"
              >
                <circle cx="50" cy="50" r="40" fill="white" />
                <text
                  x="50%"
                  y="55%"
                  font-size="40"
                  font-weight="bold"
                  fill="currentColor"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  $
                </text>
              </svg>
            </div>

            {/*Choose Price Range Dropdown  */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 flex flex-wrap bg-white p-2 gap-2 rounded-lg shadow-lg z-10">
                <div className="flex space-x-4">
                  <label className="flex flex-nowrap text-black items-center space-x-1">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={selected === "all"}
                      onChange={() => handlePriceRangeSelect("all")}
                      className="text-blue-600"
                    />
                    <span className="whitespace-nowrap">Tất Cả</span>
                  </label>
                  <label className="flex flex-nowrap text-black items-center space-x-1">
                    <input
                      type="radio"
                      name="price"
                      value="under10"
                      checked={selected === "under10"}
                      onChange={() => handlePriceRangeSelect("under10")}
                      className="text-blue-600"
                    />
                    <span className="whitespace-nowrap">Dưới 10 Triệu</span>
                  </label>
                  <label className="flex flex-nowrap text-black items-center space-x-1">
                    <input
                      type="radio"
                      name="price"
                      value="10-16"
                      checked={selected === "10-16"}
                      onChange={() => handlePriceRangeSelect("10-16")}
                      className="text-blue-600"
                    />
                    <span className="whitespace-nowrap">Từ 10 - 16 Triệu</span>
                  </label>
                </div>
                <div className="flex space-x-4">
                  <label className="flex flex-nowrap text-black items-center space-x-1">
                    <input
                      type="radio"
                      name="price"
                      value="16-22"
                      checked={selected === "16-22"}
                      onChange={() => handlePriceRangeSelect("16-22")}
                      className="text-blue-600"
                    />
                    <span className="whitespace-nowrap">Từ 16 - 22 Triệu</span>
                  </label>
                  <label className="flex flex-nowrap text-black items-center space-x-1">
                    <input
                      type="radio"
                      name="price"
                      value="above22"
                      checked={selected === "above22"}
                      onChange={() => handlePriceRangeSelect("above22")}
                      className="text-blue-600"
                    />
                    <span className="whitespace-nowrap">Trên 22 Triệu</span>
                  </label>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="ml-auto mr-2 md:mr-0 flex flex-row items-center justify-center gap-1 md:gap-3 py-2">
          {/* Price Decrease */}
          <div
            className="flex flex-row items-center gap-1 py-2 px-3 justify-center
          text-white bg-pink-400 border border-gray-200 rounded-lg cursor-pointer
          hover:scale-105 hover:bg-pink-500"
          >
            <span className="text-xs md:text-lg whitespace-nowrap">Giá tăng dần</span>
            <i className="uil uil-arrow-growth text-xs" />
          </div>

          {/* Price Increase */}
          <div
            className="flex flex-row items-center gap-1 py-2 px-3 justify-center
          text-white bg-pink-400 border border-gray-200 rounded-lg cursor-pointer
          hover:scale-105 hover:bg-pink-500"
          >
            <span className="text-xs whitespace-nowrap md:text-lg">Giá giảm dần</span>
            <i className="uil uil-chart-down text-xs" />
          </div>
        </div>
      </div>

      {/* Catergories Items */}
      <CatergoriesItems data={filterItems.datas}/>

      <ShopCarouselImgs/>
    </div>
  );
};

export default Catergories;
