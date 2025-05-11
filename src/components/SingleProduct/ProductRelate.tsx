"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Guarantee,
  productsImgRelateDeals,
  productStatus,
  relateProducts,
} from "../../constants";
import ProductRelateCarousel from "./ProductRelateCarousel";
interface Offer {
  id: number;
  content: string;
}

interface BundleDealItem {
  content: string;
  discount?: string;
  firstDiscount?: string;
  secondDiscount?: string;
  hasDetail?: boolean;
}

interface BundleDeal {
  title: string;
  items: BundleDealItem[];
}

interface Packages {
  main: {
    title: string;
    offers: Offer[];
  };
  other: {
    title: string;
    bundleDeals: BundleDeal[];
  };
}

interface MainPromotion {
  title: string;
  content: string[];
}

interface PromotionData {
  hasSpecialOffer: boolean;
  packages: Packages;
  mainPromotion: MainPromotion;
}

interface ProductRelateProps {
  data: PromotionData;
}

const ProductRelate: React.FC<ProductRelateProps> = ({ data }) => {
  const [selectedOffer, setSelectedOffer] = useState<string>("");
  const [isHover, setIsHover] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOffer(event.target.value);
  };

  const handleNext = () => {
    setCurrentImg((prev) =>
      prev === productsImgRelateDeals.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImg((prev) =>
      prev === 0 ? productsImgRelateDeals.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      handleNext();
      setTouchStartX(null);
    } else if (swipeDistance < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };

  useEffect(() => {
    if (data.packages.main.offers) {
      setSelectedOffer(data.packages.main.offers[0].content);
    }
  }, [data.packages.main.offers]);

  useEffect(() => {
    if (!isHover) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [currentImg, isHover]);

  return (
    <div className="flex md:flex-row flex-col container md:mt-8">
      {/* Deals */}
      <div className="md:w-1/3 w-full mx-3 my-2 md:mx-0 md:my-0">
        {data.hasSpecialOffer && (
          <div className="md:min-h-[405px] flex flex-col gap-1 bg-pink-100 rounded-lg overflow-hidden">
            <div className="text-red-500 flex flex-row p-2 bg-pink-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v1h2a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3z" />
              </svg>
              <strong>Ưu đãi đặc biệt</strong>
            </div>
            <div className="mx-2">
              <span className="text-red-500">{data.packages.main.title}</span>
              <div className="flex flex-col">
                {data.packages.main.offers.map((item, index) => (
                  <label key={index} className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-pink-600"
                      name="offer"
                      value={item.content}
                      checked={selectedOffer === item.content}
                      onChange={handleRadioChange}
                    />
                    <span className="ml-2 text-[var(--text-color)]">
                      {item.content}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col mx-2 pb-3">
              <span className="text-red-500">{data.packages.other.title}</span>
              {data.packages.other.bundleDeals.map((bundle, index) => (
                <div className="flex flex-row mt-2" key={index}>
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex flex-shrink-0 items-center justify-center">
                    <span className="text-black text-sm">{index + 1}</span>
                  </div>
                  <div className="mx-4">
                    <span className="text-[var(--text-color)]">
                      <strong>{bundle.title}</strong>
                    </span>
                    {bundle.items.map((item, idx) => (
                      <div key={idx}>
                        <span className="text-[var(--text-color)]">- {item.content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Promotion */}
        <div className="md:min-h-[500px] flex flex-col rounded-lg overflow-hidden bg-pink-100 mt-3">
          <div className="flex flex-row mx-2 text-red-500 py-3">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v1h2a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3z" />
            </svg>
            <span>
              <strong>{data.mainPromotion.title}</strong>
            </span>
          </div>
          <div className="mx-2">
            {data.mainPromotion.content.map((item, index) => (
              <div className="flex flex-row mt-2 gap-2" key={index}>
                <div className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 bg-yellow-400">
                  <span className="text-black text-sm">{index + 1}</span>
                </div>
                <div>
                  <span className="text-[var(--text-color)] text-center">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guarantee and Relates */}
      <div className="md:w-2/3 w-full rounded-xl mx-3 bg-pink-100">
        <div className="flex flex-col m-3">
          <span className="text-red-500 uppercase">
            <strong>Thông tin sản phẩm</strong>
          </span>

          <div className="flex flex-row gap-2 text-red-500 mt-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Chế độ bảo hành</span>
          </div>

          {Guarantee.map((item, index) => (
            <div key={index} className="mx-4 my-1 text-[var(--text-color)]">- {item}</div>
          ))}

          <div className="flex flex-row text-red-500 mt-2 mb-2 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            <span>Tình trạng và quy cách sản phẩm</span>
          </div>

          {productStatus.map((item, index) => (
            <div key={index} className="mx-4 my-1 text-[var(--text-color)]">- {item}</div>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="flex flex-row w-full transition-transform duration-300"
            style={{ transform: `translateX(-${currentImg * 100}%)` }}
          >
            {productsImgRelateDeals.map((item, index) => (
              <Link key={index} href={item.link} className="w-full shrink-0">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={800}
                  height={180}
                  className="object-cover w-full rounded-lg"
                />
              </Link>
            ))}
          </div>

          {/* Prev Button */}
          <div
            className={`absolute hidden md:flex items-center justify-center w-10 h-10 bg-gray-500 top-[40%] left-2 rounded-lg border border-white duration-300 cursor-pointer ${
              isHover ? "opacity-50" : "opacity-0"
            }`}
            onClick={handlePrev}
          >
            <i className="uil uil-angle-left text-2xl text-white" />
          </div>

          {/* Next Button */}
          <div
            className={`absolute hidden md:flex items-center justify-center w-10 h-10 bg-gray-500 top-[40%] right-2 rounded-lg border border-white duration-300 cursor-pointer ${
              isHover ? "opacity-50" : "opacity-0"
            }`}
            onClick={handleNext}
          >
            <i className="uil uil-angle-right text-2xl text-white" />
          </div>
        </div>

        {relateProducts && <ProductRelateCarousel data={relateProducts} />}
      </div>
    </div>
  );
};

export default ProductRelate;
