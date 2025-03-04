import React from 'react';
import Image from 'next/image';
import { shopImgs } from '@constants';

const ShopCarouselImgs = () => {
  return (
     <div className="w-full flex flex-row overflow-auto rounded-lg container">
              {shopImgs &&
                shopImgs.map((item, index) => (
                  <div
                    key={index}
                    className="md:w-1/5 w-2/5 shrink-0 hover:opacity-60 duration-300"
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={230}
                      height={230}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                ))}
            </div>
  )
}

export default ShopCarouselImgs
