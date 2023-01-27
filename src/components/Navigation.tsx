import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const items = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
const Navgiation: FC = ({}) => {
  return (
    <nav className="flex justify-between py-6">
      <div />
      {/* <Image src="/next.svg" alt="logo" width={110} height={30} /> */}

      <ul className="flex gap-6 font-semibold text-lg">
        {items.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navgiation
