import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
const ListProduct = () =>{
    const [pets, setPets] = useState([]);
    const [loading,setLoading]= useState(false);

    const handleSearch = async () =>{
        setLoading(true);
        try {
            const response = await axios.get(
                'https://64f707229d7754084952fda5.mockapi.io/api/v1/pets');
                setPets(response.data);
        } catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }
    useEffect(() =>{
        handleSearch();
    },[])

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
    return(
      <>
        <div className="container container-title">
          <div className="list_title">
            <h2>OUR PETS</h2>
          </div>
        </div>  
        <div className="container flexbox list-product-card">
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
      </>  
    );
}
    

export default ListProduct;