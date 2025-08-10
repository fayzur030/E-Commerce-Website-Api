import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-cream px-4'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
          Create an Account
        </h2>
        <form noValidate>
          {/* Name */}
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block mb-1 font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Your full name'
            />
          </div>

          {/* Email */}
          <div className='mb-4'>
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
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='you@example.com'
            />
          </div>

          {/* Password */}
          <div className='mb-4'>
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
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='At least 6 characters'
            />
          </div>

          {/* Confirm Password */}
          <div className='mb-6'>
            <label
              htmlFor='confirmPassword'
              className='block mb-1 font-medium text-gray-700'
            >
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Re-enter your password'
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold'
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-600 hover:underline'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
