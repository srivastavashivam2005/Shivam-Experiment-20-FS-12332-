import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cartSlice';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleChange = (id, value) => {
    if (value >= 1) {
      dispatch(updateQuantity({ id, quantity: Number(value) }));
    }
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>No items in cart.</p>}
      {items.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleChange(item.id, e.target.value)}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
