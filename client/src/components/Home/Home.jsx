import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../Search/Search';
import CountryCard from '../CountryCard/CountryCard';
import FiltersnOrdering from '../Filters/FiltersnOrdering';

import { getCountries } from '../../redux/actions/index.actions';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries());
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}> Reload Page </button>

      <div>
        <FiltersnOrdering /> <Search />
      </div>

      <div>
        {allCountries?.map((country) => {
          return (
            <CountryCard
              id={country.id}
              key={country.id}
              name={country.name}
              img={country.flag_image}
              continent={country.continent}
              population={country.population}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
