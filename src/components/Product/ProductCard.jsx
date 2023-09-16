
import './index.css';
const ProductCard = ({pet}) => {
    return (
        <div className="Card item auto-margin">
            <div className="Card-container">
                <div className="Card-image">
                    <img src={pet.image} alt="ProductImage"/>
                </div>
                <div className="Card-contents">
                    <div className="Card-contents_info">
                        <div className="Name">Name: {pet.name}</div>
                        <div className="Category">Category: {pet.type}</div>
                        <div className="decription">Status : Fully vaccinated and regularly health-checked.</div>
                        <div className="Price">Price:${pet.price}</div>
                    </div>
                    <div className="Card-contents_btn">
                        <button>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;