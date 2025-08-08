export const ProductService = {
  getProductsSmall: async () => {
    const res = await fetch(`https://dummyjson.com/products/category/mens-shirts

`)
    const data = await res.json()
    return data.products
  },
}
