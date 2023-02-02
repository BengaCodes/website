import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import '../../style/global.css'
import { Inter } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={clsx(inter.variable, 'dark')}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen w-screen bg-gray-200'>
        <div className='w-full h-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
          <Navbar />
          <main role='main' className='w-full h-full flex-grow overflow-auto'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
