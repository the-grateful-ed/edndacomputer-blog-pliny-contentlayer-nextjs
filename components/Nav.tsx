import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
  ]
  return (
    <nav className="flex justify-center bg-white py-8 flex flex-col text-center">
      <div className="flex space-x-4 mx-auto">
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
      <span className='text-xs mx-auto text-pink-500 hover:text-pink-600 hover:scale-110 transition duration-300 pt-4'><a href="mailto:edndacomputer@riseup.net">edndacomputer@riseup.net</a></span>
    </nav>
  )
}

export default Nav
