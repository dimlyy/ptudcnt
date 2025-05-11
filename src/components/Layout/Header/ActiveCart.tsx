import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cartItems } from "../../../constants";

interface CartItem {
  slug: string;
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  quantity: number;
  relateImg: string[];
  img: string;
  selected: boolean;
}

interface ActiveCartProps {
  onActiveCart: boolean; // true if the cart is open, false otherwise  //
  handleCloseCart: () => void;
}

const ActiveCart = ({ onActiveCart, handleCloseCart }: ActiveCartProps) => {

  const [itemsCart, setItemsCart] = useState(cartItems.map(item => ({...item})));

  const handleIncreaseQuantity = (index: number) => {
    // Create a copy items array
    const updateItem = [...itemsCart];

    // Increase quantity 
    updateItem[index] = {
      ...updateItem[index],
      quantity: updateItem[index].quantity + 1
    };

    setItemsCart(updateItem);
  }

  const handleDecreaseQuantity = (index: number) => {
    // Create a copy items array
    const updateItem = [...itemsCart];

   // Only decrease if quantity is greater than 1
   if (updateItem[index].quantity > 1 ){
    updateItem[index] = {
      ...updateItem[index],
      quantity: updateItem[index].quantity - 1
    }

    setItemsCart(updateItem);
   }
  }

  // Caclulate Sum Price
  const caculateTotalPrice = () => {
    return itemsCart.reduce((total,item) =>(
      total + item.price * item.quantity
    ) , 0)
  }

  // Remove Item From Cart
  const handleRemoveItem = (index: number) => {
    // Create a copy of items array and remove the item at the specified index
    const updatedItems = itemsCart.filter((_, i) => i !== index);

    // Update state
    setItemsCart(updatedItems);
  }


  return (
    <>
      {onActiveCart && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center
         bg-black bg-opacity-50 animate-fade-in z-50"
         onClick={handleCloseCart}
        >
          <div
            className="flex flex-col w-[550px] max-w-[95%] max-h-[90vh]  rounded-xl border-lg bg-[var(--container-color)]
           animate-fade-in overflow-hidden"
           onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Label and Close Button */}
            <div className="flex flex-row items-center justify-start w-full bg-pink-500">
              <div className="flex items-center justify-start h-14 w-fit text-white">
                <span className="text-2xl text-white flex font-semibold p-2 ml-2 uppercase">
                  Giỏ hàng
                </span>
                <svg
                  width="30"
                  height="30"
                  viewBox="-5 -5 110 110"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 30C10 25 14 21 18 21H82C86 21 90 25 90 30L95 92C95 96 91 100 87 100H13C9 100 5 96 5 92L10 30Z"
                    stroke="currentColor"
                    stroke-width="5"
                  />
                  <path
                    d="M30 30V15C30 7 37 0 50 0C63 0 70 7 70 15V30"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div className="ml-auto mr-3 cursor-pointer rounded-md overflow-hidden">
                <svg
                  onClick={handleCloseCart}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="30" fill="#FF0000" rx="2" />
                  <path
                    d="M7 7 L23 23 M23 7 L7 23"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Cart Items */}
            {itemsCart.length === 0 ? (
              <div className="m-1">
                <div className="my-5   flex flex-col items-center justify-center text-2xl  gap-2 w-full text-gray-400">
                  <span className="text-center">
                    Chưa có sản phẩm nào trong giỏ hàng cả
                  </span>
                  <div className="">
                    <Image
                      src="/assets/images/no-cart-item.jpg"
                      alt="No Cart Item"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-grow w-full flex flex-col gap-2 mt-2 pb-2 min-h-[300px] max-h-[calc(90vh-200px)] bg-[var(--container-color)] overflow-y-auto">
                {itemsCart.map((item, index) => (
                  <div className="flex flex-row  justify-between bg-white border border-gray-300 pt-3 shadow-2xl mx-2 rounded-lg z-50">
                    {/* Image */}
                    <Link
                      href={`/products/${item.slug}`}
                      className="w-32 h-32 shrink-0"
                    >
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-auto object-cover rounded-md"
                      />
                    </Link>

                    {/* Content */}
                    <div className="flex flex-col flex-grow gap-1 justify-start m-2">
                      <Link href={`/products/${item.slug}`}>
                        <span className="text-2xl font-semibold flex-nowrap line-clamp-1">
                          {item.name}
                        </span>
                      </Link>

                        <div className="w-1/2">
                          <div className="flex flex-row gap-2">
                            <span className="text-xl text-pink-500">
                              {item.discountPrice.toLocaleString("vi-VN")}đ
                            </span>
                            <span className="text-lg text-gray-400 line-through">
                              {item.price.toLocaleString("vi-VN")}đ
                            </span>
                          </div>

                          <div className="flex flex-row items-center justify-start border border-gray-300 w-fit rounded-md overflow-hidden mt-2">
                            <div className="bg-pink-500 text-white cursor-pointer hover:opacity-80"
                            onClick={() => handleDecreaseQuantity(index)}
                            >
                              <i className="uil uil-minus px-1 py-2" />
                            </div>

                            <span className="px-2 text-gray-500">
                              {item.quantity}
                            </span>

                            <div className="bg-pink-500 text-white cursor-pointer hover:opacity-80"
                            onClick={() => handleIncreaseQuantity(index)}>
                              <i className="uil uil-plus p-1" />
                            </div>
                          </div>
                        </div>
                    </div>

                    {/* Remove Item Button */}
                    <div className="text-pink-500 flex justify-center items-center p-4"
                    onClick={() => handleRemoveItem(index)}>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rounded-2xl overflow-hidden cursor-pointer hover:opacity-60"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          stroke="#ffffff"
                          stroke-width="2"
                          rx="4"
                        />
                        <path
                          d="M7 7L17 17"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17 7L7 17"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price Sum */}
            {cartItems.length === 0 ? (
              <div className="m-1 my-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center">
                    <span className="flex flex-nowrap text-2xl font-semibold ml-2 text-gray-500">
                      Mua ngay
                    </span>
                    <div className="h-8">
                      <Image
                        src="/assets/images/pointing-gif.gif"
                        alt="pointing gif"
                        width={300}
                        height={135}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row flex-1 gap-2 mr-2">
                    <Link
                      href="/"
                      className="flex-grow flex items-center justify-center rounded-lg cursor-pointer bg-orange-500 hover:bg-orange-600"
                    >
                      <span className="flex text-white py-2  md:text-2xl">
                        Cửa hàng
                      </span>
                    </Link>
                    <Link
                      href="/"
                      className="flex-grow flex items-center justify-center rounded-lg bg-red-500 hover:bg-red-600"
                    >
                      <span className="flex text-white py-2 md:text-2xl">
                        Sản phẩm
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center mb-3 gap-2 mx-3 font-semibold">
                <div className="w-full flex flex-row  text-pink-500 text-2xl">
                  <span className="mr-auto">Tổng cộng:</span>
                  <span className="ml-auto">
                    {caculateTotalPrice().toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <div className="flex flex-row w-full gap-2">
                  <div
                    className="flex-1 shrink-0 cursor-pointer flex items-center
                  justify-center rounded-lg bg-pink-500 hover:bg-pink-600 duration-100"
                  >
                    <span className="p-2 text-xl text-white">Giỏ hàng</span>
                  </div>
                  <div
                    className="flex-1 shrink-0 cursor-pointer flex items-center
                  justify-center rounded-lg bg-red-500 hover:bg-red-600 duration-100"
                  >
                    <span className="p-2 text-xl text-white">Thanh toán</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ActiveCart;
