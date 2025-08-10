import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../Types/productType'
import SignUpModal from '../Components/LoginModal'

const ProductDetails = () => {
  // const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate('/sign-up')
  // }
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
    // alert('Please Sign Up to Buy Now')
  }

  const onClose = () => {
    setIsModalOpen(false)
  }
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
        console.log('Product Details:', data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    if (id) {
      fetchProduct()
    }
  }, [id])

  if (!id) return <p className='text-center text-gray-500 mt-10'>Loading...</p>

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-8 border shadow-lg rounded-lg bg-white'>
      {product ? (
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* ---------- Product Image Section ---------- */}
          <div className='flex-shrink-0 w-full lg:w-1/3'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg '
              // h-64 = mobile, sm:h-80 = tablet, lg:h-full = desktop
            />
          </div>

          {/* ---------- Product Info Section ---------- */}
          <div className='flex flex-col justify-between w-full lg:w-2/3'>
            <div>
              {/* Product Title */}
              <h1 className='text-xl sm:text-2xl font-bold mb-2'>
                {product.title}
              </h1>

              {/* Product Description */}
              <p className='text-gray-700 mb-4 text-sm sm:text-base'>
                {product.description}
              </p>

              {/* Product Price */}
              <p className='text-lg sm:text-xl font-semibold text-primary mb-2'>
                ${product.price}
              </p>

              {/* Category */}
              <p className='text-sm sm:text-base text-gray-500 mb-1'>
                Category: <span className='capitalize'>{product.category}</span>
              </p>

              {/* Rating */}
              <p className='text-sm sm:text-base text-yellow-500'>
                ⭐ Rating: {product.rating}
              </p>
            </div>

            {/* ---------- Action Buttons ---------- */}
            <div className='mt-6 flex flex-col sm:flex-row gap-3'>
              {/* Buy Now Button */}
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
                onClick={handleClick}
              >
                Buy Now
              </button>
              <SignUpModal isOpen={isModalOpen} onClose={onClose} />

              {/* Add to Cart Button */}
              <button className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-500'>Product not found</p>
      )}
    </div>
  )
}

export default ProductDetails
