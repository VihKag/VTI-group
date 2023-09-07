import petDogImg from '../assets/img/petimage.png';
import petCatImg from '../assets/img/catImg.jpg';
// import React, { useState } from 'react';
const ProductCard = ({pet}) => {
    let petImageSrc;
    switch (pet.type) {
        case false:
        petImageSrc = petDogImg;
        break;
        case true:
            petImageSrc = petCatImg;
            break;
        default:
        petImageSrc = petCatImg;
    }
    return (
        <div className="Card item auto-margin">
            <div className="Card-container">
                <div className="Card-image">
                    <img src={petImageSrc} alt="ProductImage"/>
                </div>
                <div className="Card-contents">
                    <div className="Card-contents_info">
                        <div className="Name">Name: {pet.name}</div>
                        <div className="Category">Category: pet</div>
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