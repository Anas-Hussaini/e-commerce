# Quick Start Guide

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure Overview

```
upwork02/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Homepage ✨
│   ├── products/              # Product pages
│   │   ├── page.tsx          # Product listing with filters
│   │   └── [id]/page.tsx     # Product detail page
│   ├── cart/page.tsx          # Shopping cart 🛒
│   ├── checkout/page.tsx      # Checkout flow 💳
│   ├── admin/page.tsx         # Admin dashboard 📊
│   ├── orders/page.tsx        # Order history 📦
│   ├── account/page.tsx       # User account settings ⚙️
│   ├── brands/page.tsx        # Brand showcase
│   ├── collections/page.tsx   # Curated collections
│   └── layout.tsx             # Root layout with navbar
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   ├── separator.tsx
│   │   └── skeleton.tsx
│   ├── navbar.tsx             # Main navigation
│   └── product-card.tsx       # Reusable product card
├── store/
│   └── cart-store.ts          # Zustand cart state management
├── data/
│   └── products.ts            # Product data (8 premium products)
├── types/
│   └── index.ts               # TypeScript type definitions
└── lib/
    └── utils.ts               # Utility functions (cn, formatPrice)
```

## Key Features

### 🛍️ Customer Experience
- **Homepage** - Beautiful hero section with featured products
- **Product Catalog** - Advanced filtering by category, brand, price
- **Product Details** - Image gallery, size/color selection, detailed info
- **Shopping Cart** - Full cart management with quantity controls
- **Checkout** - Secure checkout with multiple payment options
- **Order Tracking** - View order history and status
- **User Account** - Profile, addresses, security settings

### 👨‍💼 Admin Dashboard
- **Analytics** - Revenue, orders, products, customer metrics
- **Order Management** - View and manage customer orders
- **Product Management** - Add, edit, delete products
- **Customer Insights** - Customer analytics and metrics

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured products |
| `/products` | Product listing page |
| `/products/[id]` | Individual product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout process |
| `/order-confirmation` | Order success page |
| `/orders` | Order history |
| `/account` | User account settings |
| `/brands` | Brand showcase |
| `/collections` | Curated collections |
| `/admin` | Admin dashboard |

## Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui v4
- **Icons:** Lucide React
- **State Management:** Zustand (for cart)
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## Customization Tips

### Adding New Products
Edit `data/products.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Detailed description',
  price: 999,
  images: ['https://...'],
  category: 'Category',
  brand: 'Brand Name',
  inStock: true,
  featured: false,
  sizes: ['S', 'M', 'L'],
  colors: ['Black', 'White']
}
```

### Changing Theme Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... modify other colors */
}
```

### Adding New Pages
Create a new file in the `app/` directory:
```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>
}
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Production Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Other Platforms
```bash
npm run build
npm start
```

## Troubleshooting

**Issue: Images not loading**
- Ensure image URLs are valid
- Check Next.js image configuration in `next.config.mjs`

**Issue: Cart not persisting**
- Zustand persist middleware uses localStorage
- Clear browser cache if needed

**Issue: TypeScript errors**
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` configuration

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. 🎨 Customize theme colors
4. 📦 Add your products
5. 🚀 Deploy to production

## Support

For questions or issues:
- Check the main README.md
- Review component documentation in `components/ui/`
- Inspect data structure in `types/index.ts`

---

**Built with ❤️ using shadcn/ui components**

