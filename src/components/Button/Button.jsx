import { useContext } from "react"
import { ProductsContext } from "../../context/products.context"
import "./Button.style.scss"
/* 
default
inverted
google sign in
*/

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
    success: "successful"
}

const Button = ({children, buttonType, ...otherProps}) => {
  // const {itemAdded} = useContext(ProductsContext)
  return (
    // itemAdded 
    // ?
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
    // : 
    // <button className={`button-container ${BUTTON_TYPE_CLASSES.success}`} {...otherProps}>
    //     Done
    // </button>

  )
}

export default Button;