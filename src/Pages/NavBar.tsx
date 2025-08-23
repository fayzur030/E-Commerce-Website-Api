import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase.init'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    navigate(`/search?query=${searchTerm}&category=${category}`)
    setIsMobileMenuOpen(false)
  }
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const [user] = useAuthState(auth)

  // 🔹 Sign out function
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
        {/* Left: Logo */}
        <div className='flex items-center gap-3 text-xl font-bold text-orange-600'>
          <img
            src={logo}
            alt='logo'
            className='w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-lg'
          />
          <span>E-Shop</span>
        </div>

        {/* Center: Search + Category */}
        <div className='flex-1 hidden md:flex justify-center'>
          <form
            onSubmit={handleSearch}
            className='flex items-center gap-2 w-full max-w-xl'
          >
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='select select-bordered select-sm w-32'
            >
              <option value='all'>All</option>
              <option value='smartphones'>Smartphones</option>
              <option value='laptops'>Laptops</option>
              <option value='clothes'>Clothes</option>
              <option value='shoes'>Shoes</option>
            </select>
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='input input-bordered input-sm flex-1 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400'
            />
            <button
              type='submit'
              className='btn btn-primary btn-sm hover:bg-orange-600 transition-colors'
            >
              Search
            </button>
          </form>
        </div>

        {/* Right: Links + Cart + Profile */}
        <div className='flex items-center gap-3'>
          {/* Desktop */}
          <div className='hidden md:flex items-center gap-3'>
            <Link to='/' className='btn btn-ghost'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost'>
              About
            </Link>
            <Link to='/contact' className='btn btn-ghost'>
              Contact
            </Link>
            <Link to='/cart' className='btn btn-ghost btn-circle'>
              <ShoppingCart className='w-5 h-5' />
            </Link>

            {/* Profile dropdown */}
            <div className='dropdown dropdown-end'>
              <label
                tabIndex={0}
                className='btn btn-ghost btn-circle flex items-center gap-1'
              >
                <User className='w-5 h-5' />
                <ArrowRight className='w-4 h-4 text-gray-500' />
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40'
              >
                {!user && (
                  <>
                    <li>
                      <Link to='/signup'>Sign Up</Link>
                    </li>
                    <li>
                      <Link to='/signin'>Sign In</Link>
                    </li>
                  </>
                )}
                {user && (
                  <li>
                    <button onClick={handleSignOut}>Sign out</button>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='btn btn-ghost btn-circle'
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden px-4 pb-4 bg-white shadow-md'>
          <nav className='flex flex-col gap-2 text-center'>
            <Link to='/' onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to='/about' onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to='/cart' onClick={() => setIsMobileMenuOpen(false)}>
              Cart
            </Link>
            {!user && (
              <>
                <Link to='/signup' onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
                <Link to='/signin' onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </>
            )}
            {user && (
              <button
                onClick={() => {
                  handleSignOut()
                  setIsMobileMenuOpen(false)
                }}
                className='btn btn-ghost'
              >
                Sign out
              </button>
            )}
          </nav>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className='flex flex-col gap-2 mb-3 mt-3'
          >
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='select select-bordered select-sm w-full'
            >
              <option value='all'>All</option>
              <option value='smartphones'>Smartphones</option>
              <option value='laptops'>Laptops</option>
              <option value='clothes'>Clothes</option>
              <option value='shoes'>Shoes</option>
            </select>
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='input input-bordered input-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400'
            />
            <button
              type='submit'
              className='btn btn-primary btn-sm w-full hover:bg-orange-600 transition-colors'
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Navbar
