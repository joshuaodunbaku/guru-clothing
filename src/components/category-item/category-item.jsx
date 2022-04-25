import React from 'react'

import "./category-item.style.scss";

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;    
    return (
        <div className="category-container">
            <div className="background-image" style={{
            "background": `url(${imageUrl})`,
            backgroundPosition: "top center"
            }}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;