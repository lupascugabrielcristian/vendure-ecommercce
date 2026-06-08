import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartProps {
  items: Product[];
  onRemove: (index: number) => void;
  total: number;
}

export default function Cart({ items, onRemove, total }: CartProps) {
  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>FREE</span>
        </div>
        <div className="summary-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
