import React from 'react';
import { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './Api';

function App() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  
}

export default App;
