"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCartStore } from "@/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { CreditCardIcon, WalletIcon, LockIcon } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && items.length === 0) {
      router.push("/cart")
    }
  }, [isMounted, items.length, router])

  const subtotal = getTotalPrice()
  const shipping = subtotal > 500 ? 0 : 25
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    clearCart()
    router.push("/order-confirmation")
  }

  if (!isMounted || items.length === 0) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Address</label>
                  <Input placeholder="123 Main St, Apt 4B" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">City</label>
                    <Input placeholder="New York" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Postal Code</label>
                    <Input placeholder="10001" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Country</label>
                  <Input placeholder="United States" required />
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="card">
                      <CreditCardIcon className="mr-2 size-4" />
                      Card
                    </TabsTrigger>
                    <TabsTrigger value="paypal">
                      <WalletIcon className="mr-2 size-4" />
                      PayPal
                    </TabsTrigger>
                    <TabsTrigger value="crypto">
                      <WalletIcon className="mr-2 size-4" />
                      Crypto
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="space-y-4 mt-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Card Number</label>
                      <Input placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                        <Input placeholder="MM/YY" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">CVV</label>
                        <Input placeholder="123" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Cardholder Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="mt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      You will be redirected to PayPal to complete your purchase.
                    </p>
                    <Button type="button" className="w-full" variant="outline">
                      Continue with PayPal
                    </Button>
                  </TabsContent>
                  <TabsContent value="crypto" className="mt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Pay with Bitcoin, Ethereum, or other cryptocurrencies.
                    </p>
                    <Button type="button" className="w-full" variant="outline">
                      Continue with Crypto
                    </Button>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg flex items-center gap-2">
                  <LockIcon className="size-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Your payment information is secure and encrypted
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
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
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Pay ${formatPrice(total)}`}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By completing your purchase you agree to our Terms of Service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}

