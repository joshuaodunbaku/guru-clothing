import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, removeItemFromCart, addItemToCart, reduceItemInCart }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  // const { cartItems, removeItemFromCart, addItemToCart, reduceItemInCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => reduceItemInCart(cartItem)}>{"<"}</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(cartItem)}>{">"}</span>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
