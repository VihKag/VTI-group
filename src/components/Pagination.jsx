import React, { useState } from 'react';

const itemsPerPage = 8; // Số mục hiển thị trên mỗi trang

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Trang trước
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Trang tiếp theo
        </button>
      </div>
    </div>
  );
};

export default Pagination;