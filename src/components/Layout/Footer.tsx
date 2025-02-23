import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerSocials } from "@constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 gap-5">
      <div className="flex md:flex-row flex-col container lg:px-2 pt-5">
        {/* Rows 1 */}
        <div className="lg:w-1/4 md:w-1/2 w-full gap-3">
          <div className="flex flex-col w-full shrink-0">
            <span className="uppercase text-xl">Thông tin liên hệ</span>
            <div className="w-1/2 border-b-2 border-pink-500"></div>

            {/* Phone  */}
            <div className="w-full flex flex-col mt-2">
              <span className="font-bold text-sm">
                Mua nhanh online:{" "}
                <Link href="tel:" className="text-blue-500">
                  037.88088.34
                </Link>
              </span>
            </div>
            <div className="w-full flex flex-col mt-2">
              <span className="font-bold text-sm">
                Mua nhanh online:{" "}
                <Link href="tel" className="text-blue-500">
                  037.88088.34
                </Link>
              </span>
            </div>
            <div className="w-full flex flex-col mt-2">
              <span className="font-bold text-sm">
                Góp ý/Phản ánh:{" "}
                <Link href="tel" className="text-blue-500">
                  037.88088.34
                </Link>
              </span>
            </div>
            <div className="w-full flex flex-col mt-2">
              <span className="font-bold text-sm">
                Hỗ trợ khách hàng:{" "}
                <Link href="#" className="text-blue-500 text-xs">
                  dimlytad@gmail.com
                </Link>
              </span>
            </div>

            <span className="uppercase text-xl mt-5">showroom store</span>
            <div className="w-1/2 border-b-2 border-pink-500"></div>

            {/* Working Time */}
            <div className="flex flex-col gap-1 mt-3">
              <span className="text-xs">Giờ hoạt động 8am - 8pm</span>
              <span className="text-xs text-gray-500">Gò Vấp</span>
              <span className="text-xs text-gray-500">Bình Thạnh</span>
              <span className="text-xs text-gray-500">Thủ Đức</span>
            </div>
          </div>
        </div>

        {/*Rows 2 */}
        <div className="lg:w-1/4 md:w-1/2 w-full shrink-0">
          <span className="uppercase text-xl mt-5">thông tin & chính sách</span>
          <div className="w-1/2 border-b-2 border-pink-500"></div>

          <div className="flex flex-col gap-1 mt-3">
            <Link href="#" className="text-xs text-gray-500">
              Ưu đãi Giá Kho Member
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Hướng dẫn mua hàng Online
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Hướng dẫn thanh toán
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Hướng dẫn trả góp
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Hướng dẫn sử dụng Voucher
            </Link>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <Link href="#" className="text-xs text-gray-500">
              Chính sách giao nhận - kiểm hàng
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Chính sách đổi trả
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Chính sách bảo mật thông tin
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Chính sách bảo hành
            </Link>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <Link href="#" className="text-xs text-gray-500">
              Dịch vụ sửa chữa
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Quy định sao lưu dữ liệu
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Câu hỏi thường gặp
            </Link>
          </div>
        </div>

        {/*Rows 3 */}
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <span className="uppercase text-xl mt-5">
            Dịch vụ & thông tin khác
          </span>
          <div className="w-1/2 border-b-2 border-pink-500"></div>

          <div className="flex flex-col gap-1 mt-3 mb-5">
            <Link href="#" className="text-xs text-gray-500">
              Khách hàng doanh nghiệp (B2B)
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Tuyển dụng
            </Link>
            <Link href="#" className="text-xs text-gray-500">
              Điều khoản sử dụng
            </Link>
          </div>

          <span className="uppercase text-xl">Dịch vụ & thông tin khác</span>
          <div className="w-1/2 border-b-2 border-pink-500"></div>

          <div className="pr-3">
            <Image
              src="/assets/images/footer-shop-advertise.jpg"
              alt="footer advertisement"
              width={240}
              height={47}
              className="object-cover w-full h-auto rounded-lg mt-4"
            />
          </div>
        </div>

        {/*Rows 4*/}
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <span className="uppercase text-xl">kết nối với chúng tôi</span>
          <div className="w-1/2 border-b-2 border-pink-500"></div>

          <div className="flex flex-row flex-wrap w-full">
            {footerSocials &&
              footerSocials.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={item.link}
                  className="flex items-center justify-center w-1/5 shrink-0"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className="object-cover w-full h-auto"
                  />
                </Link>
              ))}
          </div>

          <span className="uppercase text-xl">Phương thức thanh toán</span>
          <div className="w-1/2 border-b-2 border-pink-500"></div>

          <span className="text-sm text-gray-40 mt-2">Updating .......</span>
        </div>
      </div>

      <div className="w-full bg-gray-200 mt-3">
        <div className="container px-2 py-5 text-sm text-gray-500">
          © Công ty TNHH Giá Kho Group | Giấy CN ĐKDN số: 0316696591 do Sở Kế
          hoạch và Đầu tư TP. HCM cấp ngày 27/01/2021, đăng ký thay đổi lần thứ
          2, ngày 03/04/2023 - 0939 557 139 (Khối văn phòng) Địa chỉ trụ sở
          chính: 47/2/16C Bùi Đình Túy, Phường 14, Quận Bình Thạnh, Thành phố Hồ
          Chí Minh | Email hỗ trợ: hotro@giakho.vn | Gọi mua hàng: 1900 8922
          Chịu trách nhiệm quản lý nội dung: Vũ Việt Tuấn Anh | Email góp ý:
          ceo@giakho.vn
        </div>
      </div>
    </footer>
  );
};

export default Footer;
