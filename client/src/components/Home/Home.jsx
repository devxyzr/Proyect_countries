import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCountries } from '../../redux/actions/index.actions';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries());
  };

  return (
    <div>
      <Link to="/countries"> PAISES </Link>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {' '}
        reload all countries
      </button>
      <div>
        <select name="" id="">
          <option value="up"> Acendente </option>
          <option value="down"> Decendente </option>
        </select>
      </div>
    </div>
  );
};

export default Home;

// import * as actions from '../../redux/actions/index.actions';
// import { SetPaginadoGlobal } from '../../redux/actions/index.actions';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import Search from '../Search/Search';
// import Pagination from '../Pagination/Pagination';
// import FiltersnOrdering from '../Filters/FiltersnOrdering';
// import Loanding from '../Loanding/Loanding';
// import CountryCard from '../CountryCard/CountryCard';
// import NotFound from '../NotFound/NotFound';

//  const = Home() =>  {
//   // Estados locales -----------------------

//   const dispatch = useDispatch();
//   const countries = useSelector((state) => state.countries);
//   const loading = useSelector((state) => state.loading);

//   const [orden, setOrden] = useState('');

//   const currentPage = useSelector((state) => state.actualPage);

//   const [activated, setActivated] = useState({
//     [currentPage]: true,
//   });

//   const [countriesPerPage, setCountriesPerPage] = useState(9.99);

//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirtsCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries =
//     currentPage === 1
//       ? countries.slice(0, 9)
//       : currentPage === 26
//       ? countries.slice(249, countries.length)
//       : countries.slice(indexOfFirtsCountry, indexOfLastCountry);

//   const paginadoHandler = (pageNumber) => {
//     dispatch(SetPaginadoGlobal(pageNumber));
//   };

//   const paginadoActivated = (value = 1) => {
//     const clicked = value;
//     setActivated({
//       [clicked]: true,
//     });
//   };

//   React.useEffect(() => {
//     if (countries.length === 0) {
//       dispatch(actions.getAllCountries());
//     }
//   }, [dispatch, countries.length]);

//   console.log({ currentCountries });
//   return (
//     <div className="">
//       <div className="">
//         <Search paginadoActivated={paginadoActivated} />
//         <FiltersnOrdering
//           setOrden={setOrden}
//           paginadoActivated={paginadoActivated}
//         />
//         {typeof countries !== 'string' && (
//           <Pagination
//             countriesPerPage={countriesPerPage}
//             countries={countries.length}
//             paginadoHandler={paginadoHandler}
//             currentPage={currentPage}
//             paginadoActivated={paginadoActivated}
//             activated={activated}
//           />
//         )}
//         <div className="">
//           {countries &&
//             countries?.map((country, index) => {
//               return (
//                 <CountryCard
//                   key={country.id}
//                   name={country.name}
//                   id={country.id}
//                   img={country.flag_img}
//                   continent={country.continent}
//                   pupolation={country.population}
//                 />
//               );
//             })}
//           {/* {loading ? (
//             <Loanding />
//           ) : typeof countries !== 'string' ? (

//             currentCountries?.map((country) => {
//               <CountryCard
//                 key={country.id}
//                 name={country.name}
//                 id={country.id}
//                 img={country.flag_img}
//                 continent={country.continent}
//                 pupolation={country.population}
//               />;
//             })

//           ) : (
//             <NotFound />
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
