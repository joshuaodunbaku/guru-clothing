import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cart.context";
import Button from "../../Button/Button";
import CartItem from "../cart-item/cart-item";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.js";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("checkout");
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (cartItems.map((item) => (
          item.quantity > 0 && <CartItem key={item.id} cartItem={item} />
        ))) :
          <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={handleNavigate}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
