import React from "react";
import Link from "next/link";
import Image from "next/image";

import { catergoriesItem } from "@constants";

const Catergories = () => {
  return (
    <div className="container m-2">
      <ul className="flex flex-row flex-wrap w-full gap-2 bg-white rounded-lg">
        {catergoriesItem.map((item, index) => (
          <li key={index} className="w-[calc(20%-0.5rem)] md:w-[calc(10%-0.5rem)]">
            {" "}
            {/* Tránh bị tràn do gap */}
            <Link href={item.link} className="flex flex-col items-center group">
              <div className="max-w-full m-2 overflow-hidden rounded-lg">
                {/* Không fix cứng width/height */}
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={90}
                  height={90}
                  className="w-full h-auto object-cover transform transition duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <span className="text-center">{item.title}</span>
            </Link>

            <div className="absolute">

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catergories;
