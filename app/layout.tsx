import '../styles/globals.css'
import { Inter as FontSans } from '@next/font/google'

import { cn } from 'utils/cn'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import Footer from '@/components/Footer'
import Navgiation from '@/components/Navigation'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-zinc-800 font-sans text-white antialiased px-16',
          fontSans.variable
        )}
      >
        <Navgiation />
        <main>{children}</main>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  )
}
