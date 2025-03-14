import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CatergoriesItemsData {
  slug: string;
  label: string;
  img: string;
  alt: string;
  instatement: boolean;
  discountPrice: number;
  price: number;
  discountGif: string;
}

interface CatergoriesItemsProps {
  data: CatergoriesItemsData[];
}

const CatergoriesItems: React.FC<CatergoriesItemsProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col mb-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 p-2 md:gap-2">
        {data.map((item, index) => (
          <Link
            key={index}
            href={`/products/${item.slug}`}
            className="flex flex-col gap-1 rounded-sm p-1 border border-gray-300
            hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="flex flex-row gap-1">
              <span className="px-2 py-1 bg-[var(--btn-color)] text-[var(--title-color)] rounded-md text-xs">
                {Math.round((1 - item.discountPrice / item.price) * 100)}%
              </span>
              {item.instatement && (
                <span className="px-2 py-1 bg-gray-300 text-gray-500 rounded-md text-xs text-[0.5rem]">
                  Trả góp 0%
                </span>
              )}
            </div>

            <div className="w-full relative">
              <Image
                src={item.img}
                alt={item.alt}
                width={600}
                height={600}
                className="object-cover w-full h-auto pointer-events-none"
              />
              <Image
                src="/assets/images/sunday_discount.png"
                alt="Sunday discount"
                width={600}
                height={200}
                className="absolute bottom-0 object-cover w-full h-auto pointer-events-none"
              />
            </div>

            <div className="mt-3">
              <span className="text-sm line-clamp-2 leading-[1.4]">
                {item.label}
              </span>
              <div className="flex flex-row items-center gap-2 mt-1">
                <span className="text-red-500">
                  {item.discountPrice.toLocaleString("vi-VN")}₫
                </span>
                <span className="text-gray-400 text-sm line-through">
                  {item.price.toLocaleString("vi-VN")}₫
                </span>
              </div>
            </div>

            <span className="text-green-500 text-xs">
              Giảm {(item.price - item.discountPrice).toLocaleString("vi-VN")}đ
            </span>

            <div className="flex flex-row mt-2">
              <div className="mr-auto w-fit">
                <Image
                  src={item.discountGif}
                  alt="Giảm giá"
                  width={50}
                  height={20}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="ml-auto mr-2 flex flex-row items-center text-pink-400 hover:text-red-500 gap-1">
                <span className="text-xs">Thêm vào giỏ hàng</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  className="w-4 h-4 transition-all duration-300 hover:fill-red-500 hover:stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.438 4.562a5.5 5.5 0 0 0-7.78 0L12 6.22l-1.658-1.658a5.5 5.5 0 0 0-7.78 7.78L12 21.001l9.438-9.438a5.5 5.5 0 0 0 0-7.78Z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full flex items-center justify-center my-3">
        <div className="flex items-center justify-center bg-pink-500 hover:bg-pink-400 text-white rounded-md cursor-pointer">
          <span className="py-2 px-3">Xem thêm 26 sản phẩm</span>
        </div>
      </div>
    </div>
  );
};

export default CatergoriesItems;
