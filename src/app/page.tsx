import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/services/api'

async function Home() {
  // Get all products and select top 3 rated products as featured
  const products = await getProducts()
  const featuredProducts = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3)

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to <span className="text-indigo-500">NextShop</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
              Discover amazing products at great prices. Shop with confidence and enjoy fast delivery.
            </p>
            <div className="mt-10">
              <a
                href="/products"
                className="rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Rated Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
