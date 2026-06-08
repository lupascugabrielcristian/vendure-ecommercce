# TechHub - Useful Commands Reference

Quick reference for common development commands.

## Installation & Setup

```bash
# Navigate to project
cd /Users/lolarucker/Projects/VentureProject

# Automatic setup (recommended)
./setup.sh

# Manual setup
npm install
cd apps/server && npm install && cd ../..
cd apps/storefront && npm install && cd ../..
```

## Development

```bash
# Start both server and storefront
npm run dev

# Start only the server
cd apps/server
npm run dev

# Start only the storefront
cd apps/storefront
npm run dev
```

## Building

```bash
# Build both applications
npm run build

# Build server only
cd apps/server && npm run build

# Build storefront only
cd apps/storefront && npm run build
```

## Production

```bash
# Start production server
npm start

# Start production storefront
cd apps/storefront && npm start
```

## Database Management

```bash
# Reset database (delete file and restart)
rm apps/server/vendure.sqlite

# Clear npm cache if having issues
npm cache clean --force

# Clear node_modules (if needed)
rm -rf node_modules package-lock.json
npm install
```

## Troubleshooting Commands

```bash
# Check if ports are in use
lsof -i :3000    # Check port 3000
lsof -i :3001    # Check port 3001

# Kill process on port
kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:3001)

# Check Node version
node --version

# Check npm version
npm --version

# View npm workspace info
npm ls -a

# List installed packages
npm list --depth=0
```

## File Editing Quick Commands

```bash
# Open project in VS Code
code /Users/lolarucker/Projects/VentureProject

# View project structure
ls -la

# View file contents
cat README.md
cat QUICKSTART.md

# Edit a file
# Use your preferred editor: nano, vi, code, etc.
nano README.md
```

## API Testing Commands

### Using cURL

```bash
# Test Shop API
curl -X POST http://localhost:3000/shop-api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ products(first: 10) { edges { node { id name } } } }"}'

# Test Admin API
curl -X POST http://localhost:3000/admin-api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ me { identifier } }"}'
```

### Using GraphQL Playground

Open in browser:
- Shop API: http://localhost:3000/shop-api
- Admin API: http://localhost:3000/admin-api

## Development Workflow

```bash
# 1. Start development
npm run dev

# 2. Visit storefront
open http://localhost:3001

# 3. Access admin dashboard
open http://localhost:3000/dashboard

# 4. Explore GraphQL API
open http://localhost:3000/admin-api

# 5. Edit code and save (hot reload enabled)
# Files to edit:
# - apps/storefront/src/pages/index.tsx
# - apps/storefront/src/components/*.tsx
# - apps/storefront/src/styles/globals.css
```

## Adding New Products

Edit: `apps/storefront/src/pages/index.tsx`

```typescript
// Find this array in the useEffect hook:
const sampleProducts: Product[] = [
  // ... existing products ...
  {
    id: '7',
    name: 'New Product Name',
    price: 99.99,
    description: 'Product description here',
    image: 'https://via.placeholder.com/300x300?text=New+Product',
  },
];
```

Then save and the storefront will auto-refresh!

## Customizing Styles

Edit: `apps/storefront/src/styles/globals.css`

```css
/* Change primary color */
:root {
  --primary-color: #0066cc;      /* Change this hex code */
  --secondary-color: #f0f0f0;
  --text-color: #333;
}
```

## Environment Variables

Create `.env` files if needed:

```bash
# apps/server/.env
DATABASE_URL=sqlite:./vendure.sqlite
CORS_ORIGIN=http://localhost:3001
```

```bash
# apps/storefront/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Git Commands

```bash
# Initialize git repo
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial Vendure ecommerce project setup"

# View status
git status

# View log
git log --oneline
```

## Performance Optimization

```bash
# Analyze bundle size (storefront)
cd apps/storefront
npm run build
npm install -g webpack-bundle-analyzer

# Check for unused dependencies
npm audit

# Update dependencies (use caution)
npm update
```

## Docker Commands (if using Docker)

```bash
# Build Docker image
docker build -t techhub-store .

# Run Docker container
docker run -p 3000:3000 -p 3001:3001 techhub-store

# Stop container
docker stop container_id
```

## Helpful npm Commands

```bash
# List all scripts available
npm run

# Install specific version
npm install package@version

# Uninstall package
npm uninstall package_name

# Update all packages
npm update

# Check outdated packages
npm outdated

# Install development dependency
npm install --save-dev package_name
```

## Learning & Documentation

```bash
# Print project structure to file
tree -L 3 > structure.txt

# View all markdown files
find . -name "*.md" -type f

# Count lines of code (rough estimate)
find . -name "*.ts" -o -name "*.tsx" -o -name "*.css" | xargs wc -l
```

---

## Quick Reference Table

| Task | Command |
|------|---------|
| Setup | `./setup.sh` |
| Start Dev | `npm run dev` |
| Build | `npm run build` |
| Storefront | http://localhost:3001 |
| Admin Dashboard | http://localhost:3000/dashboard |
| Shop API | http://localhost:3000/shop-api |
| Admin API | http://localhost:3000/admin-api |
| Reset DB | `rm apps/server/vendure.sqlite` |
| Admin Username | `superadmin` |
| Admin Password | `superadmin` |

---

For more detailed information, see:
- README.md
- QUICKSTART.md
- ARCHITECTURE.md
- PROJECT_SUMMARY.md

Happy coding! 🚀
