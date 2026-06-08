import React from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="product-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
