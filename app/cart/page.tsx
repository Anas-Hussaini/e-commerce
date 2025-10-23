"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCartStore } from "@/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { TrashIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 500 ? 0 : 25
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Add some items to get started</p>
        <Button asChild size="lg">
          <Link href="/products">
            Continue Shopping
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <Link href={`/products/${item.product.id}`}>
                          <h3 className="font-semibold text-lg hover:underline">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <TrashIcon className="size-4" />
                      </Button>
                    </div>

                    <div className="flex gap-4 text-sm">
                      {item.selectedColor && (
                        <span className="text-muted-foreground">
                          Color: <span className="text-foreground">{item.selectedColor}</span>
                        </span>
                      )}
                      {item.selectedSize && (
                        <span className="text-muted-foreground">
                          Size: <span className="text-foreground">{item.selectedSize}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <label className="text-sm">Quantity:</label>
                        <Select
                          value={item.quantity.toString()}
                          onValueChange={(value) => updateQuantity(item.product.id, parseInt(value))}
                        >
                          <SelectTrigger className="w-20" size="sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(item.product.price)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "FREE" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (8%)</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground border-t pt-4">
                  Add {formatPrice(500 - subtotal)} more for free shipping
                </p>
              )}
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">
                  Proceed to Checkout
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/products">
                  <ArrowLeftIcon className="mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

