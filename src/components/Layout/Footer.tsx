import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { logoImg } from '@utils'

const Footer = () => {
  return (
    <footer className='bg-[var(--container-color)] pt-5 border-t border-[var(--text-color)] rounded-t-3xl'>
      <div>
        <div className='container px-4 flex flex-col md:flex-row items-center justify-between'>
          {/* Logo */}
          <div className='flex flex-col w-72 justify-center items-center '>
              <Image
              src={logoImg}
              width={845}
              height={450}
              className="object-contain"
              />
              <span className='text-base text-gray-600 uppercase mt-5'>Create By Tad 2025</span>
          </div>

          {/* Social media icons */}
          <div className='shrink grow basis-auto flex flex-col items-center justify-center'>
              <span className='text-3xl text-white'>Trần Ánh Dương</span>
              <div className='mt-3 flex gap-3'>
                  <Link target='_blank' href='tel:0378808834' className='text-xl p-1 rounded-lg text-[var(--title-color)] bg-[var(--gray-color)] hover:bg-[var(--text-color)]'>
                    <i className='uil uil-phone'/>
                  </Link>

                  <Link target='_blank' href='https://www.facebook.com/profile.php?id=100093223491246' className='text-xl p-1 rounded-lg text-[var(--title-color)] bg-[var(--gray-color)] hover:bg-[var(--text-color)]'>
                    <i className='uil uil-facebook-f'/>
                  </Link>

                  <Link target='_blank' href='https://www.instagram.com/dimlyyyyy/' className='text-xl p-1 rounded-lg text-[var(--title-color)] bg-[var(--gray-color)] hover:bg-[var(--text-color)]'>
                    <i className='uil uil-instagram'/>
                  </Link>

                  <Link target='_blank' href='#' className='text-xl p-1 rounded-lg text-[var(--title-color)] bg-[var(--gray-color)] hover:bg-[var(--text-color)]'>
                    <i className='uil uil-github'/>
                  </Link>
              </div>
          </div>

          {/* Address */}
          <div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
