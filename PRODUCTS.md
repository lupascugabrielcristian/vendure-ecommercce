# TechHub Store - Product Catalog

## Current Product Listing

All products are currently displayed on the storefront homepage.

### 1. Premium Wireless Headphones
- **Price**: $149.99
- **ID**: 1
- **Description**: High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.
- **Image**: Placeholder image (300x300px)
- **Category**: Audio
- **In Stock**: Yes

### 2. USB-C Fast Charger
- **Price**: $39.99
- **ID**: 2
- **Description**: Ultra-fast 65W USB-C charger with multiple ports. Charges your device 50% faster than standard chargers.
- **Image**: Placeholder image (300x300px)
- **Category**: Accessories
- **In Stock**: Yes

### 3. Ergonomic Mechanical Keyboard
- **Price**: $129.99
- **ID**: 3
- **Description**: Premium mechanical keyboard with customizable RGB lighting, ergonomic design, and tactile switches.
- **Image**: Placeholder image (300x300px)
- **Category**: Input Devices
- **In Stock**: Yes

### 4. 4K Webcam
- **Price**: $199.99
- **ID**: 4
- **Description**: Crystal-clear 4K webcam with auto-focus, built-in microphone, and compatible with all major platforms.
- **Image**: Placeholder image (300x300px)
- **Category**: Video
- **In Stock**: Yes

### 5. Portable SSD 1TB
- **Price**: $89.99
- **ID**: 5
- **Description**: Fast and compact 1TB SSD with up to 1050 MB/s read speed. Perfect for backup and data transfer.
- **Image**: Placeholder image (300x300px)
- **Category**: Storage
- **In Stock**: Yes

### 6. Wireless Mouse Pro
- **Price**: $59.99
- **ID**: 6
- **Description**: Precision wireless mouse with 8 programmable buttons, excellent for both work and gaming.
- **Image**: Placeholder image (300x300px)
- **Category**: Input Devices
- **In Stock**: Yes

## Total Inventory Value
- **Total Products**: 6
- **Total Inventory Value**: $659.94
- **Average Product Price**: $109.99

## Adding New Products

To add new products to the storefront, edit the `sampleProducts` array in:

**File**: `apps/storefront/src/pages/index.tsx`

**Template**:
```typescript
{
  id: '7',                          // Unique ID
  name: 'Product Name',             // Display name
  price: 99.99,                     // Price in USD
  description: 'Description here',  // Product details
  image: '/images/placeholder.webp', // Local image path
}
```

## Product Categories Represented
- Audio (1 product)
- Accessories (1 product)
- Input Devices (2 products)
- Video (1 product)
- Storage (1 product)

---

## Product Images

All products currently use the local `placeholder.webp` image located at:
```
apps/storefront/public/images/placeholder.webp
```

To use custom product images:

1. Add image files to `apps/storefront/public/images/`
2. Update the `image` field to point to your local file:
   ```typescript
   image: '/images/your-product-image.jpg'
   // or
   image: '/images/your-product-image.webp'
   ```

Supported formats:
- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommended for better performance)
- `.gif`
