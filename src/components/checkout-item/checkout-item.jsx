import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../Button/Button";
import { CheckoutItemContainer } from "./checkout-item.style.js";

const CheckoutItem = ({ cartItem, removeItemFromCart, addItemToCart, reduceItemInCart }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  // const { cartItems, removeItemFromCart, addItemToCart, reduceItemInCart } = useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={() => reduceItemInCart(cartItem)}>{"<"}</button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={() => addItemToCart(cartItem)}>{">"}</button>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => {
          
          return removeItemFromCart(cartItem);
        }}
      >
        &#10005;
      </span>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
