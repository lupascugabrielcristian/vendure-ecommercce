# TechHub Ecommerce Store - Built with Vendure

A sample ecommerce website demonstrating the Vendure headless commerce framework with a modern Next.js storefront.

## Project Structure

```
ecommerce-store/
├── apps/
│   ├── server/          # Vendure backend server
│   │   └── src/
│   │       ├── index.ts
│   │       └── vendure-config.ts
│   └── storefront/      # Next.js frontend storefront
│       └── src/
│           ├── pages/
│           ├── components/
│           └── styles/
└── package.json         # Monorepo root
```

## Features

### Backend (Vendure)
- GraphQL APIs (Shop API & Admin API)
- RESTful endpoints
- User authentication & authorization
- Product catalog management
- Order processing
- SQLite database (configured for development)

### Frontend (Next.js)
- Modern React-based storefront
- Product listing with 6 sample tech products
- Shopping cart functionality
- Responsive design
- Tailored styling for ecommerce experience

## Sample Products

The store includes 6 premium tech products:

1. **Premium Wireless Headphones** - $149.99
   - Active noise cancellation, 30-hour battery life

2. **USB-C Fast Charger** - $39.99
   - 65W ultra-fast charging with multiple ports

3. **Ergonomic Mechanical Keyboard** - $129.99
   - Customizable RGB lighting and tactile switches

4. **4K Webcam** - $199.99
   - Crystal-clear 4K with auto-focus

5. **Portable SSD 1TB** - $89.99
   - Fast 1050 MB/s read speed

6. **Wireless Mouse Pro** - $59.99
   - 8 programmable buttons, perfect for work and gaming

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/lolarucker/Projects/VentureProject
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Option 1: Run both server and storefront concurrently
```bash
npm run dev
```

This will start:
- **Vendure Server**: http://localhost:3000
  - Admin API: http://localhost:3000/admin-api
  - Shop API: http://localhost:3000/shop-api
- **Next.js Storefront**: http://localhost:3001

#### Option 2: Run separately

Terminal 1 - Start the server:
```bash
cd apps/server
npm install
npm run dev
```

Terminal 2 - Start the storefront:
```bash
cd apps/storefront
npm install
npm run dev
```

### Default Admin Credentials

- **Username**: superadmin
- **Password**: superadmin

Access the Vendure Admin Dashboard at: http://localhost:3000/dashboard

## Project File Locations

### Server Configuration
- **Main server file**: `apps/server/src/index.ts`
- **Vendure config**: `apps/server/src/vendure-config.ts`
- **Database**: `apps/server/vendure.sqlite` (created on first run)

### Storefront
- **Home page**: `apps/storefront/src/pages/index.tsx`
- **Product card**: `apps/storefront/src/components/ProductCard.tsx`
- **Shopping cart**: `apps/storefront/src/components/Cart.tsx`
- **Styles**: `apps/storefront/src/styles/globals.css`

## How to Add Products

Products are currently hardcoded in the storefront. To add more products:

1. Edit `apps/storefront/src/pages/index.tsx`
2. Add new entries to the `sampleProducts` array in the `useEffect` hook:

```typescript
{
  id: '7',
  name: 'Your Product Name',
  price: 99.99,
  description: 'Your product description here',
  image: 'https://via.placeholder.com/300x300?text=Your+Product',
}
```

## Accessing the GraphQL API

Once the server is running, you can query the GraphQL APIs:

### Shop API
```
POST http://localhost:3000/shop-api/graphql
```

Example query to get products:
```graphql
query {
  products(first: 10) {
    edges {
      node {
        id
        name
        description
      }
    }
  }
}
```

### Admin API
```
POST http://localhost:3000/admin-api/graphql
```

## Building for Production

### Build both apps:
```bash
npm run build
```

### Start the server in production:
```bash
npm start
```

## Technology Stack

### Backend
- **Vendure**: Headless commerce framework
- **NestJS**: Node.js framework
- **GraphQL**: API query language
- **TypeORM**: Database ORM
- **SQLite**: Development database

### Frontend
- **Next.js**: React framework
- **React**: UI library
- **TypeScript**: Type safety
- **CSS**: Custom styling

## Resources

- [Vendure Documentation](https://docs.vendure.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [GraphQL Documentation](https://graphql.org)

## Troubleshooting

### Port already in use
If port 3000 or 3001 is already in use, modify the respective npm scripts in `package.json`

### Database issues
Delete `apps/server/vendure.sqlite` and restart the server to reset the database

### Dependencies not installing
Try clearing npm cache and reinstalling:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## License

MIT

---

Happy hacking! 🚀
