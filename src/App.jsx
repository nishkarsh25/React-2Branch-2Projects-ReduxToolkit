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

  
}