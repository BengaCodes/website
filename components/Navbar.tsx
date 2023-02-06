import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  navLinks as links,
  navTargetBlankLinks as targetBlankLinks
} from './libs/helpers'
import Loading from './Loading'
import News from './News'

const Navbar = () => {
  return (
    <div className='sm:w-1/3 md:2/4 w-full flex-shrink flex-grow-0'>
      <div className='sticky top-0 p-4 rounded-xl w-full h-2/4 glass border-solid border-2 border-gray-200'>
        <ul className='flex sm:flex-col overflow-hidden content-center justify-between gap-6'>
          {links?.map((link) => (
            <li
              className='py-2 hover:bg-indigo-300 rounded cursor-pointer'
              key={link?.name}
            >
              <Link
                className='truncate'
                href={link.link}
                target={targetBlankLinks?.includes(link?.name) ? '_blank' : ''}
              >
                <Image
                  alt='App logos'
                  width={20}
                  height={30}
                  src={link?.img}
                  className='w-7 sm:mx-2 mx-4 inline'
                />
                <span className='hidden sm:inline'>{link?.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-2/4 rounded-xl border glass my-3 w-full'>
        <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:flex-col md:flex md:flex-col lg:items-center lg:justify-between'>
          <h2 className='text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl pb-2'>
            <span className='block text-red-600 overflow-ellipsis'>
              Latest Arsenal News
            </span>
          </h2>
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error Server Component */}
            <News query='arsenal football club' />
          </Suspense>
        </div>
        <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:flex-col md:flex md:flex-col lg:items-center lg:justify-between'>
          <h2 className='text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl pb-2 '>
            <span className='block text-red-600 overflow-ellipsis'>
              Latest London News
            </span>
          </h2>
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error Server Component */}
            <News query='London' />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Navbar
