import { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { Carousel, type CarouselResponsiveOption } from 'primereact/carousel'
import { Tag } from 'primereact/tag'
import { ProductService } from '../Service/ProductService'

interface Product {
  id: string
  code: string
  name: string
  description: string
  image: string
  price: number
  category: string
  quantity: number
  inventoryStatus: string
  rating: number
  thumbnail: string
  title: string
}

export default function CircularDemo() {
  const [products, setProducts] = useState<Product[]>([])

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success'
      case 'LOWSTOCK':
        return 'warning'
      case 'OUTOFSTOCK':
        return 'danger'
      default:
        return null
    }
  }

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    )
  }, [])

  const productTemplate = (product: Product) => {
    return (
      <div
        key={product.id}
        className='border surface-border border-round m-2 text-center bg-[#F8F8F6]  '
      >
        <div className='rounded-md p-4 text-center hover:shadow-lg transition-shadow duration-300'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='w-full h-80 object-contain mx-auto mb-4'
          />
        </div>
        <div>
          <h4 className='mb-1'>{product.name}</h4>
          {/* <h6 className='mt-0 mb-3'>${product.price}</h6> */}
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className='mt-5 flex flex-wrap gap-2 justify-content-center'>
            <Button
              icon='pi pi-search'
              className='p-button p-button-rounded'
              aria-label='View details'
            />
            <Button
              icon='pi pi-star-fill'
              className='p-button-success p-button-rounded'
              aria-label='Add to favorites'
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='card'>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className='custom-carousel'
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  )
}
