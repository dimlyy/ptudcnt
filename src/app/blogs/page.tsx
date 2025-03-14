import React from "react";
import Image from "next/image";
import Link from "next/link";

import { blogPost,socialMediaBlogs } from "@constants";
const Blogs = () => {
  return (
    <div className="container px-4">
      <div className="flex mt-5">
        <span className="text-gray-800 text-lg md:text-2xl font-semibold uppercase">
          Bài viết nổi bật
        </span>
      </div>

      <div className="flex flex-row">
        <div className="w-2/3 flex flex-col">
          {blogPost &&
            blogPost.map((item,index) => (
              <div className="flex flex-col gap-3 my-4 rounded-lg border border-gray-300 p-5">
                <div className="flex flex-row ">

                  <div className="mr-auto flex flex-row items-center justify-center
                  gap-2">
                    <Image
                    src={item.avatar}
                    alt="Avatar User"
                    height="60"
                    width="60"
                    className="w-7 h-7 rounded-full"/>
    
                    <span className="text-sm">{item.user}</span>
                  </div>
    
                  <div className="ml-auto w-10 flex items-center">
                    <Image 
                    src="/assets/images/black-logo.jpg"
                    alt="Shop Logo"
                    width={500}
                    height={230}
                    className="w-full h-auto object-cover"
                    />
                  </div>

                </div>

                <Link href={`/blogs/${item.slug}`} className="flex flex-row">
                  <div className="w-2/3">
                    <div className="w-full">
                      <span className="text-black font-semibold text-xl line-clamp-1 mb-2">{item.title}</span>
                    </div>
    
                    <div className="w-full">
                      <span className="text-md text-gray-700 leading-7 line-clamp-2">{item.description}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 p-2">
                    <Image
                    alt="Blog Posts Img"
                    src={item.img}
                    width={300}
                    height={180}
                    className="w-full h-auto object-cover rounded-lg"/>
                  </div>
                </Link>


              </div>
            ))}
        </div>

            {/* Social Link */}
        <div className="hidden md:flex flex-col h-full flex-1 m-4 gap-4 sticky top-10 overflow-y-auto">
          {socialMediaBlogs.map((item, index) =>  (
            <Link
            target="_blank"
            href={item.link}
            className="flex w-full"
            >
              <Image
              src={item.img}
              alt="Social Media"
              width={380}
              height={170}
              className="w-full h-auto object-cover rounded-lg"/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
