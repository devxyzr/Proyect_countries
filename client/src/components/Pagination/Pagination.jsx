import React from 'react';
import { SetPaginadoGlobal } from '../../redux/actions/index.actions';
import { useDispatch } from 'react-redux';

const Pagination = ({
  countriesPerPage,
  countries,
  paginadoHandler,
  currentPage,
  paginadoActivated,
  activated,
}) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  const handlerClick = (event, number) => {
    event.preventDefault();
    paginadoHandler(number);
    paginadoActivated(event.target.name);
  };

  const handlePrev = (event) => {
    event.preventDefault();
    paginadoActivated(currentPage - 1);
    dispatch(SetPaginadoGlobal(currentPage - 1));
  };

  const handleNext = (event) => {
    event.preventDefault();
    paginadoActivated(currentPage + 1);
    dispatch(SetPaginadoGlobal(currentPage + 1));
  };

  for (let i = 0; i < Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="">
      <button className="" onClick={handlePrev} disabled={currentPage === 1}>
        {' '}
        Prev
      </button>
      <ul className="">
        {pageNumbers.map((number) => {
          <div key={number}>
            <button
              name={number}
              value={currentPage}
              className={activated[number]}
              onClick={(event) => handlerClick(event, number)}
            >
              {number}{' '}
            </button>
          </div>;
        })}
      </ul>
      <button
        className=""
        onClick={handleNext}
        disabled={
          !countries || currentPage === Math.ceil(countries / countriesPerPage)
        }
      >
        {' '}
        Next{' '}
      </button>
    </div>
  );
};
export default Pagination;
