"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store/cart-store"
import { ShoppingBagIcon, HeartIcon, TruckIcon, ShieldCheckIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const product = products.find(p => p.id === params.id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [quantity, setQuantity] = useState(1)

  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    return <div className="container mx-auto px-4 py-12">Product not found</div>
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor)
    router.push("/cart")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/products">
          <ArrowLeftIcon className="mr-2" />
          Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.originalPrice && (
              <Badge variant="destructive" className="absolute top-4 left-4">
                Sale - {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.brand}</p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-2xl text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Badge variant={product.inStock ? "outline" : "secondary"} className="text-sm">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
            {product.featured && <Badge>Featured Item</Badge>}
          </div>

          <p className="text-base leading-relaxed">{product.description}</p>

          {/* Options */}
          <div className="space-y-4">
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-sm font-medium mb-2 block">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>{color}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="text-sm font-medium mb-2 block">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <Select value={quantity.toString()} onValueChange={(v) => setQuantity(parseInt(v))}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingBagIcon className="mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <HeartIcon className="size-5" />
            </Button>
          </div>

          {/* Features */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TruckIcon className="size-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="size-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Authenticity Guaranteed</p>
                  <p className="text-sm text-muted-foreground">100% genuine product</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
              <TabsTrigger value="care" className="flex-1">Care</TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4 space-y-2">
              <p className="text-sm">{product.description}</p>
              {product.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="care" className="pt-4">
              <ul className="text-sm space-y-2">
                <li>• Professional dry clean only</li>
                <li>• Store in dust bag when not in use</li>
                <li>• Avoid direct sunlight and humidity</li>
                <li>• Handle with care to maintain quality</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <ul className="text-sm space-y-2">
                <li>• Free standard shipping on orders over $500</li>
                <li>• Express shipping available</li>
                <li>• 30-day return policy</li>
                <li>• Signature required upon delivery</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

