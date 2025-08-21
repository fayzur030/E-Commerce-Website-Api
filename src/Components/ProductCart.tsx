import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Product } from '../Types/productType'

type Props = { product: Product }

const fallbackImage =
  // Smartphone1: '../../public/SP1.jpg',
  '../../public//SP2.jpg'

const ProductCart = ({ product }: Props) => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border bg-[#F8F8F6] hover:scale-[1.02] duration-300 p-4 relative rounded-lg shadow-md dark:text-black w-full md:w-auto cursor-pointer'
    >
      {/* Image */}
      <img
        src={
          hovered
            ? product.images[1] || product.images[0] || fallbackImage
            : product.images[0] || fallbackImage
        }
        alt={product.title}
        className='w-full h-52 object-cover transition-transform duration-300 ease-in-out'
        onError={(e) => {
          e.currentTarget.src = fallbackImage
        }}
      />

      {/* Content */}
      <div className='p-3 sm:p-4'>
        <h2 className='text-base sm:text-lg font-semibold text-gray-900 truncate'>
          {product.title}
        </h2>
        <p className='text-xs sm:text-sm text-gray-500 capitalize'>
          {product.category.name}
        </p>
        <p className='text-gray-700 text-xs sm:text-sm mt-2 line-clamp-2'>
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className='mt-3 sm:mt-4 flex items-center justify-between'>
          <span className='text-primary font-bold text-sm sm:text-lg'>
            ${product.price}
          </span>
          <span className='text-yellow-500 font-medium flex items-center gap-1 text-xs sm:text-sm'>
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
