import ProductCard from "../../components/product-card/product-card";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
// import SHOP_DATA from "../../shop-data.json";
import "./Shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
