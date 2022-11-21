import React, { useState, useEffect } from 'react';
import { getCountriesSummary } from '../../redux/actions/index.actions';
import { useDispatch, useSelector } from 'react-redux';
import { SetPaginadoGlobal } from '../../redux/actions/index.actions';
import { getCountryName } from '../../redux/actions/index.actions';
import { getCountries } from '../../redux/actions/index.actions';

export default function Search() {
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countries);

  // useEffect(() => {
  //   // console.log(countryDetail);
  // }, [countryDetail]);

  // useEffect(() => {
  //   if (!countryName) dispatch(getCountries());
  //   console.log('que hio');
  // }, [countryName]);

  const searchInputHandler = (e) => {
    setCountryName(e.target.value);
    console.log('1render');
    if (!countryName) dispatch(getCountries());
  };

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(getCountryName(countryName));

    // dispatch(getCountriesSummary(input));
    // dispatch(SetPaginadoGlobal(1));
    // paginadoActivated();
    // setinput('');
  };

  return (
    <div className="">
      <button type="submit" onClick={clickHandler}>
        Search{' '}
      </button>
      <input
        type="text"
        placeholder={'Encuentra tu pais'}
        onChange={(e) => {
          searchInputHandler(e);
        }}
        value={countryName}
      />
    </div>
  );
}
