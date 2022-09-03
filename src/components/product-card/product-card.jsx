import { useContext } from "react";
// style
import "./product-card.style.scss";
// components
import Button from "../Button/Button";
// contexts
import { CartContext } from "../../context/cart.context";


const ProductCard = ({ product, itemAdded, setItemAdded }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = async() => {
    addItemToCart(product);
    // setItemAdded(!itemAdded)
  }; // It's easier to optimize

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
