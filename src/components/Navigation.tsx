import Link from 'next/link'

const items = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
const Navgiation = () => {
  return (
    <nav className="flex py-6">
      <div />
      <ul className="flex gap-6 font-semibold text-lg">
        {items.map(({ name, href }) => (
          <li key={name}>
            <Link
              className="px-3 py-2 hover:bg-gray-600 bg-transparent rounded-lg transition-all duration-200 text-gray-400 hover:text-gray-50"
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navgiation
