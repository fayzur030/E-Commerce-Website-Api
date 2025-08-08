// Login.tsx

const LoginPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
          Log in to your account
        </h2>
        <form noValidate>
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
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-400'
              placeholder='you@example.com'
            />
          </div>

          <div className='mb-6'>
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
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-400'
              placeholder='Enter your password'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold'
          >
            Log In
          </button>
        </form>

        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{' '}
          <a href='/signup' className='text-blue-600 hover:underline'>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
