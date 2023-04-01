import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkout-item";
import { CheckoutTableContainer } from "./checkout-table.style.js";

const CheckoutTable = () => {
  console.log("checkout 2");
  const { cartItems, removeItemFromCart, addItemToCart, reduceItemInCart, totalAmount } =
    useContext(CartContext);

  return (
    <CheckoutTableContainer>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        // let { id, imageUrl, name, price, quantity } = item;
        return (
          item.quantity > 0 && (
            <CheckoutItem
              key={item.id}
              cartItem={item}
              removeItemFromCart={removeItemFromCart}
              addItemToCart={addItemToCart}
              reduceItemInCart={reduceItemInCart}
            />
          )
        );
      })}
      <span className="total">Total Price: ${totalAmount}</span>
    </CheckoutTableContainer>
  );
};

export default CheckoutTable;
