import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CollectionsPage() {
  const collections = [
    {
      id: "spring-2024",
      name: "Spring Collection 2024",
      description: "Fresh styles for the new season",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      tag: "New",
      itemCount: 24
    },
    {
      id: "luxury-essentials",
      name: "Luxury Essentials",
      description: "Timeless pieces for every wardrobe",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      tag: "Popular",
      itemCount: 18
    },
    {
      id: "premium-accessories",
      name: "Premium Accessories",
      description: "Elevate your style with curated accessories",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      tag: "Trending",
      itemCount: 32
    },
    {
      id: "executive-collection",
      name: "Executive Collection",
      description: "Sophisticated pieces for the modern professional",
      image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&q=80",
      tag: "Featured",
      itemCount: 15
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Curated Collections</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our carefully selected collections, each telling a unique story of luxury and style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <Link key={collection.id} href={`/products?collection=${collection.id}`}>
            <Card className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 z-10">
                  {collection.tag}
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <CardTitle className="text-2xl mb-2 text-white">
                    {collection.name}
                  </CardTitle>
                  <p className="text-white/90 mb-2">{collection.description}</p>
                  <p className="text-sm text-white/70">{collection.itemCount} items</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

