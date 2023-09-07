// // Pagination.js
// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <ul className="pagination">
//       {pageNumbers.map((pageNumber) => (
//         <div
//           key={pageNumber}
//           className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
//         >
//           <button
//             className="page-link"
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </button>
//         </div>
//       ))}
//     </ul>
//   );
// };

// export default Pagination;

// Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Back
          </button>
        </li>
      )}

      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}

      {currentPage < totalPages && (
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Continue
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;

