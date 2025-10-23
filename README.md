# Luxe - Premium Ecommerce Platform

A sophisticated ecommerce platform built with Next.js 14, TypeScript, and shadcn/ui components for premium brands and luxury goods.

## Features

### Customer Features
- 🏠 **Premium Homepage** - Beautiful hero section with featured products
- 🛍️ **Product Catalog** - Advanced filtering and sorting capabilities
- 🔍 **Product Details** - Comprehensive product pages with image galleries
- 🛒 **Shopping Cart** - Full cart management with quantity controls
- 💳 **Checkout Flow** - Secure checkout with multiple payment options
- 📱 **Responsive Design** - Optimized for all devices

### Admin Features
- 📊 **Dashboard** - Comprehensive analytics and statistics
- 📦 **Order Management** - Track and manage customer orders
- 🏷️ **Product Management** - Add, edit, and manage products
- 👥 **Customer Insights** - View customer analytics

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui v4
- **State Management:** Zustand
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd upwork02
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
upwork02/
├── app/                      # Next.js app directory
│   ├── admin/               # Admin dashboard
│   ├── cart/                # Shopping cart page
│   ├── checkout/            # Checkout flow
│   ├── products/            # Product pages
│   │   └── [id]/           # Dynamic product detail
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── navbar.tsx          # Navigation component
├── data/
│   └── products.ts         # Product data
├── lib/
│   └── utils.ts            # Utility functions
├── store/
│   └── cart-store.ts       # Zustand cart store
└── types/
    └── index.ts            # TypeScript types
\`\`\`

## Key Pages

- `/` - Homepage with featured products
- `/products` - Product listing with filters
- `/products/[id]` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/order-confirmation` - Order success page
- `/admin` - Admin dashboard

## Features in Detail

### Shopping Cart
- Persistent cart using Zustand with localStorage
- Add/remove items
- Update quantities
- Size and color selection
- Real-time total calculation

### Product Filtering
- Filter by category
- Sort by price, name, featured
- Brand filtering
- Stock availability

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

## Customization

### Adding Products

Edit `data/products.ts` to add or modify products:

\`\`\`typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 999,
  images: ['image-url'],
  category: 'Category',
  brand: 'Brand Name',
  inStock: true,
  featured: false
}
\`\`\`

### Styling

The project uses Tailwind CSS with custom theme configuration in `tailwind.config.ts`. Modify the theme to match your brand:

- Colors: Edit CSS variables in `app/globals.css`
- Components: Customize shadcn/ui components in `components/ui/`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
\`\`\`bash
npm run build
\`\`\`

Start production server:
\`\`\`bash
npm start
\`\`\`

## License

MIT

## Support

For support, please open an issue in the repository.

