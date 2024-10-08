import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa6';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext'; // Assuming you store the context here

const Card = ({ productId, img, title, star, reviews, prevPrice, newPrice }) => {
  const { cart, handleAddToCart, handleUpdateCart } = useContext(CartContext);

  // Find if the product is already in the cart
  const productInCart = cart.find((item) => item.productId._id === productId);

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            {productInCart ? (
              <div className="cart-controls">
                <FaMinus
                  className="remove-icon"
                  onClick={() => handleUpdateCart(productId, productInCart.count - 1)}
                />
                <span className="product-count">{productInCart.count}</span>
              </div>
            ) : null}
            <IoMdAdd
              className="add-icon"
              onClick={() => handleAddToCart(productId)}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
