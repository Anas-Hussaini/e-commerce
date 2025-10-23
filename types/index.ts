export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  brand: string
  inStock: boolean
  featured?: boolean
  tags?: string[]
  sizes?: string[]
  colors?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  createdAt: Date
  customerInfo: CustomerInfo
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  country: string
}

