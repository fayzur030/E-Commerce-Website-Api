import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase.init'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  useEffect(() => {
    if (user) {
      navigate('/checkout')
    }
  }, [user, navigate])
  useEffect(() => {
    if (user) {
      navigate('/') // Home page
    }
  }, [user, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 px-4'>
      <div className='max-w-md w-full bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className='space-y-5'>
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
              required
              id='email'
              value={email}
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition duration-200'
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
              required
              name='password'
              id='password'
              value={password}
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition duration-200'
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition duration-300 font-semibold'
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {error && (
            <p className='text-red-500 text-sm mt-2'>{error.message}</p>
          )}
        </form>

        {/* Login Link */}
        <p className='mt-6 text-center text-gray-600'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='font-medium text-purple-600 hover:underline hover:text-purple-700'
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
