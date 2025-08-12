import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const LanguageCustome = [
  {
    id: 1,
    title: 'Đặt Ngay',
    href: '/about',
    image: 'https://idmassage.com/images/gif/united-kingdom-728_128.gif',
    alt: 'Tiếng Anh',
  },
  {
    id: 2,
    title: 'Chọn KTV',
    href: '/about',
    image: 'https://idmassage.com/images/gif/south-korea-688_128.gif',
    alt: 'Tiếng Hàn',
  },
  {
    id: 3,
    title: 'Tuyển Dụng',
    href: '/about',
    image: 'https://idmassage.com/images/gif/vietnam-741_128.gif',
    alt: 'Tiếng Việt',
  },
  {
    id: 4,
    title: 'Liên Hệ',
    href: '/about',
    image: 'https://idmassage.com/images/gif/japan-459_128.gif',
    alt: 'Tiếng Nhật',
  },
  {
    id: 5,
    title: 'Dịch Vụ',
    href: '/about',
    image: 'https://idmassage.com/images/gif/china-314_128.gif',
    alt: 'Tiếng Trung',
  },
  {
    id: 6,
    title: 'Bài Viết',
    href: '/about',
    image: 'https://idmassage.com/images/gif/china-314_128.gif',
    alt: 'Tiếng Trung',
  },
]

export async function ContentHome() {
  const Menu = [
    'THỜI GIAN LÀM VIỆC',
    'HƯỚNG DẪN ĐẶT MASSAGE',
    'LOẠI DỊCH VỤ',
    'THỜI GIAN DI CHUYỂN',
    'QUYỀN LỢI - LỢI ÍCH',
    'GIÁ VÉ',
    'KHIẾU NẠI - GÓP Ý',
    'PHƯƠNG THỨC THANH TOÁN',
    'LIÊN HỆ',
    'QUY TRÌNH MASSAGE',
  ]

  return (
    <div className="container flex flex-col justify-center gap-y-10 pb-20">
      <div className="container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ucOMjifM4WU?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-[590px] md:h-[560px] aspect-video mt-5"
        ></iframe>
        <nav className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-5 lg:grid-cols-6 text-white uppercase font-medium ">
          {LanguageCustome.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-[#d8bfa4] text-center py-2 hover:bg-[#c39974] rounded-xl"
            >
              <button>{item.title}</button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="container flex flex-col gap-y-10 mt-10">
        <div className="container grid grid-cols-5 gap-2 sm:10 md:px-32">
          {LanguageCustome.map((item) => {
            if (item.id === 6) {
              return null // Skip rendering for the 'Bài Viết' item
            }
            return (
              <div
                className="flex justify-center flex-col items-center gap-y-2 cursor-pointer"
                key={item.id}
              >
                <Image src={item.image} width={96} height={72} alt={item.alt} />
                <span>{item.alt}</span>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center relative">
          <Image
            src="https://idmassage.com/_next/image?url=%2Fimages%2Fservices%2Fservice-vip-vi.png&w=1920&q=75"
            width={704}
            height={1056}
            alt=""
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center flex-col">
            <div className="flex justify-center">
              <Link
                href=""
                className="text-center bg-[#ff0000] text-white sm:px-10 p-1 sm:py-2 font-bold border-2 border-[#ffd700] animate-bounce-y"
              >
                <span>ĐẶT NGAY</span>
              </Link>
            </div>

            <span className="text-[10px] font-[600] text-[#ed1c24]">
              Siêu tiện lợi - Chỉ cần chọn & đặt massage - Không cần tạo tài khoản
            </span>
          </div>
        </div>
        <div className="flex justify-center relative">
          <Image
            src="https://idmassage.com/_next/image?url=%2Fimages%2Fservices%2Fservice-vvip-vi.png&w=1920&q=75"
            width={704}
            height={1056}
            alt=""
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center flex-col">
            <div className="flex justify-center">
              <Link
                href=""
                className="text-center bg-[#ff0000] text-white sm:px-10 p-1 sm:py-2 font-bold border-2 border-[#ffd700] animate-bounce-y"
              >
                <span>ĐẶT NGAY</span>
              </Link>
            </div>

            <span className="text-[10px] font-[600] text-[#ed1c24]">
              Siêu tiện lợi - Chỉ cần chọn & đặt massage - Không cần tạo tài khoản
            </span>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-4 gap-2">
        {Menu.map((item, index) => (
          <Link
            key={index}
            href=""
            className="bg-[#d8bfa4] flex justify-center py-2 hover:bg-[#c39974] rounded-xl"
          >
            <button>{item}</button>
          </Link>
        ))}
      </div>
      <div className="container relative">
        <Image
          src="https://idmassage.com/_next/image?url=%2Fimages%2Fservices%2Frecruitment.png&w=1920&q=75"
          width={1920}
          height={1080}
          alt="banner"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center flex-col">
          <div className="flex justify-center">
            <Link
              href=""
              className="text-center p-1 bg-[#ff0000] text-white md:px-10 md:py-2 font-bold border-2 border-[#ffd700] animate-bounce-y"
            >
              <span>Úng Tuyển Ngay</span>
            </Link>
          </div>
        </div>
      </div>
      <div>Slug: Blog</div>
    </div>
  )
}
