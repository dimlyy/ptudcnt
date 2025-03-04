import Link from "next/link";
import React from "react";
import Image from "next/image";

import { catergoriesSlug } from "@constants";
const Catergories = () => {
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
        <Link href="/" className="text-sm">Trang chủ</Link>
        {catergoriesSlug && (
            catergoriesSlug.navigatorts.map((item, index) => (
              <Link
                key={index}
                href={`/catergories/${item.slug}`}
                className="text-sm"
              >
              &#160;/&#160;{item.label}
              </Link>
            ))
  
        )}
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
    </div>
  );
};

export default Catergories;
