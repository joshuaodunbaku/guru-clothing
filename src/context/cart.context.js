import { createContext, useEffect, useState } from "react";

// A D D   T O   C A R T   A N D   I N C R E M E N T   Q U A N T I T Y
const addCartItem = (cartItems, productToAdd) => {
  let matchProductItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // return (matchProductItem ? ([...cartItems, {...productToAdd, quantity: matchProductItem.quantity + 1}]) : ([...cartItems, {...productToAdd, quantity: 1}]));

  if(matchProductItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: matchProductItem.quantity + 1} : cartItem)
  }
  return ([...cartItems, {...productToAdd, quantity: 1}]);

  // return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  addItemToCount: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0)

  const addItemToCart = (productToAdd) => {
    console.log(productToAdd);
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    let count = 0;
    cartItems.reduce((accum, elem) => {
      return count = accum + elem.quantity;
    }, count)
    console.log(count);
    setItemCount(count)
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, setCartItems, itemCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
