import React,{ useState} from 'react';
// import axios from 'axios';
import ProductCard from '../Product/ProductCard';
import Pagination from '../Pagination/Pagination';
import GetPetApi from '../../api/GetPets';
import './index.css';
const ListProduct = ({apiGet,title}) =>{
    const [pets, setPets] = useState([]);

    const dataLoaded = (data) =>{
      setPets(data);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pets.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return(
      <>
        <div className="container container-title">
          <div className="list_title">
            <h2>{title}</h2>
          </div>
        </div>  
        <GetPetApi dataLoaded = {dataLoaded} apiGet={apiGet}/>
        <div className="container flexbox list-product-card">
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
      </>  
    );
}
    

export default ListProduct;