import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]
  return (
    <nav className="flex justify-around bg-white py-8">
      <div className="flex space-x-4">
        {links.map(({ path, label }) => (
          <Link key={path} href={path} passHref>
            <div
              className={`hover:text-primary-light cursor-pointer text-sm font-medium ${
                router.pathname === path ? 'border-primary border-b-2' : 'text-gray-700'
              }`}
            >
              {label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
