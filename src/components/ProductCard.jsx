import petDogImg from '../assets/img/petimage.png';
import petCatImg from '../assets/img/catImg.jpg';
import petFishImg from '../assets/img/fishImg.jpg';
// import React, { useState } from 'react';
const ProductCard = ({pet}) => {
    let petImageSrc;

  switch (pet.name) {
    case 'doggie':
      petImageSrc = petDogImg;
      break;
    case 'fish':
      petImageSrc = petFishImg;
      break;
    default:
      petImageSrc = petCatImg;
  }
    return (
        <div className="Card item">
            <div className="Card-container">
                <div className="Card-image">
                    <img src={petImageSrc} alt="ProductImage"/>
                </div>
                <div className="Card-contents">
                    <div className="Card-contents_info">
                        <div className="Name">Name: {pet.name}</div>
                        <div className="Category">Category: pet</div>
                        <div className="decription">Decription: Fully vaccinated and regularly health-checked.{pet.status}</div>
                        <div className="Price">Price:$100</div>
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