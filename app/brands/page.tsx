import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/data/products"
import Link from "next/link"

export default function BrandsPage() {
  const brands = Array.from(new Set(products.map(p => p.brand)))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Premium Brands</h1>
          <p className="text-lg text-muted-foreground">
            Discover the world's most prestigious luxury brands, curated exclusively for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brands.map((brand) => {
            const brandProducts = products.filter(p => p.brand === brand)
            const brandImage = brandProducts[0]?.images[0]

            return (
              <Link key={brand} href={`/products?brand=${encodeURIComponent(brand)}`}>
                <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-muted rounded-lg relative overflow-hidden flex-shrink-0">
                        <img 
                          src={brandImage} 
                          alt={brand}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{brand}</h3>
                        <p className="text-sm text-muted-foreground">
                          {brandProducts.length} product{brandProducts.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

