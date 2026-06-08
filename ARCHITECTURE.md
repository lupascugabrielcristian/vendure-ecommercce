# TechHub Ecommerce Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     User's Web Browser                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                  HTTP/HTTPS │
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
    ┌─────────┐         ┌─────────┐        ┌─────────┐
    │Storefront│        │Dashboard │       │Admin API│
    │3001      │        │3000      │       │3000     │
    └────┬────┘        └────┬────┘        └────┬────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                    HTTP/REST
                    GRAPHQL
                            │
                    ┌───────▼────────┐
                    │  Vendure Server│
                    │  Port: 3000    │
                    │  (NestJS)      │
                    └───────┬────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
         ┌────────┐   ┌──────────┐  ┌────────┐
         │GraphQL │   │REST APIs │  │ Plugins│
         │APIs    │   │          │  │        │
         └────┬───┘   └────┬─────┘  └────┬───┘
              │            │             │
              └────────────┼─────────────┘
                           │
                    ┌──────▼──────┐
                    │  TypeORM    │
                    │  (Database) │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │SQLite DB    │
                    │vendure.     │
                    │sqlite       │
                    └─────────────┘
```

## Component Breakdown

### Frontend Layer (Next.js - Port 3001)

```
┌──────────────────────────────────────────┐
│       Next.js Storefront Application      │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │       Home Page (index.tsx)        │ │
│  │  - Product Listing                 │ │
│  │  - Cart Management                 │ │
│  │  - Header & Footer                 │ │
│  └────────────┬───────────────────────┘ │
│               │                          │
│  ┌────────────▼───────────────────────┐ │
│  │     React Components                │ │
│  │  ┌───────────────────────────────┐ │ │
│  │  │ ProductCard.tsx               │ │ │
│  │  │ - Displays product details    │ │ │
│  │  │ - Add to cart button          │ │ │
│  │  └───────────────────────────────┘ │ │
│  │  ┌───────────────────────────────┐ │ │
│  │  │ Cart.tsx                      │ │ │
│  │  │ - Lists cart items            │ │ │
│  │  │ - Remove items                │ │ │
│  │  │ - Order summary               │ │ │
│  │  └───────────────────────────────┘ │ │
│  └────────────────────────────────────┘ │
│               │                          │
│  ┌────────────▼───────────────────────┐ │
│  │    Global Styling (globals.css)    │ │
│  │  - Colors & Themes                 │ │
│  │  - Responsive Design               │ │
│  │  - Component Styles                │ │
│  └────────────────────────────────────┘ │
│                                          │
└──────────────────────────────────────────┘
```

### Backend Layer (Vendure - Port 3000)

```
┌──────────────────────────────────────────┐
│       Vendure Server (NestJS)            │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │    API Endpoints                   │ │
│  │  ┌──────────────────────────────┐ │ │
│  │  │ Shop API                     │ │ │
│  │  │ /shop-api/graphql           │ │ │
│  │  │ (Public product queries)    │ │ │
│  │  └──────────────────────────────┘ │ │
│  │  ┌──────────────────────────────┐ │ │
│  │  │ Admin API                    │ │ │
│  │  │ /admin-api/graphql          │ │ │
│  │  │ (Admin operations)          │ │ │
│  │  └──────────────────────────────┘ │ │
│  │  ┌──────────────────────────────┐ │ │
│  │  │ Dashboard                    │ │ │
│  │  │ /dashboard                  │ │ │
│  │  │ (Admin UI)                  │ │ │
│  │  └──────────────────────────────┘ │ │
│  └────────────────────────────────────┘ │
│               │                          │
│  ┌────────────▼───────────────────────┐ │
│  │    Core Services                   │ │
│  │  - Product Catalog                 │ │
│  │  - Order Management                │ │
│  │  - Customer Management             │ │
│  │  - Pricing & Promotions            │ │
│  │  - Search & Discovery              │ │
│  └────────────────────────────────────┘ │
│               │                          │
│  ┌────────────▼───────────────────────┐ │
│  │    Plugins                         │ │
│  │  - Email Plugin                    │ │
│  │  - Search Plugin                   │ │
│  │  - Job Queue Plugin                │ │
│  │  - Payment Handlers                │ │
│  └────────────────────────────────────┘ │
│                                          │
└──────────────────────────────────────────┘
```

### Data Layer (TypeORM + SQLite)

```
┌──────────────────────────────────────────┐
│         SQLite Database                  │
│       (vendure.sqlite)                   │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │    Product Tables                  │ │
│  │  - products                        │ │
│  │  - product_variants               │ │
│  │  - product_images                 │ │
│  │  - categories                      │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │    Customer & Order Tables         │ │
│  │  - customers                       │ │
│  │  - orders                          │ │
│  │  - order_lines                     │ │
│  │  - payments                        │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │    Inventory Tables                │ │
│  │  - stock_levels                    │ │
│  │  - channels                        │ │
│  └────────────────────────────────────┘ │
│                                          │
└──────────────────────────────────────────┘
```

## Data Flow Diagram

### Adding Product to Cart

```
User clicks "Add to Cart"
        │
        ▼
   ProductCard.tsx
   (onAddToCart called)
        │
        ▼
   State updated in index.tsx
   (cart array increased)
        │
        ▼
   React re-renders UI
        │
        ▼
   Cart button shows new count
   Product added to cart state
```

### Viewing Cart

```
User clicks Cart button
        │
        ▼
   Toggle showCart state
        │
        ▼
   Cart.tsx rendered
        │
        ▼
   Display cart items
   Calculate total
   Show checkout button
```

## API Endpoints

### Shop API (Public)

```
POST http://localhost:3000/shop-api/graphql

Examples:
- Get all products
- Get product by ID
- Get categories
- Search products
```

### Admin API (Protected)

```
POST http://localhost:3000/admin-api/graphql

Examples:
- Create product
- Update inventory
- Manage orders
- View customer data
- Generate reports
```

## File Relationships

```
index.tsx (Main page)
    │
    ├─── ProductCard.tsx
    │    └─── Props: product, onAddToCart
    │
    ├─── Cart.tsx
    │    └─── Props: items, onRemove, total
    │
    ├─── globals.css
    │    └─── All styling
    │
    └─── State management
         ├─── products (hardcoded samples)
         ├─── cart (items in cart)
         └─── showCart (UI toggle)
```

## Technology Integration Points

### Frontend → Backend
```
HTTP Requests
    │
    ├─── REST endpoints
    ├─── GraphQL queries
    └─── GraphQL mutations
```

### Backend → Database
```
TypeORM
    │
    ├─── CRUD operations
    ├─── Query building
    └─── Schema mapping
```

## Scalability Considerations

### Current Setup
- Single server instance
- SQLite (suitable for dev/demo)
- In-memory state on frontend

### For Production
- Multiple server instances (horizontal scaling)
- PostgreSQL or MySQL (enterprise DB)
- Redis for caching
- CDN for static assets
- Load balancer
- API rate limiting
- Session management

---

This architecture provides a solid foundation for an ecommerce platform with clear separation of concerns and room for growth.
