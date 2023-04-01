import { createContext, useState, useEffect } from "react";

import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.util";
// import SHOP_DATA from "../shop-data";

// actual value you want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
  itemAdded: false,
  setItemAdded: () => { },
});

// actual component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [itemAdded, setItemAdded] = useState(false);

  // get data
  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const result = await getCategoriesAndDocuments();
        console.log(result);
        setCategoriesMap(result);
      } catch (error) {
        alert(error.message);
      }

      // console.log(Object.keys(result))
    };

    getCategoriesMap();
  }, []);
  // stores data to firebase firestore, make sure to comment out once set
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA, "title");
  // }, []);

  const value = { categoriesMap, itemAdded, setItemAdded };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
