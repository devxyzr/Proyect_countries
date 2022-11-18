import * as actions from '../../redux/actions/index.actions';
import { SetPaginadoGlobal } from '../../redux/actions/index.actions';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions/index.actions';
import { Link } from 'react-router-dom';

function Home() {
  // Estados locales -----------------------

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const loading = useSelector((state) => state.loading);

  const [orden, setOrden] = useState('');

  const currentPage = useSelector((state) => state.actualPage);

  const [activated, setActivated] = useState({
    [currentPage]: true,
  });

  const [countriesPerPage, setCountriesPerPage] = useState(9.99);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirtsCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries =
    currentPage === 1
      ? countries.slice(0, 9)
      : currentPage === 26
      ? countries.slice(249, countries.length)
      : countries.slice(indexOfFirtsCountry, indexOfLastCountry);

  const paginadoHandler = (pageNumber) => {
    dispatch(SetPaginadoGlobal(pageNumber));
  };

  const paginadoActivated = (value = 1) => {
    const clicked = value;
    setActivated({
      [clicked]: true,
    });
  };

  React.useEffect(() => {
    if (countries.length === 0) {
      dispatch(actions.getAllCountries());
    }
  }, [dispatch, countries.length]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }

  return (
    <div className="">
      <div className="">
        <Search paginadoActivated={paginadoActivated} />
        <FiltersnOrdering
          setOrden={setOrden}
          paginadoActivated={paginadoActivated}
        />
        {typeof countries !== 'string' && (
          <Pagination
            countriesPerPage={countriesPerPage}
            countries={countries.length}
            paginadoHandler={paginadoHandler}
            currentPage={currentPage}
            paginadoActivated={paginadoActivated}
            activated={activated}
          />
        )}
        <div className="">
          {loading ? (
            <Loanding />
          ) : typeof countries !== 'string' ? (
            currentCountries.map((country) => {
              <CountryCard
                key={country.id}
                name={country.name}
                id={country.id}
                img={country.flag_img}
                continent={country.continent}
                pupolation={country.population}
              />;
            })
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
