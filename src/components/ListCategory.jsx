import imgCateFood from '../assets/img/food.jpg';
import imgDog from '../assets/img/type_dog.jpg';
import imgCat from '../assets/img/type_cat.jpg';
import imgTool from '../assets/img/pet_element.jpg';
import CategoryCard from '../components/CategoryCard';
import { useState,useEffect } from 'react';

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
        <div className="container flexbox-nowrap">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data.map((category, index) => (
              <CategoryCard key={index} image={category.image} type={category.type} />
            ))
          )}
        </div>
      );
    };
export default ListCategory;