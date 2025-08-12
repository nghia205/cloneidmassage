import Link from 'next/link'
import type { Metadata } from 'next/types'

import React from 'react'

import { IoIosArrowRoundBack } from 'react-icons/io'

type Args = {
  searchParams: Promise<{
    search: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  console.log('Search query:', await searchParamsPromise)
  return (
    <>
      <div className="container py-10 ">
        <Link
          href="/partners"
          className="border-2 border-green-600 rounded-md w-[200px] h-[50px] flex items-center justify-center"
        >
          <button className="flex items-center gap-2">
            <IoIosArrowRoundBack />
            Tiếp tục sử dụng
          </button>
        </Link>
        <div className="container flex justify-center flex-col items-center py-20 gap-y-5">
          <span>Chưa có sản phẩm nào trong giỏ hàng.</span>
          <Link
            href="/partners"
            className="border-2 bg-green-600 text-white hover:bg-green-900 rounded-md w-[200px] h-[50px] flex items-center justify-center"
          >
            <button className="flex items-center gap-2">
              <IoIosArrowRoundBack />
              Tiếp tục sử dụng
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Search`,
  }
}
