# Product Images Guide

## Current Setup

All product images now use the local placeholder image:

```
/images/placeholder.webp
```

**File Location**: `apps/storefront/public/images/placeholder.webp`
**File Size**: 9.7 KB
**Format**: WebP (optimized)

## How to Use Custom Images

### Step 1: Add Your Image

Place your product image in: `apps/storefront/public/images/`

Supported formats:
- `.jpg` / `.jpeg` (recommended for photos)
- `.png` (with transparency)
- `.webp` (best compression, recommended)
- `.gif` (for animations)

Example files:
```
apps/storefront/public/images/
├── placeholder.webp
├── headphones.jpg
├── charger.png
└── keyboard.webp
```

### Step 2: Update Product

Edit: `apps/storefront/src/pages/index.tsx`

Find the product you want to update and change the `image` field:

**Before:**
```typescript
{
  id: '1',
  name: 'Premium Wireless Headphones',
  price: 149.99,
  description: '...',
  image: '/images/placeholder.webp',
}
```

**After:**
```typescript
{
  id: '1',
  name: 'Premium Wireless Headphones',
  price: 149.99,
  description: '...',
  image: '/images/headphones.jpg',
}
```

### Step 3: Save & Refresh

Save the file and the storefront will automatically refresh with the new image.

## Image Recommendations

### File Size
- Aim for images under 50 KB
- WebP format gives best compression
- JPEG is also efficient

### Dimensions
- Recommended: 300x300 pixels
- Display size in store: 300x300px
- Can use larger images (they'll be scaled down)

### Format Recommendations

| Format | Use Case | Pros | Cons |
|--------|----------|------|------|
| **WebP** | All products | Best compression, fast | Less browser support |
| **JPEG** | Photos/products | Good compression, wide support | Lossy quality |
| **PNG** | Product with transparency | Lossless, transparency | Larger file size |
| **GIF** | Animations | Supports animation | Poor compression |

**Our Recommendation**: Use **WebP** or **JPEG** for best performance

## Complete Example

### 1. Prepare Images
```bash
# Create high-quality product images
# Size them to 300x300 pixels
# Convert to WebP for best compression
```

### 2. Add to Images Folder
```bash
cp headphones.webp /Users/lolarucker/Projects/VentureProject/apps/storefront/public/images/
cp charger.webp /Users/lolarucker/Projects/VentureProject/apps/storefront/public/images/
# ... repeat for other products
```

### 3. Update Products

Edit `apps/storefront/src/pages/index.tsx`:

```typescript
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 149.99,
    description: 'High-quality wireless headphones...',
    image: '/images/headphones.webp',  // ← Changed
  },
  {
    id: '2',
    name: 'USB-C Fast Charger',
    price: 39.99,
    description: 'Ultra-fast 65W charger...',
    image: '/images/charger.webp',  // ← Changed
  },
  // ... continue for other products
];
```

### 4. Done!

Your products now show custom images. No server restart needed!

## Current Products & Image Paths

Update these in `apps/storefront/src/pages/index.tsx`:

| Product | Current Image | Path to Update |
|---------|---------------|----------------|
| Premium Wireless Headphones | /images/placeholder.webp | Line 27 |
| USB-C Fast Charger | /images/placeholder.webp | Line 34 |
| Ergonomic Mechanical Keyboard | /images/placeholder.webp | Line 41 |
| 4K Webcam | /images/placeholder.webp | Line 48 |
| Portable SSD 1TB | /images/placeholder.webp | Line 55 |
| Wireless Mouse Pro | /images/placeholder.webp | Line 62 |

## Image Optimization Tools

### Convert to WebP
```bash
# Using ImageMagick
convert input.jpg output.webp

# Using ffmpeg
ffmpeg -i input.jpg output.webp
```

### Batch Optimize
```bash
# Using ImageOptim (Mac)
# Or use online tools like tinypng.com
```

## Troubleshooting

### Image not showing?
1. Check file path is correct
2. Verify image exists in `public/images/`
3. Check for typos in file name
4. Refresh browser (Ctrl+R or Cmd+R)

### Image looks pixelated?
1. Use a higher resolution source image
2. Try a different format (WebP vs JPEG)
3. Compress more carefully

### Image is too large?
1. Use WebP format instead of PNG/JPEG
2. Reduce image dimensions
3. Use compression tools

## Next Steps

1. Prepare your product images (300x300px)
2. Save them to `apps/storefront/public/images/`
3. Update the image paths in `index.tsx`
4. Start the server and view your products!

---

For more details, see:
- [GETTING_STARTED.md](GETTING_STARTED.md) - Image customization section
- [PRODUCTS.md](PRODUCTS.md) - Product information
