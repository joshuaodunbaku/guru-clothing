// Component
import CategoryItem from "../category-item/category-item";
// Style
import "./categories.style.scss";

const Categories = ({categories}) => {
    
    return (
        <div className="categories-container">
        { categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        )) }
        </div>
    )
}

export default Categories;