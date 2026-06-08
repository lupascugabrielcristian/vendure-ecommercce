# Quick Start Guide - TechHub Ecommerce Store

Get the ecommerce store running in minutes!

## 1️⃣ Installation

### Option A: Automatic Setup (Recommended)

```bash
cd /Users/lolarucker/Projects/VentureProject
./setup.sh
```

### Option B: Manual Setup

```bash
cd /Users/lolarucker/Projects/VentureProject
npm install
cd apps/server && npm install && cd ../..
cd apps/storefront && npm install && cd ../..
```

## 2️⃣ Start the Application

```bash
npm run dev
```

Wait for both servers to start successfully. You should see messages like:
- `✅ Vendure server started successfully!`
- `ready - started server on 0.0.0.0:3001`

## 3️⃣ Access the Store

Open your browser and navigate to:

- **🛍️ Shop Storefront**: http://localhost:3001
- **⚙️ Admin API Playground**: http://localhost:3000/admin-api
- **📊 Vendor Dashboard**: http://localhost:3000/dashboard

## 4️⃣ Admin Login

Use these credentials to access the admin dashboard:

```
Username: superadmin
Password: superadmin
```

## What You'll See

### Storefront (http://localhost:3001)
- 6 premium tech products displayed
- Shopping cart functionality
- Product details (name, price, description)
- Responsive design that works on mobile & desktop

### Products Available
1. Premium Wireless Headphones - $149.99
2. USB-C Fast Charger - $39.99
3. Ergonomic Mechanical Keyboard - $129.99
4. 4K Webcam - $199.99
5. Portable SSD 1TB - $89.99
6. Wireless Mouse Pro - $59.99

## Troubleshooting

### Dependencies won't install
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Ports are busy
Edit `package.json` and change the port numbers in the scripts section:
- Server port: Change from 3000 to another port (e.g., 3100)
- Storefront port: Change from 3001 to another port (e.g., 3101)

### Database errors
Delete the database file and restart:
```bash
rm apps/server/vendure.sqlite
npm run dev
```

## Next Steps

- Explore the GraphQL APIs at http://localhost:3000/admin-api
- Add more products by editing `apps/storefront/src/pages/index.tsx`
- Customize the styling in `apps/storefront/src/styles/globals.css`
- Read the full [README.md](README.md) for more details
- Check [Vendure Documentation](https://docs.vendure.io)

---

Happy shopping! 🛒
