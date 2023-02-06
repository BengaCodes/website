import Link from 'next/link'
import { footerLinks } from './libs/helpers'

const Footer = () => {
  return (
    <footer className=' bg-gray-500 bg-transparent mt-auto'>
      <div className='px-4 py-6 text-white mx-auto'>
        <div className='flex justify-around'>
          {footerLinks?.map((link) => (
            <div className='' key={link?.name}>
              <Link
                href={link?.link}
                target={
                  link?.name === 'LinkedIn' || link?.name === 'GitHub '
                    ? '_blank'
                    : ''
                }
                className='text-xs uppercase tracking-wider'
              >
                {link?.name}
              </Link>
            </div>
          ))}
        </div>
        <div className='text-center text-xs py-3 mt-2'>
          <a href=''>&copy;2023 Benga Olasebikan</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
