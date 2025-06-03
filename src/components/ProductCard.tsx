'use client'

import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import { Product } from '@/services/api'

export default function ProductCard({ id, title, price, image, description, rating }: Product) {
  const addToCart = () => {
    // TODO: Implement cart functionality
    toast.success('Added to cart!')
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-full w-full object-contain p-4 group-hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${
                  index < Math.round(rating.rate)
                    ? 'text-yellow-400'
                    : 'text-gray-200'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-500">({rating.count})</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
          <button
            onClick={addToCart}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
} 