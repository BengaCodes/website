import Image from 'next/image'
import Link from 'next/link'
import {
  navLinks as links,
  navTargetBlankLinks as targetBlankLinks
} from './libs/helpers'

const Navbar = () => {
  return (
    <div className='sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4'>
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
      <div className='bg-gray-50 h-2/4 rounded-xl border my-3 w-full'>
        <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block text-indigo-600 overflow-ellipsis'>
              Made with Tailwind CSS!
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar
