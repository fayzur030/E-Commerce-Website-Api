import { useEffect, useState } from 'react'
import type { Product } from '../Types/productType'
import ProductCart from '../Components/ProductCart'
import CircularDemo from '../Components/carousel'

const HomePage = () => {
  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  // const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=100`)
      const data = await response.json()
      setProduct(data.products)
      // console.log('Product', data)
      setLoading(false)
    }
    fetchProduct()
  }, [])
  return (
    <div className='bg-[#F6F1RD] max-w-6xl mx-auto rounded-lg shadow p-4 flex-1 text-black'>
      <section>
        <CircularDemo />
      </section>
      {loading ? (
        <div className='flex justify-center mt-10'>
          {' '}
          <span className='loading loading-spinner loading-lg text-primary'></span>{' '}
        </div>
      ) : product.length === 0 ? (
        <p>No product found</p>
      ) : (
        <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto'>
          {product.map((product: Product) => (
            <div
              key={product.id}
              className='transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg'
            >
              <ProductCart product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage
