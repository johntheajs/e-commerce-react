import { createContext, useState, useEffect } from 'react';
import { fetchCartDetails, addToCart, updateCart } from '../api/cartApi';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalNoOfProducts, setTotalNoOfProducts] = useState(0); // New state for total number of products

  // Function to load the cart from the backend
  const loadCart = async () => {
    const cartData = await fetchCartDetails();
    setCart(cartData.products);
    setTotalCost(cartData.totalCost);
    
    // Calculate the total number of products in the cart
    const totalCount = cartData.products.reduce((acc, product) => acc + product.count, 0);
    setTotalNoOfProducts(totalCount); // Update total number of products
  };

  // Load the cart when the component mounts
  useEffect(() => {
    loadCart();
  }, []);

  const handleAddToCart = async (productId) => {
    await addToCart(productId); // Perform the add operation
    await loadCart(); // Reload the cart after adding
  };

  const handleUpdateCart = async (productId, count) => {
    await updateCart(productId, count); // Perform the update operation
    await loadCart(); // Reload the cart after updating
  };

  return (
    <CartContext.Provider
      value={{ cart, totalCost, totalNoOfProducts, handleAddToCart, handleUpdateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
