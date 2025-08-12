import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { CardPostData } from '@/components/Card'
import Link from 'next/link'
import Image from 'next/image'

type Args = {
  searchParams: Promise<{
    search: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { search: query } = await searchParamsPromise
  console.log('Search query:', query)
  const payload = await getPayload({ config: configPromise })

  // const posts = await payload.find({
  //   collection: 'search',
  //   depth: 1,
  //   limit: 12,
  //   select: {
  //     title: true,
  //     slug: true,
  //     categories: true,
  //     meta: true,
  //   },
  //   // pagination: false reduces overhead if you don't need totalDocs
  //   pagination: false,
  //   ...(query
  //     ? {
  //         where: {
  //           or: [
  //             {
  //               title: {
  //                 like: query,
  //               },
  //             },
  //             {
  //               'meta.description': {
  //                 like: query,
  //               },
  //             },
  //             {
  //               'meta.title': {
  //                 like: query,
  //               },
  //             },
  //             {
  //               slug: {
  //                 like: query,
  //               },
  //             },
  //           ],
  //         },
  //       }
  //     : {}),
  // })

  const posts = [
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
    {
      img: 'https://api.idmassage.com/media/large/253_large.jpg',
      address: 'Hồ Chí Minh',
      title: 'SỐ 902: MASSAGE TẠI NHÀ TP HỒ CHÍ MINH',
    },
  ]

  return <>chi tiết</>
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Search`,
  }
}
