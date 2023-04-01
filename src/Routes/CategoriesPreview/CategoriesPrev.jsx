import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
// import SHOP_DATA from "../../shop-data.json";
import CategoryPreview from "../../components/category-preview/category-preview";
import MySpinner from "../../components/Spinner/Spinner";
import { useState, useEffect } from "react";

const CategoriesPrev = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => categoriesMap ? setLoading(false) : setLoading(true), [categoriesMap]);

    return (
        <>
            {loading && <MySpinner />}
            {!loading &&
                (Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        //   <Fragment key={title}>
                        <CategoryPreview key={title} title={title} products={products} />

                        //     {/* Instead of creating an entirely new component(category-preview), this method works*/ }
                        // {/* <h2>
                        //       <Link to={`categories/${title}`}>{title.toUpperCase()}</Link>
                        //     </h2>
                        //     <div className="products-container">
                        //       {categoriesMap[title].slice(0, 4).map((product) => (
                        //         <ProductCard key={product.id} product={product} />
                        //       ))}
                        //     </div> */}
                        //   </Fragment>
                    );
                }))}
        </>
    );
};

export default CategoriesPrev;
