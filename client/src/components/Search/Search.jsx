import React, { useState } from 'react';
import { getCountriesSummary } from '../../redux/actions/index.actions';
import { useDispatch } from 'react-redux';
import { SetPaginadoGlobal } from '../../redux/actions/index.actions';

export default function Search({ paginadoActivated }) {
  const [input, setinput] = useState('');
  const dispatch = useDispatch();

  const searchInputHandler = (event) => {
    setinput(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(getCountriesSummary(input));
    dispatch(SetPaginadoGlobal(1));
    paginadoActivated();
    setinput('');
  };

  return (
    <div className="">
      <button type="submit" onClick={clickHandler}>
        Search{' '}
      </button>
      <input
        type="text"
        placeholder={'Encuentra tu pais'}
        onChange={searchInputHandler}
        value={input}
      />
    </div>
  );
}
