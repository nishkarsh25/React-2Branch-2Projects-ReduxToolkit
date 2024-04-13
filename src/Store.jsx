// store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Api';

// Configure Redux store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
