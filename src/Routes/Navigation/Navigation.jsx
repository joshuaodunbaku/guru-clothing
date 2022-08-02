import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// Components
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// Context API
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.util";
// Style
import "./navigation.styles.scss";

const Navigation = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
