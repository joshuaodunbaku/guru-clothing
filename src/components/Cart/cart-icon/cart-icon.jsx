import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";

import { CartIconContainer, CartIconSVG, ItemCount } from "./cart-icon.styles.js";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);
  return (
    <CartIconContainer
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <CartIconSVG />
      <ItemCount className="item-count">{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
