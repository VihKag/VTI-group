import imgCateFood from '../../assets/img/food.jpg';
import imgDog from '../../assets/img/type_dog.jpg';
import imgCat from '../../assets/img/type_cat.jpg';
import imgTool from '../../assets/img/pet_element.jpg';
import CategoryCard from '../Category/CategoryCard';
import { useState,useEffect } from 'react';
import './index.css';
const ListCategory = () => {
    const [isLoading, setIsLoading] = useState(true); // State variable để kiểm tra trạng thái loading
    const [data, setData] = useState([]); 

    useEffect(() => {
    // Simulate a data fetching process (fetch your data here)
        setTimeout(() => {
            const fetchedData = [
            { image: imgDog, type: 'Dog' },
            { image: imgCat, type: 'Cat' },
            { image: imgCateFood, type: 'Food' },
            { image: imgTool, type: 'Goods' },
        ];
        setData(fetchedData);
        setIsLoading(false);
        }, 1000);
    }, []); 

    return (
        <>
          <div className="container container-title">
            <div className="list_title">
              <h2>OPTIONS</h2>
            </div>
          </div>  
          <div className="container flexbox-nowrap">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              data.map((category, index) => (
                <CategoryCard key={index} image={category.image} type={category.type} />
              ))
            )}
          </div>
        </>
      );
    };
export default ListCategory;