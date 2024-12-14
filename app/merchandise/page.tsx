'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from '@/components/Navbar'

interface Product {
  id: number
  name: string
  price: number
  image: string
  sizes: string[]
}

const products: Product[] = [
  { id: 1, name: "Sonic Fest Logo T-Shirt", price: 250, image: "https://thebanyantee.com/cdn/shop/files/Baby-Pink-T-shirt_599c6286-77e0-45aa-9ea3-ab92f4e2bea1.jpg?v=1721381182&width=1920", sizes: ["S", "M", "L", "XL"] },
  { id: 2, name: "Festival Lineup Hoodie", price: 450, image: "https://www.redwolf.in/image/cache/catalog/hoodies/marvel-loki-master-of-mischief-hoodie-india-back-600x800.jpg?m=1703072566", sizes: ["S", "M", "L", "XL"] },
  { id: 3, name: "Neon Glow Tank Top", price: 200, image: "https://img.freepik.com/premium-photo/slim-man-tank-top-neon-manga-art-design-with-bold-colors-simple-glow-art-design-tshirt-tattoo_655090-3295141.jpg", sizes: ["S", "M", "L"] },
  { id: 4, name: "Sonic Fest Snapback", price: 300, image: "https://static.nbastore.in/resized/900X900/55/chicago-bulls-champions-patch-black-9fifty-snapback-cap-black-651e69098c617.jpg", sizes: ["One Size"] },
  { id: 5, name: "Limited Edition Poster", price: 150, image: "https://i.pinimg.com/736x/c8/f6/c3/c8f6c33c1c74c071561bfef325442c9d.jpg", sizes: ["18x24"] },
  { id: 6, name: "Festival Bandana", price: 100, image: "https://i.etsystatic.com/12089475/r/il/60e229/4243791634/il_300x300.4243791634_sms2.jpg", sizes: ["One Size"] },
]

export default function MerchandisePage() {
  const [cart, setCart] = useState<{id: number, quantity: number, size: string}[]>([])

  const addToCart = (productId: number, size: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId && item.size === size)
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { id: productId, quantity: 1, size }]
      }
    })
  }

  return (
    <>
        <Navbar/>
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans pt-20">
      <ScrollReveal>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#7ed321] mb-8">
              SONIC FEST MERCH
            </h1>
            <p className="text-xl text-center mb-12">
              Take home a piece of the festival! Get your official Sonic Fest merchandise here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#ffd700] mb-2">{product.name}</h3>
                    <p className="text-lg mb-4">₹{product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4">
                      <Select>
                        <SelectTrigger className="w-[180px] bg-[#3a3a3a] border-[#7ed321]">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {product.sizes.map((size) => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button 
                        onClick={() => addToCart(product.id, product.sizes[0])}
                        className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-6 py-2 text-sm font-bold"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* <ScrollReveal>
        <section className="py-16 px-4 bg-[#2a2a2a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffd700] mb-8">
              YOUR CART
            </h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => {
                  const product = products.find(p => p.id === item.id)
                  return product ? (
                    <div key={`₹{item.id}-₹{item.size}`} className="flex items-center justify-between bg-[#3a3a3a] p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={50}
                          height={50}
                          objectFit="cover"
                          className="rounded"
                        />
                        <div className="text-left">
                          <h3 className="font-bold">{product.name}</h3>
                          <p>Size: {item.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value)
                            setCart(prevCart => prevCart.map(cartItem => 
                              cartItem.id === item.id && cartItem.size === item.size
                                ? { ...cartItem, quantity: newQuantity }
                                : cartItem
                            ))
                          }}
                          className="w-16 bg-[#4a4a4a] border-[#7ed321] text-white"
                          min="1"
                        />
                        <p>₹{(product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ) : null
                })}
                <div className="text-right text-xl font-bold">
                  Total: ₹{cart.reduce((total, item) => {
                    const product = products.find(p => p.id === item.id)
                    return total + (product ? product.price * item.quantity : 0)
                  }, 0).toFixed(2)}
                </div>
                <Button className="bg-[#7ed321] hover:bg-[#6cb11e] text-[#1e1e1e] rounded-full px-8 py-3 text-lg font-bold mt-4">
                  Checkout
                </Button>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal> */}

      <footer className="bg-[#1e1e1e] text-center py-8">
        <p className="text-sm text-[#7ed321]">© 2025 Sonic Fest. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

