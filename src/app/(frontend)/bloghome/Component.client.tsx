'use client'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import { PaginatedDocs } from 'payload'
import { Post } from '@/payload-types'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

export const BlogClient = ({ post }: { post: PaginatedDocs<Post> }) => {
  return (
    <>
      <div className="container ">
        <div className="flex gap-x-2 items-center">
          <span className="text-2xl font-bold">Blog</span>
        </div>

        <div className="flex py-5">
          <div className="flex flex-col justify-center items-center w-3/4 pr-8 border-r-[1px] border-opacity-5 gap-y-2">
            {post?.docs?.map((item) => {
              const data = item.content
              const html = convertLexicalToHTML({ data })

              const date = new Date(item.createdAt)

              const day = date.getUTCDate()

              const month = date.getUTCMonth() + 1

              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-y-3 mb-10"
                >
                  {typeof item.heroImage === 'object' && item.heroImage?.url && (
                    <div className="relative w-full group ">
                      <Link href={item.slug || ''}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.heroImage.url}`}
                          width={1000}
                          height={500}
                          className="w-full cursor-pointer"
                          alt=""
                          priority
                        />
                      </Link>
                      <div className="absolute top-5 -left-5 bg-white border-2 text-[#C39972] border-[#C39972] group-hover:bg-[#C39972] transition-all duration-75 ease-linear group-hover:text-white h-11 w-11 flex flex-col justify-center items-center leading-none">
                        <span className="text-[17px] mb-1">{day}</span>
                        <span className="text-[13px]">Th{month}</span>
                      </div>
                    </div>
                  )}
                  <h1 className="line-clamp-2 text-wrap text-lg font-[600] leading-6">
                    {item.title}
                  </h1>
                  <div className="my-2 h-[2px] w-8 bg-[#ebebeb]"></div>
                  <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    className="[&_p]:inline [&_p]:m-0 [&_p]:mr-1 line-clamp-2 text-wrap text-sm"
                  />

                  <Link href={item.slug || ''}>
                    <button className="flex items-center text-sm font-bold px-4 py-2 border-2 border-[#009688] text-[#009688] gap-x-2 hover:bg-[#009688] hover:text-white transition-all duration-200">
                      Tiếp tục đọc <IoIosArrowRoundForward />
                    </button>
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="pl-8 flex flex-col gap-y-5">
            <div className="flex items-center ">
              <input className="border-2 border-black border-opacity-55 focus:shadow-sm w-3/4 h-10 px-2" />
              <div className="bg-[#b68059] relative h-10 w-1/6">
                <CiSearch className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </div>
            </div>
            <div>
              <p>Bài viết mới nhất</p>
              {post.docs.map((item, index) => {
                const data = item.content
                const html = convertLexicalToHTML({ data })
                return (
                  <article className="flex gap-x-2 w-full py-2" key={item.id}>
                    {typeof item.heroImage === 'object' && item.heroImage?.sizes?.small && (
                      <Link href={item.slug || ''}>
                        <Image
                          width={50}
                          height={50}
                          alt=""
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.heroImage.url}`}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                    )}

                    <div className="w-40">
                      <Link
                        href={item.slug || ''}
                        className="text-sm line-clamp-1 text-wrap font-[700]"
                      >
                        {item.title}
                      </Link>
                      <div className="mt-1 line-clamp-1 text-wrap text-xs">
                        <div
                          dangerouslySetInnerHTML={{ __html: html }}
                          className="[&_p]:inline [&_p]:m-0 [&_p]:mr-1 line-clamp-1 text-wrap text-sm"
                        />
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
