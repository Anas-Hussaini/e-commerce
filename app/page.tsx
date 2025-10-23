import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, CreditCardIcon } from "lucide-react"

export default function Home() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-3xl px-4">
          <Badge variant="secondary" className="mb-4">Spring Collection 2024</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Timeless Elegance Meets Modern Luxury
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover our curated selection of premium brands and exclusive designs
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/products">
                Shop Collection
                <ArrowRightIcon className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link href="/products?featured=true">
                View Featured
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <TruckIcon className="size-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $500</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <ShieldCheckIcon className="size-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Authenticity Guaranteed</h3>
                <p className="text-sm text-muted-foreground">100% genuine products</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <CreditCardIcon className="size-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">Protected transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selection of our most exclusive pieces, crafted by renowned designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="relative h-80 overflow-hidden rounded-t-xl">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge variant="destructive" className="absolute top-4 left-4">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">
                View All Products
                <ArrowRightIcon className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Clothing', 'Accessories', 'Watches', 'Footwear'].map((category) => (
              <Link 
                key={category} 
                href={`/products?category=${category}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          category === 'Clothing' ? '1445205170230-053b83016050' :
                          category === 'Accessories' ? '1590874103328-eac38a683ce7' :
                          category === 'Watches' ? '1523170335258-f5ed11844a49' :
                          '1614252235316-8c857d38b5f4'
                        }?w=400&q=80`}
                        alt={category}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-center text-lg">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

