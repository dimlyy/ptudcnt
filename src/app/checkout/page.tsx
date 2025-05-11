"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { cartItems } from "../../constants";

// Type cho cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Type cho tỉnh / thành phố
interface Province {
  code: number;
  name: string;
  districts: District[];
}

// Type cho quận / huyện
interface District {
  code: number;
  name: string;
  wards: Ward[];
}

// Type cho phường / xã
interface Ward {
  code: number;
  name: string;
}

const Checkout: React.FC = () => {
  const [itemsCart, setItemsCart] = useState<CartItem[]>(
    cartItems.map((item) => ({
      ...item,
      id: Number(item.id),
    }))
  );
  

  const [selectedGender, setSelectedGender] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [addressValue, setAddressValue] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedWard, setSelectedWard] = useState<string>("");

  const calculateTotalPrice = () => {
    return itemsCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    axios
      .get<Province[]>("https://provinces.open-api.vn/api/?depth=2")
      .then((res) => {
        setProvinces(res.data);
      });
  }, []);

  const handleProvinceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const provinceCode = e.target.value;
    setSelectedProvince(provinceCode);
    setSelectedDistrict("");
    setSelectedWard("");

    const selected = provinces.find((p) => p.code === Number(provinceCode));
    setDistricts(selected ? selected.districts : []);
    setWards([]);
  };

  const handleDistrictChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const districtCode = e.target.value;
    setSelectedDistrict(districtCode);
    setSelectedWard("");

    axios
      .get<District>(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
      .then((res) => {
        setWards(res.data.wards);
      });
  };

  return (
    <div className="container">
      <div className="w-full items-center justify-start">
        <div className="relative w-[42rem] max-w-[95%] shadow-xl py-[3.2rem] px-[2.4rem] mx-auto my-[1.6rem] rounded-xl bg-white">
          {/* Header */}
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-center text-3xl uppercase font-semibold">Giỏ hàng</h1>

            {/* Step Indicator */}
            <div className="bg-gray-200 w-full flex flex-row items-center justify-center p-2">
              {/* Cart */}
              <div className="text-green-500 md:w-36 flex flex-col items-center justify-center">
                {/* SVG icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" fill="none" />
                  <rect x="12" y="16" width="16" height="14" rx="2" fill="currentColor" />
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

              <div className="w-16 border-t-2 border-green-500 h-0"></div>

              {/* Info */}
              <div className="text-green-500 md:w-36 flex flex-col items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="16" r="4" fill="currentColor" />
                  <path d="M14 28C14 24 17 22 20 22C23 22 26 24 26 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M26 23L28 25L23 30H21V28L26 23Z" fill="currentColor" />
                </svg>
                <span>Nhập thông tin</span>
              </div>

              <div className="w-16 border-t-2 border-gray-500 h-0"></div>

              {/* Checkout */}
              <div className="text-gray-500 md:w-36 flex flex-col items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" fill="none" />
                  <rect x="12" y="14" width="16" height="12" rx="2" fill="currentColor" />
                  <rect x="12" y="18" width="16" height="2" fill="white" />
                  <path d="M18 24L20 26L24 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Thanh toán</span>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col w-full my-3 gap-3">
              <span className="text-lg font-semibold text-black">Nhập thông tin khách hàng</span>

              {/* Gender */}
              <div className="flex flex-row gap-5">
                <label className="flex flex-row gap-1 items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Anh"
                    checked={selectedGender === "Anh"}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-5 h-5 accent-pink-500"
                  />
                  Anh
                </label>
                <label className="flex flex-row gap-1 items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Chị"
                    checked={selectedGender === "Chị"}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-5 h-5 accent-pink-500"
                  />
                  Chị
                </label>
              </div>

              {/* Name, Phone, Email */}
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="Họ và Tên ( Bắt buộc )"
                />
                <input
                  type="tel"
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="Số điện thoại ( Bắt buộc )"
                />
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="Email (để nhận thông tin đơn hàng)"
                />
              </div>

              {/* Address */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg">
                <select
                  className="border p-2 rounded-md w-full"
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                >
                  <option value="">Chọn Tỉnh/Thành phố</option>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>
                      {province.name}
                    </option>
                  ))}
                </select>

                <select
                  className="border p-2 rounded-md w-full"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  disabled={!selectedProvince}
                >
                  <option value="">Chọn Quận/Huyện</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))}
                </select>

                <select
                  className="border p-2 rounded-md w-full"
                  value={selectedWard}
                  onChange={(e) => setSelectedWard(e.target.value)}
                  disabled={!selectedDistrict}
                >
                  <option value="">Chọn Phường/Xã</option>
                  {wards.map((ward) => (
                    <option key={ward.code} value={ward.code}>
                      {ward.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={addressValue}
                  onChange={(e) => setAddressValue(e.target.value)}
                  placeholder="Địa chỉ cụ thể..."
                  className="border p-2 rounded-md w-full"
                />
              </div>

              {/* Other Note */}
              <div className="flex flex-col p-2 bg-gray-100 rounded-lg">
                <span>Yêu cầu khác:</span>
                <textarea className="border p-2 rounded-md mt-2" />
              </div>
            </form>
          </div>

          {/* Total */}
          <div className="w-full flex flex-row bg-gray-300 p-2 rounded-md">
            <div className="mr-auto flex flex-row gap-1 items-center">
              <span className="uppercase text-2xl font-semibold">Tổng tiền hàng :</span>
            </div>
            <span className="ml-auto text-2xl font-bold text-pink-500">
              {calculateTotalPrice().toLocaleString("vi-VN")}đ
            </span>
          </div>

          {/* Order Button */}
          <div className="w-full flex items-center justify-center bg-pink-500 mt-2 rounded-lg cursor-pointer">
            <span className="uppercase text-2xl py-2 text-white font-bold">Đặt hàng ngay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
