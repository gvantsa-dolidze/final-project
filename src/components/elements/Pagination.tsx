import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Pagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the current page from the URL, default to 1 if not found
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("offset") || "1"); // Provide a default value ("1") when null is returned

  // Pagination limit (you can adjust this depending on your needs)
  const totalPages = 10; // Set a realistic total page count

  // Handle page changes
  const handlePageChange = (pageNumber: number): void => { // Type pageNumber as number
    queryParams.set("offset", pageNumber.toString()); // Convert pageNumber to string
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  // Handle previous and next
  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Determine page numbers to display (for simplicity, we show a limited range)
  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        {/* Mobile Navigation */}
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={handlePrevPage}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page) => (
              <NavLink
                key={page}
                to={`?offset=${page}`}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  page === currentPage
                    ? "bg-indigo-600 text-white"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                }`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </NavLink>
            ))}

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

