import Image from 'next/image'
import Link from 'next/link'
import img from '../assets/beng.jpeg'
import Card from './Card'
import { backend, devops, improve, frontend } from './libs/helpers'

const About = () => {
  return (
    <div className='container my-24 px-6 mx-auto'>
      <section className='mb-32'>
        <div className='flex flex-wrap'>
          <div className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0'>
            <div className='flex lg:py-12'>
              <Image
                src={img}
                className='w-full rounded-lg shadow-lg z-10 md:ml-12'
                id='cta-img-nml-50'
                alt='Benga Olasebikan'
              />
            </div>
          </div>

          <div className='grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:-ml-5'>
            <div className='bg-transparant glass h-full rounded-lg p-6 lg:pl-12 dark:text-stone-300 flex items-center text-center lg:text-left'>
              <div className='lg:pl-12'>
                <h2 className='text-3xl font-bold mb-6'>Get to know me more</h2>
                <p className='mb-6 pb-2 lg:pb-0'>
                  I&apos;m a highly motivated and experienced React frontend
                  developer with a passion for building dynamic, user-friendly
                  web applications. With a strong understanding of HTML, CSS,
                  and JavaScript, I specialize in creating visually appealing
                  and functional interfaces using the React framework. My
                  experience to date is mainly between finance and education
                  industry.
                  <br /> <br /> I have a good track record of delivering complex
                  projects on time and to a high standard, and I enjoy the
                  challenge of finding creative solutions to technical problems.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me experimenting
                  with new technologies, expanding my skills, mainly via{' '}
                  <Link
                    href='https://frontendmasters.com'
                    target='_blank'
                    className='text-slate-500'
                  >
                    Frontend Masters
                  </Link>{' '}
                  and staying up-to-date with the latest industry trends, I
                  currently enjoy working with Next JS and AWS a lot to build
                  personal projects. I&apos;m committed to delivering the best
                  possible user experience and I take pride in creating
                  beautiful, intuitive designs that engage and impress users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container rounded-md p-6 mt-6 soft'>
          <h1 className=' text-4xl text-center mb-4 font-bold'>Skills</h1>
          <div className='flex flex-wrap justify-between gap-y-4'>
            <Card title='Frontend' skills={frontend} />
            <Card title='Backend' skills={backend} />
            <Card title='DevOps' skills={devops} />
            <Card title='Current Learning Ops' skills={improve} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
