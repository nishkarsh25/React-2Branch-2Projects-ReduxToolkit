import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from './CartSlice';

export default function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      dispatch(updateQuantity({ id: item.id, quantity: existingCartItem.quantity + 1 }));
    } else {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };

  const updateQuantityHandler = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const renderCart = () => {
    return (
      <>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2 border-b pb-2">
              <div className="flex justify-between items-center">
                <span className="text-lg">{item.name} - {item.quantity}</span>
                <div>
                  <button className="bg-blue-500 text-white px-2 py-1 mr-1 rounded" onClick={() => updateQuantityHandler(item.id, item.quantity + 1)}>+</button>
                  <button className="bg-blue-500 text-white px-2 py-1 mr-1 rounded" onClick={() => updateQuantityHandler(item.id, item.quantity - 1)}>-</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCartHandler(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  
}