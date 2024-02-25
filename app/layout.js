// import { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const roboto = Roboto({ weight: '400', subsets: ['latin'] })


export const metadata = {
  title: 'Mycall Dev',
  description: 'The Learning Journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
