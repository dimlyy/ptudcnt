import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import React from 'react';

const ItemCarousel = ({items}) => {
  return (
    <div className='flex flex-col w-60 h-70 mr-2'>
      <div className="w-full h-full bg-[var(--container-color)] rounded-2xl border border-[var(--border-color)]">
       <div className='flex flex-col items-center m-2'>
          <Link href="#">
              <Image
                width={600}
                height={600}
                src={items.img}
                alt="Carousel Categories"
                className='w-28 h-28 object-contain'
              />
          </Link>
            <div className='flex flex-col justify-start w-full h-full m-2 p-2'>
              <h3 className='text-xl text-[var(--title-color)] leading-8'>{items.label}</h3>
              <span className='text-base text-[var(--title-color-dark)] leading-8'>{items.price}</span>
              <Link href="#" className='flex flex-row items-center w-full h-full justify-center bg-[var(--btn-color)] rounded-2xl p-2 mt-3'>
                  <i className='uil uil-shopping-cart-alt text-[var(--title-color-dark)]'/>
                  <span className='text-[var(--title-color-dark)] ml-2'>Mua ngay</span>
              </Link>
            </div>
       </div>
      </div>
    </div>
  );
};

export default ItemCarousel;