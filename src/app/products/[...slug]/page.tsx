import Link from 'next/link';
import React from 'react';

import { collectionsItems } from '../../../constants';
import Gallery from '../../../components/SingleProduct/Gallery';
import { singleProduct } from '../../../constants';
import ProductRelate from '../../../components/SingleProduct/ProductRelate';
import { promotionData } from '../../../constants';
import ProductDescription from '../../../components/SingleProduct/ProductDescription';
import ShopCarouselImgs from '../../../components/Home/shopCarouselImg/shopCarouselImgs';

const Products = () => {
  return (
    <div>
      {/* Single Product Header */}
      <div className="container bg-gray-100 h-10 rounded-2xl px-4 mt-2  flex flex-row items-center">
        <span className='ml-2 text-[var(--title-color)]'>
          <Link href="/">Trang chủ</Link>
        </span>
        {collectionsItems.map((items, index) => (
          <div key={index}>
            <span className='ml-2 text-[var(--title-color)]'>/ {items.label}</span>
            {items.data.map((item) => (
              <span key={item.id} className='ml-2 text-[var(--title-color)]'>
                <Link href={`/products/${item.id}`}>/ {item.name}</Link>
              </span>
            ))}
          </div>
        ))}
      </div>

      <Gallery product={singleProduct}/>

      <ProductRelate data={promotionData}/>

      <ProductDescription/>

      <ShopCarouselImgs/>
    </div>
  );
};

export default Products;