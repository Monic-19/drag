import React, { useState } from 'react';
import { addUser } from '../services/api';
import { toast } from 'react-toastify';

const AddUserForm = ({ onUserAdded, loadUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('image', formData.image);

    try {
      await addUser(data);
      toast.success("User added successfully!");
      onUserAdded();
      setFormData({ name: '', email: '', phone: '', image: null }); 
      loadUsers();
    } catch (error) {
      toast.error("Failed to add user.");
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4 p-4 border rounded shadow-md bg-white md:w-1/2">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
          required
          className="border p-2 rounded w-full"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
          className="border p-2 rounded w-full"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
          required
          className="border p-2 rounded w-full"
        />
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="image">User Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
            className="block w-full text-sm text-gray-500 
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
