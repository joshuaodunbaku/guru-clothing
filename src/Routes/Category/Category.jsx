import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryContainer, CategoryTitle } from "./Category.style";
import MySpinner from "../../components/Spinner/Spinner";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {products ? (
                <CategoryContainer>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </CategoryContainer>
            ) : (
                <MySpinner />
            )}
        </>
    );
};

export default Category;