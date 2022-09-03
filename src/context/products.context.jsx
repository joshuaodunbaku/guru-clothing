import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// actual value you want to access
export const ProductsContext = createContext({
  products: [],
  itemAdded: false,
  setItemAdded: () => {},
});

// actual component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [itemAdded, setItemAdded] = useState(false);

  const value = { products, itemAdded, setItemAdded };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
