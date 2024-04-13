import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from './CartSlice';

export default function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  
}