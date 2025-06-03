import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              NextShop
            </Link>
          </div>
          
          <div className="hidden sm:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900">
                Products
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                Categories
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link 
              href="/cart" 
              className="p-2 text-gray-600 hover:text-gray-900 relative"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 