import { FC } from 'react'

const links = [
  { name: 'Twitter', url: 'twitter.com' },
  { name: 'Instagram', url: 'instagram.com' },
  { name: 'Linkedin', url: 'linkedin.com' },
]

const Footer: FC = () => {
  return (
    <footer className="flex justify-between py-4">
      <div>
        <span className="font-medium text-lg">
          {/* Alexander Najm Thomsen */}
        </span>
      </div>
      <div>
        <ul className="flex gap-2 font-medium">
          {links.map(({ name, url }) => {
            return (
              <li key={name}>
                <a
                  className="p-2 bg-black rounded-lg hover:bg-slate-800"
                  href={`https://www.${url}`}
                  target="_blank"
                >
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
