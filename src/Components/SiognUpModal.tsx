type Props = {
  isOpen: boolean
  onClose: () => void
}

const SignUpModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null

  return (
    <div
      className="modal modal-open backdrop-blur-sm duration-500 shadow-sm"
      onClick={onClose}
    >
      <div
        className="modal-box w-11/12 max-w-lg sm:max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-bold text-lg sm:text-xl text-center mb-4">
          Create an Account
        </h3>
        <form noValidate className="space-y-4  ">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="At least 6 characters"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Re-enter your password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 sm:py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-600 text-xs sm:text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-primary underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUpModal
