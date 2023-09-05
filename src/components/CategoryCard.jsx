import cateImg from "../assets/img/food.jpg"
import "./index.css"
const CategoryCard =()=>{
    return(
        <div className="category-card item">
            <div className="category-card_container">
                <div className="category">
                    <a href="/">
                        <img src={cateImg} alt="Category" className="category-img"/>
                        <span>Category</span>
                    </a>
                </div>
            </div>    
        </div>
    );
}
export default CategoryCard; 