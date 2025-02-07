"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const ProductRelate = ({ data }) => {
  const [selectedOffer, setSelectedOffer] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOffer(event.target.value);
  };

  useEffect(() => {
    if (data.packages.main.offers) {
      setSelectedOffer(data.packages.main.offers[0].content);
    }
  }, []);

  return (
    <div className="flex md:flex-row flex-col container md:mt-8">
      <div className="md:w-1/3 w-full">
        {/* Special Offer */}
        {data.hasSpecialOffer && (
          <div className="flex flex-col gap-1 bg-gray-800 rounded-lg overflow-hidden">
            <div className="text-red-500 flex flex-row p-2 bg-pink-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v1h2a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3z" />
              </svg>
              Ưu đãi đặc biệt
            </div>
            {data.packages.main && (
              <div className="mx-2">
                <span className="text-red-500">{data.packages.main.title}</span>
                <div className="flex flex-col">
                  {data.packages.main.offers.map((item, index) => (
                    <label
                      key={index}
                      className="inline-flex items-center mt-2"
                    >
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-pink-600"
                        name="offer" // Same name for radio button grouping
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
            )}

            <div className="flex flex-col mx-2 pb-3">
              <span className="text-red-500">{data.packages.other.title}</span>
              {data.packages.other.bundleDeals.map((item, index) => (
                <div className="flex flex-row mt-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex flex-shrink-0 items-center justify-center">
                    <span className="text-black text-sm">{index + 1}</span>
                  </div>
                  <div className="mx-4">
                    <span className="text-[var(--text-color)]">
                      <strong>{item.title}</strong>
                    </span>
                    {item.items.map((item, index) => (
                      <div>
                        <span className="text-[var(--text-color)]">
                          - {item.content}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* bundleDeals */}
        <div className="flex flex-col rounded-lg overflow-hidden bg-gray-800 mt-3">
          <div className="flex flex-row mx-2 text-[var(--title-color)] py-3">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v1h2a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3z" />
            </svg>
            <span>{data.mainPromotion.title}</span>
          </div>
          <div className="mx-2">
            {data.mainPromotion.content.map((item, index) => (
              <div className="flex flex-row mt-2 gap-2">
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

      <div className="md:w-2/3 w-full"></div>
    </div>
  );
};

export default ProductRelate;
