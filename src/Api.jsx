// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  
});

// Export the generated hooks for each endpoint
export const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice;
