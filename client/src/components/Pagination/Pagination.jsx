import React from 'react';
import { useState, useEffect } from 'react';

export const Pagination = (allCountries) => {
  const [currentPage, setCurrentPage] = useState(0);

  let nextPage = () => {
    if (allCountries.length <= currentPage + 10) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 10);
  };

  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 10);
    }
  };

  const firstPage = () => {
    setCurrentPage(0);
  };

  const lastPage = () => {
    setCurrentPage(allCountries.length - 10);
  };

  useEffect(() => {
    firstPage();
  }, [allCountries]);

  const filterCountries = allCountries.slice(currentPage, currentPage + 10);

  const PaginationView = (
    <>
      <button onClick={firstPage} className="">
        {' '}
        {'<<'}{' '}
      </button>
      <button onClick={prevPage} className="">
        {' '}
        {'<'}{' '}
      </button>
      <button onClick={nextPage} className="">
        {' '}
        {'>'}{' '}
      </button>
      <button onClick={lastPage} className="">
        {' '}
        {'>>'}
      </button>
    </>
  );

  return {
    PaginationView,
    filterCountries,
  };
};
