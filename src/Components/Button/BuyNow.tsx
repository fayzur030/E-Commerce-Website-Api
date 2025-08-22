import type React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init'
import { useNavigate } from 'react-router-dom'

interface BuyNowProps {
  productId: number
}

const BuyNow: React.FC<BuyNowProps> = ({ productId }) => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const handleClick = () => {
    if (!user) {
      navigate('/signup', {
        state: { from: `/checkout?product=${productId}` },
      })
    } else {
      navigate(`/checkout?product=${productId}`)
    }
  }
  return (
    <button
      className='mt-3 sm:mt-4 w-full bg-blue-400 text-white py-1.5 sm:py-2  hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm md:text-base'
      onClick={handleClick}
    >
      Buy Now
    </button>
  )
}

export default BuyNow
