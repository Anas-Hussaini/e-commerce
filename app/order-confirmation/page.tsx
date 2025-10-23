import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircleIcon, PackageIcon, TruckIcon } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20">
          <CheckCircleIcon className="size-10 text-green-600 dark:text-green-400" />
        </div>

        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                <p className="text-2xl font-bold">#ORD-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">What's Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <PackageIcon className="size-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Order Processing</p>
                      <p className="text-sm text-muted-foreground">
                        We're preparing your items for shipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TruckIcon className="size-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Shipping Updates</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive tracking information via email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/orders">View Order Status</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

