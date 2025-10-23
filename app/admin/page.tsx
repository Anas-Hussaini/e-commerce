"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { 
  PackageIcon, 
  DollarSignIcon, 
  ShoppingBagIcon, 
  TrendingUpIcon,
  MoreHorizontalIcon,
  PlusIcon
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function AdminDashboard() {
  // Mock data
  const stats = {
    totalRevenue: 125430,
    totalOrders: 248,
    totalProducts: products.length,
    activeCustomers: 1893,
  }

  const recentOrders = [
    { id: "ORD-001", customer: "John Smith", amount: 1299, status: "processing", date: "2024-01-20" },
    { id: "ORD-002", customer: "Sarah Johnson", amount: 2499, status: "shipped", date: "2024-01-20" },
    { id: "ORD-003", customer: "Mike Wilson", amount: 899, status: "delivered", date: "2024-01-19" },
    { id: "ORD-004", customer: "Emily Brown", amount: 1799, status: "processing", date: "2024-01-19" },
    { id: "ORD-005", customer: "David Lee", amount: 599, status: "shipped", date: "2024-01-18" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your premium ecommerce store</p>
        </div>
        <Button>
          <PlusIcon className="mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSignIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatPrice(stats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingBagIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <PackageIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-blue-600">+2</span> new this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <TrendingUpIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeCustomers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+15.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="orders" className="w-full">
        <TabsList>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={
                        order.status === "delivered" ? "outline" :
                        order.status === "shipped" ? "default" :
                        "secondary"
                      }>
                        {order.status}
                      </Badge>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(order.amount)}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Update Status</DropdownMenuItem>
                          <DropdownMenuItem>Send Email</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">Cancel Order</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.slice(0, 5).map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-lg relative overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.brand}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={product.inStock ? "outline" : "secondary"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(product.price)}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Product</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Update Stock</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">New Customers</p>
                    <p className="text-2xl font-bold">127</p>
                    <p className="text-xs text-green-600 mt-1">+18.2%</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Returning</p>
                    <p className="text-2xl font-bold">1,766</p>
                    <p className="text-xs text-green-600 mt-1">+12.5%</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Avg. Order Value</p>
                    <p className="text-2xl font-bold">{formatPrice(892)}</p>
                    <p className="text-xs text-green-600 mt-1">+5.3%</p>
                  </div>
                </div>
                <div className="text-center p-8 border-2 border-dashed rounded-lg">
                  <p className="text-muted-foreground">Customer analytics coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Clothing", value: 45230, percentage: 36 },
                    { name: "Watches", value: 38920, percentage: 31 },
                    { name: "Accessories", value: 28150, percentage: 22 },
                    { name: "Footwear", value: 13130, percentage: 11 },
                  ].map((category) => (
                    <div key={category.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{category.name}</span>
                        <span className="font-semibold">{formatPrice(category.value)}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.filter(p => p.featured).slice(0, 4).map((product) => (
                    <div key={product.id} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-muted rounded-lg relative overflow-hidden flex-shrink-0">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
                        <p className="text-xs text-muted-foreground">42 sold</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

