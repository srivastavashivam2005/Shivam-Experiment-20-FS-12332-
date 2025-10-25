import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const products = [
  { id: 1, name: "Laptop", price: 700 },
  { id: 2, name: "Phone", price: 400 },
  { id: 3, name: "Headphones", price: 50 },
  { id: 4, name: "Keyboard", price: 30 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
