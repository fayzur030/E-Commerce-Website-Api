export type Product = {
  id: number
  price: number
  title: string
  rating: number
  images: string
  category: {
    id: number
    name: string
  }
  description: string
  brand: string
  color: string
  model: string
  thumbnail: string
}
