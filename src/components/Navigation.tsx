import Link from 'next/link'

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
)
const items = [
  { name: 'Home', href: '/' },
  { name: 'Guestbook', href: '/guestbook' },
]
const Navgiation = () => {
  return (
    <nav className="flex py-6 justify-between">
      <ul className="flex gap-2 md:gap-6 font-semibold text-lg">
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

      <a
        className="flex items-center gap-2 font-semibold text-lg"
        href="mailto:ahoogthomsen@gmail.com"
        target="_blank"
      >
        Contact me {arrowIcon}
      </a>
    </nav>
  )
}

export default Navgiation
