import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Redux Toolkit Shopping Cart</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
