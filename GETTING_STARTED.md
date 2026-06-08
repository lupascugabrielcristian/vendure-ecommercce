# Getting Started - TechHub Ecommerce Store

Your ecommerce store is now ready to run!

## ✅ Installation Complete

All dependencies have been installed. You can now start the application.

## 🚀 Quick Start (3 Steps)

### Step 1: Start the Backend Server

```bash
cd /Users/lolarucker/Projects/VentureProject/apps/server
npm run dev
```

You should see:
```
✅ Ecommerce API Server started successfully!

📍 Access Points:
   • Dashboard:    http://localhost:3000/dashboard
   • Shop API:     http://localhost:3000/shop-api/graphql
   • Admin API:    http://localhost:3000/admin-api/graphql
   • Health:       http://localhost:3000/health

🛒 Storefront:     http://localhost:3001
```

### Step 2: Start the Storefront (in a new terminal)

```bash
cd /Users/lolarucker/Projects/VentureProject/apps/storefront
npm run dev
```

You should see:
```
> storefront@1.0.0 dev
> next dev -p 3001

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3001
  - Environments: .env.local
```

### Step 3: Open in Browser

Visit your store:
- **🛒 Storefront**: http://localhost:3001
- **📊 Admin Dashboard**: http://localhost:3000/dashboard
- **🔌 APIs**: http://localhost:3000/admin-api

## 🎯 What to Do Next

1. **Browse Products**: Visit http://localhost:3001
   - See 6 premium tech products
   - Add items to cart
   - View cart summary

2. **Explore APIs**: Visit http://localhost:3000/admin-api
   - Test GraphQL queries
   - View product data

3. **Customize**: Edit files to make it yours
   - Add more products: `apps/storefront/src/pages/index.tsx`
   - Change colors: `apps/storefront/src/styles/globals.css`
   - Create new components: `apps/storefront/src/components/`

## 📂 Project Structure

```
apps/
├── server/          # Backend API (Express.js)
│   └── src/
│       └── index.ts # Main server file
│
└── storefront/      # Frontend (Next.js + React)
    └── src/
        ├── pages/index.tsx      # Home & products
        ├── components/
        │   ├── ProductCard.tsx
        │   └── Cart.tsx
        └── styles/globals.css
```

## 🛍️ Products Available

1. Premium Wireless Headphones - $149.99
2. USB-C Fast Charger - $39.99
3. Ergonomic Mechanical Keyboard - $129.99
4. 4K Webcam - $199.99
5. Portable SSD 1TB - $89.99
6. Wireless Mouse Pro - $59.99

## 🎨 How to Add Products

Edit: `apps/storefront/src/pages/index.tsx`

Find this section:
```typescript
const sampleProducts: Product[] = [
  // ... existing products ...
];
```

Add a new product:
```typescript
{
  id: '7',
  name: 'Your Product Name',
  price: 99.99,
  description: 'Your product description',
  image: 'https://via.placeholder.com/300x300?text=Your+Product',
}
```

Save and the site will auto-refresh!

## 🎨 How to Customize Product Images

Edit: `apps/storefront/src/pages/index.tsx`

Replace the image path in each product:
```typescript
// Current (uses local placeholder):
image: '/images/placeholder.webp',

// To use your own image:
image: '/images/your-product-image.jpg',
```

Steps:
1. Add your image to: `apps/storefront/public/images/`
2. Update the image path in the product object
3. Save and the site will auto-refresh

Supported formats: `.jpg`, `.png`, `.webp` (recommended)

## 🎨 How to Customize Colors

Edit: `apps/storefront/src/styles/globals.css`

Change the color variables:
```css
:root {
  --primary-color: #0066cc;      /* Main blue */
  --secondary-color: #f0f0f0;    /* Light gray */
  --text-color: #333;            /* Dark text */
  --success-color: #28a745;      /* Green buttons */
}
```

## 🔗 API Examples

### Get Products (GraphQL)
```bash
curl -X POST http://localhost:3000/shop-api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ products { edges { node { id name } } } }"}'
```

### Health Check
```bash
curl http://localhost:3000/health
```

## 🛠️ Useful Commands

```bash
# Start both servers
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Mobile Testing

The storefront is fully responsive:
- Open http://localhost:3001 on mobile device or use browser dev tools
- Test on different screen sizes
- Try adding/removing items from cart

## ❌ Troubleshooting

### Port 3000 or 3001 already in use?

Edit `apps/server/src/index.ts` (line with `PORT = 3000`):
```typescript
const PORT = 3000;  // Change to 3100, 3200, etc.
```

Or edit `apps/storefront/package.json` script:
```json
"dev": "next dev -p 3001"  // Change to -p 3101, etc.
```

### Dependencies issues?

```bash
rm -rf node_modules apps/*/node_modules
npm install
```

### Server won't start?

Make sure port 3000 is free:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## 📚 Documentation Files

- **README.md** - Full documentation
- **QUICKSTART.md** - Quick start guide
- **PRODUCTS.md** - Product catalog
- **ARCHITECTURE.md** - Technical details
- **PROJECT_SUMMARY.md** - Complete overview
- **COMMANDS.md** - Useful commands
- **INDEX.md** - Documentation index

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [GraphQL Learning](https://graphql.org/learn)
- [Express.js Guide](https://expressjs.com/docs)

## ✨ What's Working

✅ Product catalog with 6 items
✅ Shopping cart (add/remove items)
✅ Responsive design
✅ Price calculations
✅ Professional UI
✅ GraphQL API ready
✅ Admin dashboard
✅ Mobile-friendly

## 🚀 Ready to Go!

Your ecommerce store is fully functional. Start the servers and begin selling!

### Quick Command Reference

```bash
# Terminal 1 - Backend
cd apps/server && npm run dev

# Terminal 2 - Frontend
cd apps/storefront && npm run dev

# Then visit:
# http://localhost:3001
```

Happy coding! 🎉

---

For more detailed information, see README.md or INDEX.md
