import React, { useEffect } from 'react';
import { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './Api';

function App() {
  const { data: users, error, isLoading, refetch } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleAddUser = async () => {
    await addUser({ name: 'New User', email: 'newuser@example.com' });
    // After adding a user, trigger a re-fetch of data
    refetch();
  };

  const handleUpdateUser = async (id) => {
    await updateUser({ id, updatedUser: { name: 'Updated User', email: 'Updateduser@example.com' } });
    // After updating a user, trigger a re-fetch of data
    refetch();
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    // After deleting a user, trigger a re-fetch of data
    refetch();
  };


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Users</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 shadow-md hover:bg-blue-600" onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded mb-4 flex justify-between items-center shadow-md hover:shadow-lg">
            <div>
              <span className="text-lg font-semibold text-blue-500 mr-2">{user.id}</span>
              <span className="text-lg font-semibold text-gray-800 mr-2">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </div>
            <div>
              <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600" onClick={() => handleUpdateUser(user.id)}>Update</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
