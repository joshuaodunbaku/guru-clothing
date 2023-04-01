import { useNavigate } from "react-router-dom";
import { DirectoryContainer, BackgroundImage, Body } from './directory-item.style.js';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryContainer onClick={onNavigateHandler}>
            <BackgroundImage
                imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryContainer>
    );
};

export default DirectoryItem;