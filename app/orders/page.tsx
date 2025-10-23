import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { PackageIcon, TruckIcon, CheckCircleIcon } from "lucide-react"

export default function OrdersPage() {
  // Mock orders data
  const orders = [
    {
      id: "ORD-2024-001",
      date: "January 20, 2024",
      status: "delivered",
      total: 1299,
      items: 1,
      trackingNumber: "1Z999AA10123456784"
    },
    {
      id: "ORD-2024-002",
      date: "January 18, 2024",
      status: "shipped",
      total: 2499,
      items: 2,
      trackingNumber: "1Z999AA10123456785"
    },
    {
      id: "ORD-2024-003",
      date: "January 15, 2024",
      status: "processing",
      total: 899,
      items: 1,
      trackingNumber: null
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircleIcon className="size-5 text-green-600" />
      case "shipped":
        return <TruckIcon className="size-5 text-blue-600" />
      default:
        return <PackageIcon className="size-5 text-orange-600" />
    }
  }

  const getStatusVariant = (status: string): "default" | "outline" | "secondary" => {
    switch (status) {
      case "delivered":
        return "outline"
      case "shipped":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="py-20 text-center">
            <PackageIcon className="size-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
            <Button>Browse Products</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                  </div>
                  <Badge variant={getStatusVariant(order.status)} className="capitalize">
                    {getStatusIcon(order.status)}
                    <span className="ml-2">{order.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-semibold text-lg">{formatPrice(order.total)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Items:</span>
                      <span className="font-medium">{order.items}</span>
                    </div>
                    {order.trackingNumber && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Tracking:</span>
                        <span className="font-mono text-xs">{order.trackingNumber}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 items-start">
                    <Button variant="outline">View Details</Button>
                    {order.status === "delivered" && (
                      <Button variant="outline">Buy Again</Button>
                    )}
                    {order.trackingNumber && (
                      <Button>Track Package</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

