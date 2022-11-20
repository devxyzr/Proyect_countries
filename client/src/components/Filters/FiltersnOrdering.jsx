import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { continents } from '../utils';
import { useHistory } from 'react-router-dom';

import { getAllActivities } from '../../redux/actions/index.actions';
import { filterCountriesByContinent } from '../../redux/actions/index.actions';
import { filterCountriesByActivities } from '../../redux/actions/index.actions';
import { OrderbyABCs } from '../../redux/actions/index.actions';
import { OrderbyPopulation } from '../../redux/actions/index.actions';
import { SetPaginadoGlobal } from '../../redux/actions/index.actions';

// styles

const FiltersnOrdering = () => {
  //   const history = useHistory();
  //   const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  //   const handlerOrdering = (event) => {
  //     switch (event.target.value) {
  //       case 'up':
  //         dispatch(OrderbyABCs(event.target.value));
  //         dispatch(SetPaginadoGlobal(1));
  //         setOrden(`Ordenado ${event.target.value}`);
  //         paginadoActivated();
  //         break;
  //       case 'down':
  //         dispatch(OrderbyABCs(event.target.value));
  //         dispatch(SetPaginadoGlobal(1));
  //         setOrden(`Ordenado ${event.target.value}`);
  //         paginadoActivated();
  //         break;
  //       case 'more':
  //         dispatch(OrderbyPopulation(event.target.value));
  //         dispatch(SetPaginadoGlobal(1));
  //         setOrden(`Ordenado ${event.target.value}`);
  //         paginadoActivated();
  //         break;
  //       case 'less':
  //         dispatch(OrderbyPopulation(event.target.value));
  //         dispatch(SetPaginadoGlobal(1));
  //         setOrden(`Ordenado ${event.target.value}`);
  //         paginadoActivated();
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  //   const handlerFilterContinent = (event) => {
  //     dispatch(filterCountriesByActivities(event.target.value));
  //     dispatch(filterCountriesByContinent(event.target.value));
  //     paginadoActivated();
  //   };

  //   const handlerFilterActivities = (event) => {
  //     dispatch(filterCountriesByActivities(event.target.value));
  //     dispatch(SetPaginadoGlobal(1));
  //     paginadoActivated();
  //   };

  //   const handlerClearFilter = () => {
  //     history.go(0);
  //     dispatch(SetPaginadoGlobal(1));
  //     paginadoActivated();
  //   };

  //   React.useEffect(() => {
  //     dispatch(getAllActivities());
  //   }, [dispatch]);

  return (
    <div className="">
      <select defaultValue="default" className="">
        <option hidden value="default">
          {' '}
          Order by{' '}
        </option>
        <option value="up">From Albania to Zimbabwe </option>
        <option value="down"> From Zimbabwe to Albania</option>
        <option value="more">From most to least populated </option>
        <option value="less">From least to most populated</option>
      </select>

      <select defaultValue="default" className="">
        <option hidden value="default">
          {' '}
          Filter by Region
        </option>
        {/* {continents.map((continent) => {
          return (
            <option key={continent} value={continent}>
              {continent}{' '}
            </option>
          );
        })} */}
      </select>

      <select defaultValue="default" className="">
        <option hidden value="default ">
          {' '}
          Filter by Activities
        </option>
        <option value="All">All activities</option>
        {/* {activities.map((activitie) => {
          <option key={activitie.id} value={activitie.name}>
            {activitie.name}
          </option>;
        })} */}
      </select>

      <button className=""> Clear Filters</button>
    </div>
  );
};

export default FiltersnOrdering;
