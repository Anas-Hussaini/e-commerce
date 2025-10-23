import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe - Premium Fashion & Lifestyle",
  description: "Discover the finest selection of luxury brands and premium products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Luxe</h3>
                <p className="text-sm text-muted-foreground">
                  Premium brands and luxury goods for the discerning customer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/products?category=Clothing">Clothing</a></li>
                  <li><a href="/products?category=Accessories">Accessories</a></li>
                  <li><a href="/products?category=Watches">Watches</a></li>
                  <li><a href="/products?category=Footwear">Footwear</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/shipping">Shipping Info</a></li>
                  <li><a href="/returns">Returns</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Luxe. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

