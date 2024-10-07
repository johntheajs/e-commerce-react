import axios from 'axios';

const API_URL = 'http://localhost:5000/api/product/';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Assuming the API returns a list of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
