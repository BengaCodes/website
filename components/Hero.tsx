import Image from 'next/image'
import Link from 'next/link'
import img from '../assets/laptop.jpg'
import { greeting } from './libs/helpers'

const Hero = () => {
  return (
    <section className='h-full'>
      <div className=' md:h-2/4 lg:h-3/4'>
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-stone-300'>
          <h1 className='text-2xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-stone-300 md:text-4xl lg:text-6xl'>
            {greeting()} & Welcome
          </h1>
          <h3 className='text-xl py-2 font-bold leading-none sm:text-3xl xl:max-w-3xl dark:text-stone-300 md:text-3xl md:mt-2'>
            I&apos;m Benga Olasebikan
          </h3>
          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-stone-300 md:text-xl'>
            A Software Engineer based in London, UK
          </p>
          <div className='flex flex-wrap justify-center'>
            <button
              type='button'
              className='px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-neutral-400 dark:text-stone-300 hover:bg-transparent hover:border-stone-400 hover:border-2'
            >
              <Link href='/resume'>Resume</Link>
            </button>
            <button
              type='button'
              className='px-8 py-3 m-2 text-lg border rounded dark:border-stone-400 dark:text-stone-300 hover:bg-neutral-400'
            >
              <Link href='/about'>About Me</Link>
            </button>
          </div>
        </div>
      </div>
      <div className='glass p-2 md:h-2/4 lg:h-3/4'>
        <Image
          src={img}
          alt='Laptop'
          width={200}
          height={300}
          className='w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500 bg-gradient-to-top bg-slate-400'
          priority
          style={{
            backgroundImage: 'linear-gradient(0, 0, 0, 0.5)'
          }}
        />
      </div>
    </section>
  )
}

export default Hero
