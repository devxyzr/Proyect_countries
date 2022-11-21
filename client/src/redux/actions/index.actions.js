import axios from 'axios';
import { duration as durationOptions } from '../../components/utils';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAIL_COUNTRIES = 'GET_DETAIL_COUNTRIES';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const VIEW_ACTIVITY = 'VIEW_ACTIVITY';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const ALPHABETIC_ORDER_ASC = 'ALPHABETIC_ORDER_ASC';
export const ALPHABETIC_ORDER_DESC = 'ALPHABETIC_ORDER_DESC';
export const POPULATION_ORDER_ASC = 'POPULATION_ORDER_ASC';
export const POPULATION_ORDER_DESC = 'POPULATION_ORDER_DESC';
export const CONTINENT_ORDER = 'CONTINENT_ORDER';

// export const LOADING = 'LOADING';
// export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
// export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
// export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
// export const GET_COUNTRIES_SUMARY = 'GET_COUNTRIES_SUMARY';
// export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
// export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';
// export const ORDER_BY_ABC = 'ORDER_BY_ABC';
// export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
// export const PAGINADO = 'PAGINADO';

export function getCountries() {
  return async (dispatch) => {
    try {
      let response = await axios.get('http://localhost:3001/countries');
      return dispatch({
        type: GET_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetailCountry(id) {
  return async (dispatch) => {
    let response = await axios.get(`http://localhost:3001/countries/${id}`);
    return dispatch({ type: GET_DETAIL_COUNTRIES, payload: response.data });
  };
}

export function getCountryName(name) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createActivity = (values) => {
  return async function (dispatch) {
    try {
      console.log(values);
      await axios.post('http://localhost:3001/activities', values);
      // return dispatch({ type: CREATE_ACTIVITY, payload: body });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteActivity = (id) => {
  return async function (dispatch) {
    await axios.delete('http://localhost:3001/activities', { data: { id } });
    return dispatch({ type: DELETE_ACTIVITY, payload: id });
  };
};

export const getAllActivities = () => {
  return async function (dispatch) {
    let response = await axios.get('http://localhost:3001/activities');
    return dispatch({ type: GET_ALL_ACTIVITIES, payload: response.data });
  };
};

export const viewActivity = (payload) => {
  return {
    type: VIEW_ACTIVITY,
    payload,
  };
};

export function alphabeticOrderASC() {
  return {
    type: ALPHABETIC_ORDER_ASC,
  };
}

export function alphabeticOrderDESC() {
  return {
    type: ALPHABETIC_ORDER_DESC,
  };
}

export function populationOrderASC() {
  return {
    type: POPULATION_ORDER_ASC,
  };
}

export function populationOrderDESC() {
  return {
    type: POPULATION_ORDER_DESC,
  };
}

export const continentOrder = (payload) => {
  return {
    type: CONTINENT_ORDER,
    payload,
  };
};

// // --------------------------- Funcion

// // export function getCharacters() {
// //   // cambiar por coutries
// //   return async function (dispatch) {
// //     let json = await axios.get('http://localhost:3001/countries');
// //     return dispatch({
// //       type: 'GET_CHARACTERS',
// //       payload: json.data,
// //     });
// //   };
// // }

// export const loading = () => {
//   return { type: LOADING };
// };

// export const getAllCountries = () => {
//   return async function (dispatch) {
//     dispatch(loading());
//     let response = await axios.get('http://localhost:3001/countries');
//     return dispatch({ type: GET_ALL_COUNTRIES, payload: response.data });
//   };
// };

// export const getCountryDetail = (id) => {
//   return async function (dispatch) {
//     try {
//       dispatch(loading());
//       let response = await axios.get(`http://localhost:3001/countries/${id}`);
//       return dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data });
//     } catch (error) {
//       return dispatch({ type: GET_COUNTRY_DETAIL, payload: {} });
//     }
//   };
// };

// export const getCountriesSummary = (name) => {
//   return async function (dispatch) {
//     try {
//       let response = await axios.get(
//         `http://localhost:3001/countries?name=${name}`
//       );
//       return dispatch({ type: GET_COUNTRIES_SUMARY, payload: response.data });
//     } catch (error) {
//       return dispatch({ type: GET_COUNTRIES_SUMARY, payload: error.message });
//     }
//   };
// };

// export const createActivity = (values) => {
//   return async function (dispatch) {
//     await axios.post('http://localhost:3001/activities', values);
//     return dispatch({ type: CREATE_ACTIVITY, payload: values });
//   };
// };

// export const deleteActivity = (id) => {
//   return async function (dispatch) {
//     await axios.delete('http://localhost:3001/activities', { data: { id } });
//     return dispatch({ type: DELETE_ACTIVITY, payload: id });
//   };
// };

// export const filterCountriesByContinent = (payload) => {
//   return { type: FILTER_BY_CONTINENT, payload };
// };

// export const filterCountriesByActivities = (payload) => {
//   return { type: FILTER_BY_ACTIVITIES, payload };
// };

// export const OrderbyABCs = (payload) => {
//   return { type: ORDER_BY_ABC, payload };
// };

// export const OrderbyPopulation = (payload) => {
//   return { type: ORDER_BY_POPULATION, payload };
// };

// export const SetPaginadoGlobal = (payload) => {
//   return { type: PAGINADO, payload };
// };
