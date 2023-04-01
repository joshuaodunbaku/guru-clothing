import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// Components
import CartDropdown from "../../components/Cart/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/Cart/cart-icon/cart-icon";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// Context API
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.util";
// Style
import "./navigation.styles.js";
import { LogoContainer, NavigationContainer, NavLink, NavLinkContainer } from "./navigation.styles.js";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as={"span"} className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
