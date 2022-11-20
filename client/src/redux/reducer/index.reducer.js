import { Switch } from 'react-router-dom';
import {
  GET_COUNTRIES,
  GET_DETAIL_COUNTRIES,
  GET_COUNTRY_NAME,
  DELETE_ACTIVITY,
  VIEW_ACTIVITY,
  CREATE_ACTIVITY,
} from '../actions/index.actions';

const initialState = {
  countries: [],
  countryDetail: [],
  activities: [],
  // loading: true,
  // actualPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_DETAIL_COUNTRIES:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case VIEW_ACTIVITY:
      return {
        ...state,
        countries: state.countries.filter((c) => {
          return c.activities.some((a) => a.name === action.payload);
        }),
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        countries: state.countries.filter((c) => {
          return c.activities.some((a) => a.name === action.payload);
        }),
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    default:
      return {
        ...state,
      };
  }

  // switch (action.type) {
  //   case PAGINADO:
  //     return {
  //       ...state,
  //       actualPage: action.payload,
  //     };
  //   case LOADING:
  //     return {
  //       ...state,
  //       actualPage: action.payload,
  //     };
  //   case GET_ALL_COUNTRIES:
  //     return {
  //       ...state,
  //       loanding: false,
  //       countries: action.payload,
  //       allcontries: action.payload,
  //     };
  //   case GET_ALL_ACTIVITIES:
  //     return {
  //       ...state,
  //       activities: action.payload,
  //     };
  //   case GET_COUNTRIES_SUMARY:
  //     return {
  //       ...state,
  //       activities: action.payload,
  //     };
  //   case GET_COUNTRY_DETAIL:
  //     return {
  //       ...state,
  //       loading: false,
  //       countryDetail: action.payload,
  //     };
  //   case CREATE_ACTIVITY:
  //     return {
  //       ...state,
  //       activities: [...state.activities, action.payload],
  //     };
  //   case DELETE_ACTIVITY:
  //     return {
  //       ...state,
  //       activities: state.activities.filter(
  //         (activity) => activity.name !== action.payload
  //       ),
  //     };
  //   case FILTER_BY_CONTINENT:
  //     const allCountries = state.allcontries;
  //     const filterStatus =
  //       action.payload === 'All'
  //         ? allCountries
  //         : allCountries.filter(
  //             (country) => country.continent === action.payload
  //           );
  //     return {
  //       ...state,
  //       countries: filterStatus,
  //     };
  //   case FILTER_BY_ACTIVITIES:
  //     const allcontriesTwo = state.allcontries;
  //     const filterCountries =
  //       action.payload === 'All'
  //         ? allcontriesTwo.filter((country) => country.activity.length > 0)
  //         : allcontriesTwo.filter((country) =>
  //             country.activity.find(
  //               (activity) => activity.name === action.payload
  //             )
  //           );
  //     return {
  //       ...state,
  //       countries: filterCountries,
  //     };
  //   case ORDER_BY_ABC:
  //     let sortedArrOne = [];
  //     let sortedArrTwo = [];
  //     if (action.payload === 'up') {
  //       sortedArrOne = state.countries.sort((country1, country2) => {
  //         if (country1.name > country2.name) return 1;
  //         if (country2.name > country1.name) return -1;
  //         return 0;
  //       });
  //       sortedArrTwo = state.allcontries.sort((country1, country2) => {
  //         if (country1.name > country2.name) return 1;
  //         if (country2.name > country1.name) return -1;
  //         return 0;
  //       });
  //     } else {
  //       sortedArrOne = state.countries.sort((country1, country2) => {
  //         if (country1.name > country2.name) return 1;
  //         if (country2.name > country1.name) return -1;
  //         return 0;
  //       });
  //       sortedArrTwo = state.allcontries.sort((country1, country2) => {
  //         if (country1.name > country2.name) return 1;
  //         if (country2.name > country1.name) return -1;
  //         return 0;
  //       });
  //     }
  //     return {
  //       ...state,
  //       countries: sortedArrOne,
  //       allcontries: sortedArrTwo,
  //     };
  //   case ORDER_BY_POPULATION:
  //     let sortedBArrOne = [];
  //     let sortedBArrTwo = [];
  //     if (action.payload === 'less') {
  //       sortedBArrOne = state.countries.sort((country1, country2) => {
  //         if (country1.population > country2.population) return 1;
  //         if (country2.population > country1.population) return -1;
  //         return 0;
  //       });
  //       sortedBArrTwo = state.allCountries.sort((country1, country2) => {
  //         if (country1.population > country2.population) return 1;
  //         if (country2.population > country1.population) return -1;
  //         return 0;
  //       });
  //     } else {
  //       sortedBArrOne = state.countries.sort((country1, country2) => {
  //         if (country1.population > country2.population) return 1;
  //         if (country2.population > country1.population) return -1;
  //         return 0;
  //       });
  //       sortedBArrTwo = state.allCountries.sort((country1, country2) => {
  //         if (country1.population > country2.population) return 1;
  //         if (country2.population > country1.population) return -1;
  //         return 0;
  //       });
  //     }
  //     return {
  //       ...state,
  //       countries: sortedBArrOne,
  //       allCountries: sortedBArrTwo,
  //     };
  //   default:
  //     return {
  //       ...state,
  //     };
  // }
}

export default rootReducer;
