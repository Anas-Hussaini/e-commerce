import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <Separator />
              <div className="flex gap-2">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-sm space-y-1 text-muted-foreground">
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p>123 Main Street, Apt 4B</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </address>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="flex items-center justify-center min-h-[200px]">
                <Button variant="outline">
                  Add New Address
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Password & Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Current Password</label>
                <Input type="password" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">New Password</label>
                <Input type="password" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Confirm New Password</label>
                <Input type="password" />
              </div>
              <Separator />
              <div className="flex gap-2">
                <Button>Update Password</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your orders and new products
                  </p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Communications</p>
                  <p className="text-sm text-muted-foreground">
                    Special offers and promotions
                  </p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get shipping updates via text message
                  </p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <Separator />
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

