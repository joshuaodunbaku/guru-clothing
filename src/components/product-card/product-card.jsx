import { useContext } from "react";
// components
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
// contexts
import { CartContext } from "../../context/cart.context";
// style
import { ProductCardContainer, ProductCardFooter, ProductCardImg } from "./product-card.style.js";


const ProductCard = ({ product, itemAdded, setItemAdded }) => {
  console.log(product);
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = async () => {
    addItemToCart(product);
    // setItemAdded(!itemAdded)
  }; // It's easier to optimize

  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={name} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
