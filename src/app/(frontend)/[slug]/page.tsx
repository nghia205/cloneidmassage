import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { Blog } from '../bloghome/blog'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { MdKeyboardArrowRight } from 'react-icons/md'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 10,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  let page: RequiredDataFromCollectionSlug<'posts'> | null

  page = await queryPageBySlug({
    slug,
  })

  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 10,
    overrideAccess: false,
    pagination: false,
  })

  if (!page && slug === 'home') {
    return <Blog />
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const data = page.content
  const html = convertLexicalToHTML({ data })

  const date = new Date(page.createdAt || '')

  const day = date.getUTCDate()

  const month = date.getUTCMonth() + 1
  const years = date.getUTCFullYear()

  return (
    <article className=" pb-10">
      <div className="container ">
        <div className="flex gap-x-2 items-center">
          <span className="text-2xl font-bold">Blog</span>
          <MdKeyboardArrowRight className="text-xl opacity-25" />
          <span className="text-wrap font-medium text-gray-900">{page.title}</span>
        </div>
        <div className="md:flex py-5">
          <div className="flex flex-col justify-center items-center w-full md:w-3/4 md:pr-8 md:border-r-[1px] border-opacity-5 gap-y-2">
            <div className="text-center text-2xl font-semibold">{page.title}</div>
            <p className="mx-auto my-3 h-[3px] w-8 bg-[#ebebeb]"></p>
            <span className="mx-auto text-sm text-gray-500 flex gap-x-2">
              {day}/{month}/{years}
              <span>-</span>
              {page?.populatedAuthors?.map((item, index) => {
                if (index > 0) {
                  return <span key={index}>,{item.name}</span>
                }
                return <span key={index}>{item.name}</span>
              })}
            </span>
            {typeof page.heroImage === 'object' && page.heroImage?.url && (
              <div className="relative w-full group ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}${page.heroImage.url}`}
                  width={1000}
                  height={500}
                  className="w-full cursor-pointer"
                  alt=""
                />
                <div className="absolute top-5 -left-5 bg-white border-2 text-[#C39972] border-[#C39972] group-hover:bg-[#C39972] transition-all duration-75 ease-linear group-hover:text-white h-11 w-11 flex flex-col justify-center items-center leading-none">
                  <span className="text-[17px] mb-1">{day}</span>
                  <span className="text-[13px]">Th{month}</span>
                </div>
              </div>
            )}
            <h1>{page.title}</h1>
            <div className="my-2 h-[2px] w-8 bg-[#ebebeb]"></div>
            <div dangerouslySetInnerHTML={{ __html: html }} className="text-sm" />
            <div className="flex items-center gap-x-2 w-full justify-start mt-20 mb-10 md:mb-10">
              <Image
                src="/avatar-default.webp"
                width={70}
                height={70}
                alt=""
                className="h-[70px] w-[70px] rounded-full object-cover md:mt-2"
              />
              {page?.populatedAuthors?.map((item, index) => {
                if (index > 0) {
                  return (
                    <span key={index} className="font-medium uppercase">
                      ,{item.name}
                    </span>
                  )
                }
                return (
                  <span key={index} className="font-medium uppercase">
                    {item.name}
                  </span>
                )
              })}
            </div>
          </div>
          <div className="md:pl-8 flex flex-col gap-y-5 w-full md:w-1/4">
            <div className="flex items-center ">
              <input className="border-2 border-black border-opacity-55 focus:shadow-sm w-full md:w-3/4 h-10 px-2" />
              <div className="bg-[#b68059] relative h-10 w-1/6">
                <CiSearch className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </div>
            </div>
            <div>
              <p>Bài viết mới nhất</p>

              {pages?.docs?.map((item, index) => {
                const data = item.content
                const html = convertLexicalToHTML({ data })
                return (
                  <article className="flex gap-x-2 w-full py-2" key={item.id}>
                    {typeof item.heroImage === 'object' && item.heroImage?.sizes?.medium && (
                      <Link href={item.slug || ''} className="w-10 h-10 shrink-0">
                        <Image
                          width={40}
                          height={40}
                          alt={item.title || ''}
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.heroImage.url}`}
                          className="w-full h-full object-cover rounded hover:opacity-65"
                        />
                      </Link>
                    )}

                    <div className="flex-1">
                      <Link
                        href={item.slug || ''}
                        className="text-sm line-clamp-1 text-wrap font-[700] hover:opacity-65"
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
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
