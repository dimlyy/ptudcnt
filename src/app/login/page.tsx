import React from "react";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col h-[70vh]">
        <div className="relative bg-white overflow-hidden md:w-[768px] max-w-full min-h-[480px] rounded-3xl shadow-xl">
          {/* Right content */}
          <div
            className="absolute flex items-center text-center text-gray-600
          justify-center bg-[var(--container-color)] top-0 right-0 w-1/2 z-10 h-full transition-all"
          >
            <form className="flex flex-col w-full gap-5 p-5">
              <h1 className="text-3xl mb-5">Đăng nhập</h1>
              <div
                className="relative overflow-hidden flex items-center justify-center
                mx-0 flex-row bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-4 border-none outline-none font-semibold text-lg"
                  type="text"
                  placeholder="Name"
                />
                <i className="uil uil-user mr-2 text-gray-400" />
              </div>

              <div
                className="relative overflow-hidden flex items-center justify-center
                mx-0 bg-gray-200 rounded-xl"
              >
                <input
                  className="w-full bg-gray-200 p-4 border-none outline-none font-semibold text-lg"
                  type="password"
                  placeholder="Password"
                />
                <i className="uil uil-lock mr-2 text-gray-400" />
              </div>
              <Link href="#">Quên mật khẩu ?</Link>
              <button className="w-full h-12 bg-pink-500 text-white rounded-lg border-none cursor-pointer font-bold">
                Đăng nhập
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
                <span>Đăng nhập với Gmail</span>
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
                <span>Đăng nhập với Facebook</span>
              </Link>
            </form>
          </div>

          {/* Left content */}
          <div
            className="absolute flex items-center text-center justify-start bg-pink-400
            w-full h-full transition-all left-0 top-0"
          >
            <div className="w-1/2">
              <div className="w-full flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black">Xin chào!!</h1>
                <p className="text-xl text-gray-700">Bạn chưa có tài khoản ?</p>
                <div className="mx-7">
                  <Link href="/register" className="flex items-center justify-center bg-pink-300 w-full py-2 text-white rounded-xl">
                    Đăng ký ngay
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

export default Login;
