import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions/index.actions';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }
}

return (
  <div>
    <h1>No se que estoy haciendo pero que funcione</h1>
    <button
      onClick={(e) => {
        handleClick(e);
      }}
    >
      Boton para hacer reset
    </button>
  </div>
);
