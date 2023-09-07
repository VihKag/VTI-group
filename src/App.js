import ProductCard from './components/ProductCard'
import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import ListCategory from './components/ListCategory';
import Banner from './components/Banner';
import Pagination from './components/Pagination';
import Blog from './components/Blog';
function App() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); 

  // Tính toán chỉ mục của sản phẩm bắt đầu và kết thúc trên trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pets.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // 

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://64f707229d7754084952fda5.mockapi.io/api/v1/pets'
      );
      setPets(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    handleSearch();
  }, []);
  
  return (
    
    <div className="App">
      <div className="container-banner">
      <Banner/>
      </div>

      <div className="Categories-list">
        <div className="container container-title">
          <div className="list_title">
            <h2>OPTIONS</h2>
          </div>
        </div>  
       <ListCategory/>
      </div>
      <div className="Pet-list">
        <div className="container container-title mr-bt-40">
          <div className="list_title">
            <h2>OUR PETS</h2>
          </div>
        </div>  
        <div className="container flexbox">
          {loading && <p>Loading...</p>}
            {currentItems.map((pet) => (
              <ProductCard
              key={pet.id}
              pet={pet} 
              />
          ))}
        </div>
        <div className="pagination-container mr-bt-40">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(pets.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="container container-title mr-bt-40">
          <div className="list_title">
            <h2>BLOGS</h2>
          </div>
        </div>  
        <Blog/>
      </div>
    </div>
  );
}

export default App;
