import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cart - TechHub Store</title>
        <meta name="description" content="Your shopping cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1 onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>🛍️ TechHub Store</h1>
            <button
              className="cart-button"
              onClick={() => router.push('/cart')}
            >
              🛒 Cart ({cart.length})
            </button>
          </div>
        </header>

        <main className="main">
          <Cart items={cart} onRemove={removeFromCart} total={totalPrice} />
        </main>

        <footer className="footer">
          <p>&copy; 2024 TechHub Store. Built with Vendure.</p>
        </footer>
      </div>
    </>
  );
}
