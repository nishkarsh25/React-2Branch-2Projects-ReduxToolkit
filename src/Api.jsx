// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/posts',
    }),
    getUserById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/posts',
        method: 'POST',
        body: newUser,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, updatedUser }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: updatedUser,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice;
