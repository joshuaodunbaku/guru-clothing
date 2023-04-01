import React from 'react';
import ProductCard from '../product-card/product-card';
import { CategoryPrevContainer, TitleLink, Preview } from "./category-preview.style.js";
import MySpinner from "../Spinner/Spinner";
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPrevContainer>
            <h2>
                <TitleLink to={`${title}`}>
                    <span className='title'>{title.toUpperCase()}</span>
                </TitleLink>
            </h2>
            <Preview>
                {products.filter((_, idx) => idx < 4).map((product) => (<ProductCard key={product.id} product={product} />))}
                {/* {!products && <MySpinner />}
                {products && (products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                )))} */}
                { }
            </Preview>
        </CategoryPrevContainer>
    );
};

export default CategoryPreview;