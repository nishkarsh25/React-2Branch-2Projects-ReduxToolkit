import React from 'react';
import { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './Api';

function App() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleAddUser = async () => {
    await addUser({ name: 'New User', email: 'newuser@example.com' });
  };

  const handleUpdateUser = async (id) => {
    await updateUser({ id,  updatedUser: { name: 'Updated User', email: 'Updateduser@example.com' } });
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  
}

export default App;
