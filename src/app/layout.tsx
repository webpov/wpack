import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import './theme.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebPack',
  description: '3D Web Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      <body className={"ma-0 pa-0 bg-black"}>{children}</body>
    </html>
  )
}
