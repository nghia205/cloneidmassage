import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import Image from 'next/image'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-[#D8BFA4] dark:bg-card text-white max-h-[1200px]">
      <div className="container grid grid-cols-1 gap-10 pb-16 pt-8 md:grid-cols-3">
        <section className="space-y-6">
          <h1 className=" text-center text-2xl font-semibold ">IDMassage</h1>
          <p>
            IDMassage – Dịch Vụ Massage Tại Nhà chuyên nghiệp, giúp bạn thư giãn và phục hồi sức
            khỏe ngay tại không gian riêng của mình. Khám phá ngay&nbsp;
            <a
              href="https://idmassage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              https://idmassage.com/
            </a>
            để trải nghiệm dịch vụ massage đẳng cấp! Thư giãn hoàn hảo, sức khỏe tối ưu, chỉ với một
            cú click!
          </p>
          <nav aria-label="Mạng xã hội" className="flex gap-x-4 justify-center ">
            <Link
              href="https://www.facebook.com/profile.php?id=61567136855725"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/X.webp" alt="icon X" width={44} height={44} />
            </Link>
            <Link
              href="https://www.instagram.com/idmassage.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/IN.webp" alt="icon IN" width={44} height={44} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/idmassage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/P.webp" alt="icon P" width={44} height={44} />
            </Link>
            <Link href="https://www.linkedin.com/company/idmassage/">
              <Image src="/Youtube.webp" alt="icon Youtube" width={44} height={44} />
            </Link>
          </nav>
        </section>
        <section className="space-y-5">
          <address className="space-y-4 not-italic">
            <p className="flex gap-x-2">
              <Image src="/website.webp" alt="icon X" width={18} height={18} />
              <span className="leading-none">Website: idmassage.com</span>
            </p>
            <p className="flex gap-x-2">
              <Image src="/zalo.webp" alt="icon X" width={18} height={18} />
              <span className="leading-none">Zalo: +84886517257</span>
            </p>
            <p className="flex gap-x-2">
              <Image src="/whatsapp.webp" alt="icon X" width={18} height={18} />
              <span className="leading-none">Whatsapp: +84886517257</span>
            </p>
            <p className="flex gap-x-2">
              <Image src="/hotline.webp" alt="icon X" width={18} height={18} />
              <span className="leading-none">Hotline: +84886517257</span>
            </p>
          </address>
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl">Phương thức thanh toán</h2>
            <ul className="flex gap-5">
              <Link href="https://idmassage.com/payment" target="_blank" rel="noopener noreferrer">
                <Image src="/money.webp" alt="icon X" width={44} height={44} />
              </Link>
              <Link href="https://idmassage.com/momo" target="_blank" rel="noopener noreferrer">
                <Image src="/momo.webp" alt="icon X" width={44} height={44} />
              </Link>
              <Link href="https://idmassage.com/banking" target="_blank" rel="noopener noreferrer">
                <Image src="/banking.webp" alt="icon X" width={44} height={44} />
              </Link>
            </ul>
          </section>
        </section>

        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61567136855725%26ref%3Dembed_page&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
          width="340"
          height="340"
          className="overflow-hidden border-none w-full"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook IDMassage Page"
        ></iframe>
      </div>
    </footer>
  )
}
