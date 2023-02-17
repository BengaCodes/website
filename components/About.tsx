import Image from 'next/image'
import Link from 'next/link'
import img from '../assets/beng.jpeg'
import Card from './Card'
import { backend, devops, improve, frontend } from './libs/helpers'

const About = () => {
  return (
    <div className='container my-24 px-6 mx-auto'>
      <section className='mb-32'>
        <div className='flex flex-wrap md:justify-center md:align-middle'>
          <div className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 lg:-mr-16 lg:px-4'>
            <div className='flex lg:py-12 lg:w-full'>
              <Image
                src={img}
                className='w-full rounded-lg shadow-lg z-10 md:px-4 lg:w-full lg:px-0'
                id='main-img'
                alt='Benga Olasebikan React Frontend Developer'
              />
            </div>
          </div>

          <div className='grow-0 shrink-0 basis-auto w-full lg:w-7/12'>
            <div className='bg-transparant glass h-full rounded-lg p-6 lg:pl-12 dark:text-stone-300 flex items-center text-center lg:text-left'>
              <div className='lg:pl-12'>
                <h2 className='text-2xl font-bold mb-6 md:text-4xl lg:text-center'>
                  Get to know me more
                </h2>
                <p className='mb-6 pb-2 lg:pb-0 text-justify md:text-xl'>
                  I&apos;m an experienced React frontend developer with a
                  passion for building dynamic, user-friendly web applications.
                  With a strong understanding of HTML, CSS, and JavaScript, I
                  specialize in creating visually appealing and functional
                  interfaces using the React framework. My experience to date is
                  mainly between Financial services and Education industry.
                  <br /> <br /> I have a good track record of delivering complex
                  projects on time and to a high standard, and I enjoy the
                  challenge of finding creative solutions to technical problems.
                </p>
                <p className='md:text-xl mb-6 pb-2 md:pb-0 lg:pb-0 text-justify'>
                  When I&apos;m not coding, you&apos;ll find me experimenting
                  with new technologies, expanding my skills, mainly via{' '}
                  <Link
                    href='https://frontendmasters.com'
                    target='_blank'
                    className='text-teal-500'
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
        <div className='container rounded-md p-6 mt-6 soft md:flex md:flex-col md:items-center md:justify-center'>
          <h1 className=' text-4xl dark:text-stone-700 text-center mb-4 font-bold'>
            Skills
          </h1>
          <div className='flex flex-wrap justify-between gap-y-4 md:flex md:flex-col md:items-center md:justify-center lg:flex-row lg:gap-x-6'>
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
