import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/users',
});

export const fetchUsers = (page) => api.get(`?page=${page}`);
export const addUser = (userData) => api.post('', userData);
