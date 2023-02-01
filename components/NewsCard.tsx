import Image from 'next/image'
import React from 'react'

const NewsCard = ({
  author,
  title,
  source,
  publishedAt,
  url
}: {
  author: string
  title: string
  source: { id: string; name: string }
  publishedAt: string
  url: string
}) => {
  return (
    <div className='mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow'>
      <Image
        src={url}
        className='aspect-video w-full object-cover'
        alt={title}
      />
      <div className='p-4'>
        <p className='mb-1 text-sm text-primary-500'>
          {author} • <time>{new Date(publishedAt).toLocaleString()}</time>
        </p>
        <h3 className='text-xl font-medium text-gray-900'>{title}</h3>
        <div className='mt-4 flex gap-2'>
          <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
            {source?.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
