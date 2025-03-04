"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { customerVoting, productDescription } from "@constants";
import classNames from "classnames";

const ProductDescription = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedShortDescription, setExpandedShortDescription] =
    useState(false);
  const contentRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const MAX_HEIGHT = 500; // Minimum height before showing "Read more"

  const onExpandButton = () => {
    setExpanded(true);
    setShowButton(false);
  };

  const onExpandShortDescription = () => {
    setExpandedShortDescription(true);
  };

  const onCloseShortDescription = () => {
    setExpandedShortDescription(false);
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setShowButton(contentHeight > MAX_HEIGHT);
    }
  }, []);

  return (
    <div className="container my-5 gap-2 flex md:flex-row flex-col">
      {/* Description */}
      <div className="md:w-3/5 w-full bg-white p-3 rounded-2xl border border-gray-200">
        <div className="relative">
          <h1 className="text-3xl text-black text-center my-2">
            Đặc điểm nổi bật
          </h1>
          {productDescription && (
            <div
              ref={contentRef}
              className={classNames(
                "overflow-hidden mt-2 transition-all duration-300",
                {
                  "max-h-full": expanded,
                  "max-h-[630px]": !expanded,
                }
              )}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: productDescription.description.content,
                }}
              />
            </div>
          )}
          {showButton && (
            <>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-white p-2">
                <div
                  className="border border-pink-500 p-2 rounded-lg text-pink-500 cursor-pointer
                flex flex-row items-center justify-center gap-1 hover:bg-pink-500 hover:text-white duration-200"
                  onClick={onExpandButton}
                >
                  <span className="">Xem thêm</span>
                  <i className="uil uil-arrow-right text-blue text-xl"></i>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Voting from customer */}
        <div className="border-t border-t-gray-200 p-2 flex flex-col gap-1 mt-3">
          {customerVoting &&
            customerVoting.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg m-2 flex flex-col p-3 pb-5"
              >
                <div className="flex flex-row gap-1 items-center">
                  <span className="text-sm font-bold">{item.name}</span>
                  {item.buying && (
                    <span className="text-green-600 text-xs">
                      <i className="uil uil-check-circle"></i>
                      Đã mua hàng
                    </span>
                  )}
                  <span className="text-xs text-gray-500">
                    {item.dateBuying}
                  </span>
                </div>

                <div className="w-full">
                  <span className="text-sm">{item.comment}</span>
                </div>
              </div>
            ))}

          <div className="bg-pink-500 flex justify-center cursor-pointer items-center rounded-lg m-2">
            <span className="uppercase py-2 flex text-xl text-white text-center">
              Đánh giá ngay
            </span>
          </div>
        </div>
      </div>

      {/* Short Description */}
      <div className="md:w-2/5 w-full bg-white border border-gray-200 rounded-2xl">
        <div className="flex flex-col p-2 relative max-h-[700px] overflow-hidden">
          <h1 className="text-center bold text-3xl my-2 text-black ">
            Thông số kỹ thuật
          </h1>
          {productDescription.shortDescription &&
            productDescription.shortDescription.content.map((item, index) => (
              <div key={index} className="flex flex-col w-full p-2">
                <div className="w-full flex bg-gray-200 rounded-lg">
                  <span className="p-2 text-black font-semibold">
                    {item.label}
                  </span>
                </div>
                <ul className="flex flex-col">
                  {item.data.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center justify-start border-b border-b-gray-200 last:border-b-0"
                    >
                      <span className="flex w-[55%] shrink-0 font-semibold p-2">
                        {item.name}
                      </span>
                      <span className="flex flex-row flex-grow">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-2 bg-white">
            <div
              className="border bg-white border-pink-500 p-2 rounded-lg text-pink-500 cursor-pointer
              flex flex-row items-center justify-center gap-1 hover:bg-pink-500 hover:text-white duration-200"
              onClick={onExpandShortDescription}
            >
              <span className="">Xem thêm</span>
              <i className="uil uil-arrow-right text-blue text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/*Full content short description  */}
      {expandedShortDescription && (
        <div
          className="fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black cursor-pointer bg-opacity-50 animate-fade-in"
          onClick={onCloseShortDescription}
        >
          <div className="flex flex-col w-[500px] max-w-[95%] max-h-[90vh] mt-5 border-lg bg-white cursor-default rounded-lg animate-fade-in overflow-hidden">
            <div className="w-full bg-pink-500 flex flex-row items-center">
              <span className="text-xl text-white flex font-semibold p-2">
                Thông số kĩ thuật
              </span>
              <div className="ml-auto mr-3 cursor-pointer rounded-md overflow-hidden">
                <svg
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
            <div className="overflow-y-auto max-h-[calc(-10.5rem + 90vh)] p-1">
              {productDescription.shortDescription &&
                productDescription.shortDescription.content.map(
                  (item, index) => (
                    <div key={index} className="flex flex-col w-full p-2">
                      <div className="w-full flex bg-gray-200 rounded-lg">
                        <span className="p-2 text-black font-semibold">
                          {item.label}
                        </span>
                      </div>
                      <ul className="flex flex-col">
                        {item.data.map((item, index) => (
                          <li
                            key={index}
                            className="flex flex-row items-center justify-start border-b border-b-gray-200 last:border-b-0"
                          >
                            <span className="flex w-[55%] shrink-0 font-semibold p-2">
                              {item.name}
                            </span>
                            <span className="flex flex-row flex-grow">
                              {item.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
            </div>
            <div className="flex items-center justify-center rounded-lg bg-pink-500 m-2">
              <span className="flex p-1 text-xl text-white">Đóng</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
