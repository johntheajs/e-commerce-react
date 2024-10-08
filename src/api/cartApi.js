import axios from 'axios';

// Base URL for cart-related API endpoints
const baseUrl = 'http://localhost:5000/api/cart/';

// Get token from local storage
const getToken = () => {
  return localStorage.getItem('token');
};

// Fetch cart details
export const fetchCartDetails = async () => {
  const token = getToken();
  const response = await axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addToCart = async (productId) => {
    const token = localStorage.getItem('token');
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // This goes in the headers, not the URL
      },
    };
  
    const data = JSON.stringify({ productId, count: 1 });
  
    try {
      const response = await axios.post(`${baseUrl}add`, data, config); // Properly formatted URL
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

// Update cart product count
export const updateCart = async (productId, count) => {
  const token = getToken();
  console.log(count);
  const response = await axios.put(
    `${baseUrl}update`,
    { productId, count },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }
  );
  return response.data;
};
