import LoginPage from '../Pages/LoginPage'


type Props = {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-gray-900 rounded-lg shadow-lg w-11/12 max-w-lg sm:max-w-xl transition-all duration-300 ease-in-out'
        onClick={(e) => e.stopPropagation()}
      >
        <LoginPage />
      </div>
    </div>
  )
}

export default LoginModal
