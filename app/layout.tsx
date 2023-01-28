import '../styles/globals.css'
import { Inter as FontSans } from '@next/font/google'

import { cn } from 'utils/cn'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import Footer from '@/components/Footer'
import Navgiation from '@/components/Navigation'
import Gradient from '@/components/Gradient'

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
          'bg-black font-sans text-white antialiased px-16',
          fontSans.variable
        )}
      >
        <div className="absolute left-1/2 top-0 h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r opacity-30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-[#3c5355] to-[#3fcf8e]">
            <Gradient
              width={72}
              height={56}
              x="-12"
              y="4"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 mix-blend-overlay fill-white/2.5 stroke-white/5"
            />
          </div>
          <svg
            viewBox="0 0 1113 440"
            aria-hidden="true"
            className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
          >
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
          </svg>
        </div>
        <main className="pt-14 max-w-5xl mx-auto">
          <Navgiation />
          {children}
          <Footer />
        </main>
        <TailwindIndicator />
      </body>
    </html>
  )
}
