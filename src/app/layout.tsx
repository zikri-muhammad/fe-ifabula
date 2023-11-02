import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppin = Poppins({
  weight: '400',
  preload: false,
})


export const metadata: Metadata = {
  title: 'Nodewave',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} h-screen overflow-x-hidden w-full`}>
        {/* <div className='bg-gray-500 w-full h-[50%] z-0 skew-y-6 rounded-3xl -top-28 absolute '/> */}
        <div className=''>
          {children}
        </div>
      </body>
    </html>
  )
}
