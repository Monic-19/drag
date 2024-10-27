import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';
import AddUserForm from '../components/AddUserForm';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers(page);
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users.");
    }
  };

  useEffect(() => {
    loadUsers();
  }, [page]);

  const handleUserAdded = () => setPage(1);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">User Management System</h1>
      <AddUserForm onUserAdded={handleUserAdded} loadUsers={loadUsers} />
      <div className="flex md:justify-end  justify-center gap-4 mb-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400 w-24 cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={users?.length < 10} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400 w-24 cursor-pointer"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users?.map((user,index) => (
          <UserCard key={user._id} user={user} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
