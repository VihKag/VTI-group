import ProductCard from './components/ProductCard'
import './App.css';
import CategoryCard from './components/CategoryCard';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
// import { getPetsByStatus } from './api/pet';

function App() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
      .then((response) => {
        setPets(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className="App">
      <div className="Categories-list">
        <div className="container">
          <div className="list_title">
            <h2>OPTIONS</h2>
            <line></line>
          </div>
        </div>  
        <div className="container flexbox Categories-list_modify">
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
      </div>
      <div className="Pet-list">
        <div className="container">
          <div className="list_title">
            <h2>OUR PETS</h2>
            <line></line>
          </div>
        </div>  
        <div className="container flexbox">
          {loading && <p>Loading...</p>}
            {pets.map((pet) => (
              <ProductCard
              key={pet.id}
              pet={pet} 
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
