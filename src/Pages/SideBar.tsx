import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'

const NavBar = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Service', path: '/service' },
  ]
  const authItems = [
    { name: 'Login', path: '/login' },
    { name: 'Sign Up', path: '/sign-up' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-3 text-2xl font-bold text-orange-600 tracking-wide'>
            <img
              src={logo}
              alt='logo'
              className='w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-lg'
            />
            <span>E-Shop</span>
          </div>

          {/* Desktop Menu */}
          <nav className='hidden md:flex items-center gap-6 text-sm text-gray-700'>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? 'text-orange-600 border-b-2 border-orange-500'
                      : 'hover:text-orange-500'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className='hidden lg:flex gap-3'>
            {authItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className='
                  px-4 py-1.5
                  rounded-md
                  border border-gray-300
                  text-sm font-medium
                  text-gray-700
                  bg-white
                  hover:bg-gray-100
                  transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
                '
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 rounded-md'
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4 bg-white shadow-md rounded-b-lg'>
          <nav className='flex flex-col gap-3 pt-2 border-t text-sm text-gray-700'>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive
                      ? 'text-orange-600 font-semibold bg-orange-100'
                      : 'hover:text-orange-500 hover:bg-orange-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            {authItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className='
                  px-4 py-2
                  text-center
                  rounded-md
                  border border-gray-300
                  text-sm font-medium
                  text-gray-700
                  bg-white
                  hover:bg-gray-100
                  transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
                '
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
