import React from 'react';
// import { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import ProductCard from '../../components/product-card/product-card';
// import { CategoriesContext } from '../../context/categories.context';

const Section = () => {
    const { item } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    // const { item: itemArr } = categoriesMap;
    return (
        <>
            <h2>Welcome to the {item}</h2>
            {/* <div className="products-container">
                {item[itemArr].map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div> */}
        </>
    );
};

export default Section;