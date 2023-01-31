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
          'bg-black font-sans text-white antialiased px-4 md:px-16 max-w-full',
          fontSans.variable
        )}
      >
        <div className="absolute top-0 h-[20rem] w-[80rem] z-[-1] right-0 dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r opacity-20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-[#3c5355] to-[#3fcf8e]">
            <Gradient
              width={72}
              height={56}
              x="-12"
              y="4"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 mix-blend-overlay fill-white/2.5 stroke-white/5"
            />
          </div>
        </div>
        <main className="md:pt-14 max-w-5xl mx-auto">
          <Navgiation />
          {children}
          <Footer />
        </main>
        <TailwindIndicator />
      </body>
    </html>
  )
}
