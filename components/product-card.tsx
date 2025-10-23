import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <Badge variant="destructive" className="absolute top-4 left-4">
              -{discount}%
            </Badge>
          )}
          {product.featured && (
            <Badge className="absolute top-4 right-4">Featured</Badge>
          )}
        </div>
        <CardHeader>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
            <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Badge variant={product.inStock ? "outline" : "secondary"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}

