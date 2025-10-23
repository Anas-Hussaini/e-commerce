"use client"

import Link from "next/link"
import { ShoppingBagIcon, UserIcon, SearchIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCartStore } from "@/store/cart-store"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            LUXE
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/products?featured=true" className="text-sm font-medium hover:text-primary transition-colors">
              Featured
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors">
              Collections
            </Link>
            <Link href="/brands" className="text-sm font-medium hover:text-primary transition-colors">
              Brands
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <SearchIcon className="size-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link href="/account">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/wishlist">Wishlist</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/admin">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBagIcon className="size-5" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 size-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

