import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import { getProducts, getCategories } from '@/services/api'

async function ProductsPage() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <main>
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          <div className="flex items-center gap-4">
            <select className="rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <select className="rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProductsPage 