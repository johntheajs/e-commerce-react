import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import Nav from '../Navigation/Nav';
import './Cart.css';

const Cart = () => {
  const { cart, totalCost } = useContext(CartContext);

  // Lifecycle simulation with useEffect for componentDidMount and componentWillUnmount
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <>
      <Nav /> {/* Including Navbar */}

      <div className="cart-container">
        {cart.length === 0 ? (
          <h2>Your cart is empty!</h2>
        ) : (
          <div className="cart-card">
            <h3 className="cart-title">Your Cart</h3>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.productId._id} className="cart-item">
                  <img
                    src={item.productId.img}
                    alt={item.productId.title}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-title">{item.productId.title}</p>
                    <p className="cart-item-price">Price: ${item.price}</p>
                    <p className="cart-item-count">Count: {item.count}</p>
                    <p className="cart-item-amount">
                      Amount: ${item.price * item.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h4>Total Cost: ${totalCost}</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
