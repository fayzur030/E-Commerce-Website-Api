// Login.tsx
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.init'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const navigate = useNavigate()
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password)
  }
  if (user) {
    navigate('/')
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100 px-4'>
      <div className='max-w-md w-full bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
          Sign In
        </h2>

        <form onSubmit={submitHandler} className='space-y-5'>
          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block mb-1 font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200'
              placeholder='Enter your email'
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='block mb-1 font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200'
              placeholder='Enter your password'
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition duration-300 font-semibold'
          >
            {loading ? 'Signing...' : 'Sign In'}
          </button>
          {error && (
            <p className='text-red-500 text-sm mt-2'>{error.message}</p>
          )}
        </form>

        {/* Sign Up Link */}
        <p className='mt-6 text-center text-gray-600'>
          Don&apos;t have an account?{' '}
          <Link
            to='/signup'
            className='font-medium text-blue-600 hover:underline hover:text-blue-700'
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
