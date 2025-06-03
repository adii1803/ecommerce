'use client'

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/24/outline'

// Mock cart data for demonstration
const cartItems = [
  {
    id: '1',
    name: 'Premium Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    quantity: 1
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    quantity: 2
  }
]

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 9.99
  const total = subtotal + shipping

  return (
    <main>
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 py-6 border-b">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-md">
                      <button className="px-3 py-1 border-r">-</button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button className="px-3 py-1 border-l">+</button>
                    </div>
                    <button className="text-red-600 hover:text-red-500">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="rounded-lg bg-gray-50 px-4 py-6">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  <p className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 