"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cartItems } from "@constants";
const Cart = () => {
    const [itemsCart, setItemsCart] = useState(cartItems.map(item => ({...item})));

    const caculateTotalPrice = () => {
      return itemsCart.reduce((total,item) =>(
        total + item.price * item.quantity
      ) , 0)
    }

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

    const handleRemoveItem = (index: number) => {
      // Create a copy of items array and remove the item at the specified index
      const updatedItems = itemsCart.filter((_, i) => i !== index);
  
      // Update state
      setItemsCart(updatedItems);
    }
  

  return (
    <div className="container">
      <div className="w-full items-center justify-start">
        <div
          className="relative w-[42rem] max-w-[95%] shadow-xl py-[3.2rem] px-[2.4rem]
        mx-auto my-[1.6rem] rounded-xl bg-white"
        >
          {/* Header */}
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-center text-3xl uppercase font-semibold">
              Giỏ hàng
            </h1>

            <div className="bg-gray-200 w-full flex flex-row items-center justify-center p-2">
              {/* Cart */}
              <div className="text-green-500 md:w-36 flex flex-col items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Vòng tròn ngoài */}
                  <circle
                    cx="20"
                    cy="20"
                    r="19"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Túi mua sắm */}
                  <rect
                    x="12"
                    y="16"
                    width="16"
                    height="14"
                    rx="2"
                    fill="currentColor"
                  />

                  {/* Quai túi (hình vòng cung ngược) */}
                  <path
                    d="M16 16C16 14 17.5 12 20 12C22.5 12 24 14 24 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                <span>Giỏ hàng</span>
              </div>
              {/* Line */}
              <div className="w-16 border-t-2 border-gray-500 h-0"></div>

              {/* Input Information */}
              <div className="text-gray-500 md:w-36 flex flex-col items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />

                  <circle cx="20" cy="16" r="4" fill="currentColor" />
                  <path
                    d="M14 28C14 24 17 22 20 22C23 22 26 24 26 28"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />

                  <path
                    d="M26 23L28 25L23 30H21V28L26 23Z"
                    fill="currentColor"
                  />
                </svg>

                <span>Nhập thông tin</span>
              </div>

              {/* Line */}
              <div className="w-16 border-t-2 border-gray-500 h-0"></div>

              {/* Checkout */}
              <div className="text-gray-500 md:w-36 flex flex-col items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />

                  <rect
                    x="12"
                    y="14"
                    width="16"
                    height="12"
                    rx="2"
                    fill="currentColor"
                  />
                  <rect x="12" y="18" width="16" height="2" fill="white" />

                  <path
                    d="M18 24L20 26L24 22"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Nhập thông tin</span>
              </div>
            </div>
          </div>

          {/* Cart Items */}
          {itemsCart.length > 0 &&
            itemsCart.map((item, index) => (
              <div className="w-full flex flex-col gap-1 shadow-xl p-4 mt-2 rounded-lg">
                <div className="w-full flex flex-row gap-2">
                  <Link
                    href={`/products/${item.slug}`}
                    className="flex-none w-36"
                  >
                    <Image
                      src={item.img}
                      alt=""
                      width={400}
                      height={400}
                      className=""
                    />
                  </Link>

                  <Link
                    href={`/products/${item.slug}`}
                    className="flex flex-col flex-1 justify-start items-start my-3"
                  >
                    <h1 className="text-xl font-semibold line-clamp-1">
                      {item.name}
                    </h1>
                  </Link>

                  <div className="flex flex-col justify-start items-end my-3 gap-2">
                    <p className="text-lg text-pink-500 font-semibold">
                      {item.discountPrice.toLocaleString("vi-VN")}đ
                    </p>
                    <p className="text-sm line-through text-gray-500">
                      {item.price.toLocaleString("vi-VN")}đ
                    </p>

                    <div className="flex flex-row gap-3 mt-auto items-center justify-center">
                      <div
                      onClick={() => handleDecreaseQuantity(index)}
                      className="flex items-center cursor-pointer justify-center w-7 h-7 rounded-md bg-gray-300">
                        -
                      </div>

                      <span className="flex items-center justify-center w-4 h-6">{item.quantity}</span>

                      <div
                      onClick={() => handleIncreaseQuantity(index)}
                      className="flex items-center cursor-pointer justify-center w-7 h-7 rounded-md bg-gray-300">
                        +
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-row mt-2">
                  <span className="text-sm text-gray-400 mr-auto italic">
                    cam đoan luôn mang đến khách hàng chất lượng tốt nhất
                  </span>
                  <div
                  onClick={() => handleRemoveItem(index)}
                  className="ml-auto flex flex-row gap-2 text-gray-500 cursor-pointer hover:text-pink-500 duration-100">
                    <span>Xóa khỏi giỏ hàng</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                      <line x1="8" y1="8" x2="16" y2="16" />
                      <line x1="16" y1="8" x2="8" y2="16" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

          <div className="w-full flex flex-row bg-gray-300 p-2 rounded-md mt-5">
            <div className="mr-auto flex flex-row gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="10" cy="5" rx="6" ry="2" />
                <path d="M4 5v4c0 1.1 2.7 2 6 2s6-.9 6-2V5" />
                <path d="M4 9v4c0 1.1 2.7 2 6 2s6-.9 6-2V9" />
                <path d="M4 13v4c0 1.1 2.7 2 6 2s6-.9 6-2v-4" />

                <circle cx="18" cy="18" r="4" />
                <path d="M18 16v4" />
                <path d="M16.5 18h3" />
              </svg>

              <span className="uppercase text-2xl font-semibold">Tổng tiền hàng :</span>
            </div>

            <span className="ml-auto text-2xl font-bold text-pink-500">{caculateTotalPrice().toLocaleString("vi-VN")}đ</span>
          </div>

          <div className="w-full flex items-center justify-center bg-pink-500 mt-2 rounded-lg cursor-pointer">
            <span className="uppercase text-2xl py-2 text-white font-bold">Đặt hàng ngay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
