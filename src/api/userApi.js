import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user';

// Function to handle login
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

// Function to handle registration
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Function to get user details (after login)
export const getUserDetails = async (token) => {
  const response = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
