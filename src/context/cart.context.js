import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.util";

// ADD TO CART AND INCREMENT QUANTITY
const addCartItem = async (cartItems, productToAdd) => {
  let matchProductItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // return (matchProductItem ? ([...cartItems, {...productToAdd, quantity: matchProductItem.quantity + 1}]) : ([...cartItems, {...productToAdd, quantity: 1}]));

  if (matchProductItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: matchProductItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];

  // return [...cartItems, {...productToAdd, quantity: 1}];
};

// REMOVE FROM CART / DECREAMENT QUANTITY
const reduceCartItem = (cartItems, productToRemove) => {
  let matchProductItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (matchProductItem) {
    // setCartItems(() => {
    // return cartItems.map((item) => {
    // removes items from checkout when quantity is equal to one
    if (matchProductItem.quantity === 1) {
      // removeItemFromCart(matchProductItem);
      return cartItems.filter((item) => item.id !== productToRemove.id);
    }
    // decreases items quantity from checkout
    return cartItems.map((cartItem) =>
      cartItem.id === matchProductItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    // return item.id === matchProductItem.id
    //   ? { ...item, quantity: item.quantity - 1 }
    //   : item;
    // });
    // });
  }
};

// actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  setItemCount: () => {},
  removeItemFromCart: () => {},
  reduceItemInCart: () => {},
  totalAmount: 0,
  setTotalAmount: () => {},
});

// actual component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState();

  // call function to add to cart
  const addItemToCart = async (productToAdd) => {
    console.log(productToAdd);
    setCartItems(await addCartItem(cartItems, productToAdd));
  };

  // reduce cart Item
  const reduceItemInCart = (itemToReduce) => {
    setCartItems(() => reduceCartItem(cartItems, itemToReduce));
  };

  // Remove Items from cart
  const removeItemFromCart = (productToRemove) => {
    setCartItems(() =>
      cartItems.filter((item) => item.id !== productToRemove.id)
    );
  };

  useEffect(() => {
    let count = 0;
    cartItems.reduce((accum, elem) => {
      return (count = accum + elem.quantity);
    }, count);
    console.log(count);
    setItemCount(count);
    getCategoriesAndDocuments();
  }, [cartItems]);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.reduce((accum, elem) => {
      return (totalPrice = accum + elem.price * elem.quantity);
    }, totalPrice);
    console.log(totalPrice);
    setTotalAmount(totalPrice);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    removeItemFromCart,
    cartItems,
    addItemToCart,
    itemCount,
    reduceItemInCart,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
