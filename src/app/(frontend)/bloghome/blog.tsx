import { BlogClient } from './Component.client'
import React from 'react'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function Blog() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    sort: '-createdAt',
    limit: 10,
  })

  console.log('Posts:', posts)
  return <BlogClient />
}
