import { useContext } from "react";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemCount, addItemToCount } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <Cart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
