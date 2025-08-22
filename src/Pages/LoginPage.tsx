// Login.tsx
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100 px-4'>
      <div className='max-w-md w-full bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
          Login
        </h2>

        <form noValidate className='space-y-5'>
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
              id='email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200'
              placeholder='you@example.com'
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
            Log In
          </button>
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

export default LoginPage
