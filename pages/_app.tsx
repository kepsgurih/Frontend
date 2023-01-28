import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderNavbar from '../src/organism/HeaderNavbar'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className='flex flex-col h-screen"'>
    <HeaderNavbar />
    <main className='dark:bg-slate-800 dark:text-gray-200 text-slate-700  h-screen pt-16 md:pt-20'>
   <Component {...pageProps} />
    </main>
    </div>
  )
}
