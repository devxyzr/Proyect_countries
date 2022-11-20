import React from 'react';
import { Link } from 'react-router-dom';

import { setContinentImg, setPopulation } from '../utils';

const CountryCard = ({ name, id, img, continent, population }) => {
  return (
    <div className="">
      <img src={img} alt={'Img not found'} />
      <Link className="" to={`countries/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h4 className="">Continent: {continent}</h4>
      {setContinentImg[continent]}
      <p className="">
        Population: {new Intl.NumberFormat('en-US').format(population)}
      </p>
      {setPopulation(population)}
      <Link className="" to={`countries/${id}`}>
        <button className="">See details</button>
      </Link>
    </div>
  );
};

export default CountryCard;
