import '../styles/globals.css'
import type { AppProps } from 'next/app'


import { Inter as FontSans } from "@next/font/google"
import { classNames } from '../utils/classNames'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})
export default function App({ Component, pageProps }: AppProps) {
  return (
<main className={classNames(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}>
  <Component {...pageProps} />
</main>
  )
}
