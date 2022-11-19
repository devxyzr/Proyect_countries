import { Link } from 'react-router-dom';
import {
  imgNA,
  imgANT,
  imgAS,
  imgSA,
  imgOCE,
  imgEUO,
  imgAFR,
} from '../ConstsandHelpers';

const CountryCard = ({ name, id, img, continent, population }) => {
  return (
    <div className="">
      <img src={img} alt={'Img not found'} />
      <Link className="" to={`countries/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h4 className="">Continent: {continent}</h4>

      <>
        {continent === 'North America' ? (
          <img src={imgNA} alt="IMG" width="40px" height="40px" />
        ) : continent === 'Antarctica' ? (
          <img src={imgANT} alt="IMG" width="40px" height="40px" />
        ) : continent === 'Asia' ? (
          <img src={imgAS} alt="IMG" width="40px" height="40px" />
        ) : continent === 'South America' ? (
          <img src={imgSA} alt="IMG" width="40px" height="40px" />
        ) : continent === 'Oceania' ? (
          <img src={imgOCE} alt="IMG" width="40px" height="40px" />
        ) : continent === 'Europe' ? (
          <img src={imgEUO} alt="IMG" width="40px" height="40px" />
        ) : (
          <img src={imgAFR} alt="IMG" width="40px" height="40px" />
        )}
      </>

      <p className="">
        Population: {new Intl.NumberFormat('en-US').format(population)}
      </p>
      <p>
        {population === 0
          ? `xd`
          : population < 1000000
          ? `:D`
          : population < 10000000
          ? `:D :D`
          : population < 100000000
          ? `:D :D :D`
          : population < 1000000000
          ? `:D :D :D :D`
          : ` :D :D :D :D :D`}
      </p>
      <Link className="" to={`countries/${id}`}>
        <button className="">See details</button>
      </Link>
    </div>
  );
};

export default CountryCard;
