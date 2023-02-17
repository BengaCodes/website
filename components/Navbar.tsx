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
      <div className='sticky top-0 p-4 rounded-xl w-full h-1/5 glass border-solid border-2 border-stone-500 lg:h-2/4 md:h-2/6'>
        <ul className='flex sm:flex-col overflow-hidden content-center justify-between gap-4'>
          {links?.map((link) => (
            <li
              className='py-2 hover:bg-neutral-400 rounded cursor-pointer'
              key={link?.name}
            >
              <Link
                className='truncate flex justify-between w-2/6'
                href={link.link}
                target={targetBlankLinks?.includes(link?.name) ? '_blank' : ''}
              >
                <link.icon />
                <span className='hidden sm:inline dark:text-stone-300 text-left w-4/6'>
                  {link?.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-3/4 rounded-xl border glass my-3 w-full border-stone-500 md:h-3/4'>
        <div className=' md:h-2/4 md:py-4'>
          <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:flex-col md:flex md:flex-col lg:items-start lg:justify-between'>
            <h2 className='text-xl font-extrabold tracking-tight text-stone-800 sm:text-xl pb-2'>
              <span className='block text-stone-800 overflow-ellipsis md:text-xl'>
                Latest Arsenal News
              </span>
            </h2>
            <Suspense fallback={<Loading />}>
              {/* @ts-expect-error Server Component */}
              <News query='arsenal football club' />
            </Suspense>
          </div>
          <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:flex-col md:flex md:flex-col lg:items-start lg:justify-between'>
            <h2 className='text-xl font-extrabold tracking-tight text-stone-800 sm:text-xl pb-2'>
              <span className='block text-stone-800 overflow-ellipsis'>
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
    </div>
  )
}

export default Navbar
