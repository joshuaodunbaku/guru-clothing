import { Route, Routes } from "react-router-dom";
import CategoriesPrev from "../CategoriesPreview/CategoriesPrev";
import Category from "../Category/Category";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPrev />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
