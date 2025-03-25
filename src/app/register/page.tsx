import React from "react";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center flex-col min-h-[70vh] my-5">
        <div className="flex flex-row bg-white overflow-hidden md:w-[768px] max-w-full min-h-[480px] rounded-3xl shadow-xl">
          {/* Right content */}
          <div
            className="flex items-center text-center text-gray-600
        justify-center bg-[var(--container-color)] w-1/2 z-10 h-full transition-all"
          >
            <form className="flex flex-col w-full gap-5 p-5">
              <h1 className="text-3xl mb-2">Đăng ký</h1>

              <div
                className="relative overflow-hidden flex items-center justify-center
              mx-0 flex-row bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-2 border-none outline-none font-semibold text-md"
                  type="text"
                  placeholder="Họ tên"
                  required
                />
                <i className="uil uil-user mr-2 text-gray-400" />
              </div>

              <div
                className="relative overflow-hidden flex items-center justify-center
              mx-0 flex-row bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-2 border-none outline-none font-semibold text-md"
                  type="text"
                  placeholder="Số điện thoại"
                  required
                />
                <i className="uil uil-phone mr-2 text-gray-400" />
              </div>

              <div
                className="relative overflow-hidden flex items-center justify-center
              mx-0 flex-row bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-2 border-none outline-none font-semibold text-md"
                  type="text"
                  placeholder="Email ( Không bắt buộc )"
                  required
                />
                <i className="uil uil-box mr-2 text-gray-400" />
              </div>

              <div
                className="relative overflow-hidden flex items-center justify-center
              mx-0 bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-2 border-none outline-none font-semibold text-md"
                  type="password"
                  placeholder="Mật khẩu"
                  required
                />
                <i className="uil uil-lock mr-2 text-gray-400" />
              </div>

              <div
                className="relative overflow-hidden flex items-center justify-center
              mx-0 bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-2 border-none outline-none font-semibold text-md"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
                <i className="uil uil-lock mr-2 text-gray-400" />
              </div>

              <div>
                <input type="radio" />
                <span className="ml-1">
                  Tôi đồng ý với các 
                  <Link href="#" className="text-blue-400 italic"> điều khoản </Link> và{" "}
                  <Link href="#" className="text-blue-400 italic">chính sách bảo mật</Link>
                </span>
              </div>
              <button className="w-full h-12 bg-pink-500 text-white rounded-lg border-none cursor-pointer font-bold">
                Đăng ký ngay
              </button>

              <Link
                href="#"
                className="mx-5 border-b border-gray-300 flex flex-row gap-6 items-center"
              >
                <div className="w-8 pb-1">
                  <Image
                    src="/assets/images/Social-icon/google.jpg"
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <span>Đăng ký với Gmail</span>
              </Link>

              <Link
                href="#"
                className="mx-5 border-b border-gray-300 flex flex-row gap-6 items-center"
              >
                <div className="w-8 pb-1">
                  <Image
                    src="/assets/images/Social-icon/facebook.jpg"
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <span>Đăng ký với Facebook</span>
              </Link>
            </form>
          </div>

          {/* Left content */}
          <div
            className="flex flex-1 items-center text-center justify-end bg-pink-400
           transition-all"
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-full flex flex-col gap-4 items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-black">
                  Bạn đã có tài khoản ?
                </h1>
                <div className="px-7 w-full">
                  <Link
                    href="/login"
                    className="flex justify-center items-center bg-pink-300 w-full py-2 text-white rounded-xl"
                  >
                    Đăng nhập ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
