import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import type { Product } from '../Types/productType'
import { auth } from '../firebase.init'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [user] = useAuthState(auth)

  const handleBuyNow = () => {
    if (!user) {
      navigate('/signup', { state: { from: `/checkout?product=${id}` } })
    } else {
      navigate(`/checkout?product=${id}`)
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        )
        if (!response.ok) throw new Error('Product not found')
        const data = await response.json()
        setProduct(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error fetching product:', err.message)
          setError(err.message)
        } else {
          console.error('Error fetching product:', err)
          setError('Something went wrong')
        }
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchProduct()
  }, [id])

  if (loading)
    return <p className='text-center text-gray-500 mt-10'>Loading...</p>
  if (error) return <p className='text-center text-red-500 mt-10'>{error}</p>
  if (!product)
    return <p className='text-center text-gray-500 mt-10'>Product not found</p>

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-8 border shadow-lg rounded-lg bg-white'>
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-shrink-0 w-full lg:w-1/3'>
          <img
            src={product.images?.[0] || '/placeholder.png'}
            alt={product.title}
            className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg'
          />
        </div>

        <div className='flex flex-col justify-between w-full lg:w-2/3'>
          <div>
            <h1 className='text-xl sm:text-2xl font-bold mb-2'>
              {product.title}
            </h1>
            <p className='text-gray-700 mb-4 text-sm sm:text-base'>
              {product.description}
            </p>
            <p className='text-lg sm:text-xl font-semibold text-primary mb-2'>
              ${product.price}
            </p>
            <p className='text-sm sm:text-base text-gray-500 mb-1'>
              Category:{' '}
              <span className='capitalize'>
                {product.category?.name || 'Unknown'}
              </span>
            </p>
          </div>

          <div className='mt-6 flex flex-col sm:flex-row gap-3'>
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            <button className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
