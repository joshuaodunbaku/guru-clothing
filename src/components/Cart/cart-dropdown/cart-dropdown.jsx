import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cart.context";
import Button from "../../Button/Button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  
  let navigate = useNavigate()
  
  const handleNavigate = () => {
    navigate("checkout");
    setIsCartOpen(false);
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          item.quantity > 0 && <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleNavigate}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
