import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

  return (
    <div className="flex justify-center mt-8">
      <nav>
        <ul className="flex space-x-2 items-center">
          <li>
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
            >
              Geri
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-4 py-2 ${
                  currentPage === number
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } rounded-lg`}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
            >
              İrəli
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
