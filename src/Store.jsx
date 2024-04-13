import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});