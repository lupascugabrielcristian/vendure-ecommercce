import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Initialize with sample products
    const sampleProducts: Product[] = [
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 149.99,
        description: 'High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.',
        image: '/images/placeholder.webp',
      },
      {
        id: '2',
        name: 'USB-C Fast Charger',
        price: 39.99,
        description: 'Ultra-fast 65W USB-C charger with multiple ports. Charges your device 50% faster than standard chargers.',
        image: '/images/placeholder.webp',
      },
      {
        id: '3',
        name: 'Ergonomic Mechanical Keyboard',
        price: 129.99,
        description: 'Premium mechanical keyboard with customizable RGB lighting, ergonomic design, and tactile switches.',
        image: '/images/placeholder.webp',
      },
      {
        id: '4',
        name: '4K Webcam',
        price: 199.99,
        description: 'Crystal-clear 4K webcam with auto-focus, built-in microphone, and compatible with all major platforms.',
        image: '/images/placeholder.webp',
      },
      {
        id: '5',
        name: 'Portable SSD 1TB',
        price: 89.99,
        description: 'Fast and compact 1TB SSD with up to 1050 MB/s read speed. Perfect for backup and data transfer.',
        image: '/images/placeholder.webp',
      },
      {
        id: '6',
        name: 'Wireless Mouse Pro',
        price: 59.99,
        description: 'Precision wireless mouse with 8 programmable buttons, excellent for both work and gaming.',
        image: '/images/placeholder.webp',
      },
    ];
    setProducts(sampleProducts);
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <Head>
        <title>TechHub - Premium Tech Products</title>
        <meta name="description" content="Premium tech products at great prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1>🛍️ TechHub Store</h1>
            <button 
              className="cart-button"
              onClick={() => setShowCart(!showCart)}
            >
              🛒 Cart ({cart.length})
            </button>
          </div>
        </header>

        <main className="main">
          {showCart ? (
            <Cart items={cart} onRemove={removeFromCart} total={totalPrice} />
          ) : (
            <>
              <section className="hero">
                <h2>Welcome to TechHub</h2>
                <p>Discover premium tech products at unbeatable prices</p>
              </section>

              <section className="products">
                <div className="products-grid">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={() => addToCart(product)}
                    />
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

        <footer className="footer">
          <p>&copy; 2024 TechHub Store. Built with Vendure.</p>
        </footer>
      </div>
    </>
  );
}
