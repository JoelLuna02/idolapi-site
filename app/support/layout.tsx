"use client"
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children, }: { children: React.ReactNode }) {
  useEffect(() => {
    require('jquery/dist/jquery.min.js')
    require('@popperjs/core/dist/umd/popper.min.js')
    require('bootstrap/dist/js/bootstrap.min.js')
  })
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
