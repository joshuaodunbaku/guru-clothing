import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./Button.style.js";
/* 
default
inverted
google sign in
*/

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  success: "successful"
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
  // const {itemAdded} = useContext(CategoriesContext)
  const CustomButton = getButton(buttonType);
  return (
    // itemAdded 
    // ?
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
    // : 
    // <button className={`button-container ${BUTTON_TYPE_CLASSES.success}`} {...otherProps}>
    //     Done
    // </button>

  );
};

export default Button;