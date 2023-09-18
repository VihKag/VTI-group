import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import caroul_1 from '../../assets/img/caroul_1.png';
import caroul_2 from '../../assets/img/caroul_2.png';
import caroul_3 from '../../assets/img/caroul_3.png';
import './index.css';
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
  };

  return (
    <div className="Carousel container">
      <Slider {...settings}>
        <div className='Carousel-item'>
          <img src={caroul_1} alt="Ima" />
        </div>
        <div className='Carousel-item'>
          <img src={caroul_2} alt="Ima" />
        </div>
        <div className='Carousel-item'>
          <img src={caroul_3} alt="Ima" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;