import './index.css';
const CategoryCard =({image,type})=>{
    return(
        <div className="category-card item">
            <div className="category-card_container">
                <div className="category">
                    <a href="/">
                        <img src={image} alt="Category" className="category-img"/>
                        <span>{type}</span>
                    </a>
                </div>
            </div>    
        </div>
    );
}
export default CategoryCard; 