import {
  GET_ALL_ACTIVITIES,
  GET_COUNTRIES_SUMARY,
  GET_ALL_COUNTRIES,
  LOADING,
  PAGINADO,
  GET_COUNTRY_DETAIL,
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITIES,
  ORDER_BY_ABC,
  ORDER_BY_POPULATION,
} from '../actions/index.actions';

const initialState = {
  allcontries: [],
  countries: [],
  countryDetail: {},
  activities: [],
  loading: true,
  actualPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PAGINADO:
      return {
        ...state,
        actualPage: action.payload,
      };

    case LOADING:
      return {
        ...state,
        actualPage: action.payload,
      };

    case GET_ALL_COUNTRIES:
      return {
        ...state,
        loanding: false,
        countries: action.payload,
        allcontries: action.payload,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_COUNTRIES_SUMARY:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        loading: false,
        countryDetail: action.payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.name !== action.payload
        ),
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.allcontries;
      const filterStatus =
        action.payload === 'All'
          ? allCountries
          : allCountries.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: filterStatus,
      };

    case FILTER_BY_ACTIVITIES:
      const allcontriesTwo = state.allcontries;
      const filterCountries =
        action.payload === 'All'
          ? allcontriesTwo.filter((country) => country.activity.length > 0)
          : allcontriesTwo.filter((country) =>
              country.activity.find(
                (activity) => activity.name === action.payload
              )
            );
      return {
        ...state,
        countries: filterCountries,
      };

    case ORDER_BY_ABC:
      let sortedArrOne = [];
      let sortedArrTwo = [];

      if (action.payload === 'up') {
        sortedArrOne = state.countries.sort((country1, country2) => {
          if (country1.name > country2.name) return 1;
          if (country2.name > country1.name) return -1;
          return 0;
        });
        sortedArrTwo = state.allcontries.sort((country1, country2) => {
          if (country1.name > country2.name) return 1;
          if (country2.name > country1.name) return -1;
          return 0;
        });
      } else {
        sortedArrOne = state.countries.sort((country1, country2) => {
          if (country1.name > country2.name) return 1;
          if (country2.name > country1.name) return -1;
          return 0;
        });
        sortedArrTwo = state.allcontries.sort((country1, country2) => {
          if (country1.name > country2.name) return 1;
          if (country2.name > country1.name) return -1;
          return 0;
        });
      }
      return {
        ...state,
        countries: sortedArrOne,
        allcontries: sortedArrTwo,
      };

    case ORDER_BY_POPULATION:
      let sortedBArrOne = [];
      let sortedBArrTwo = [];

      if (action.payload === 'less') {
        sortedBArrOne = state.countries.sort((country1, country2) => {
          if (country1.population > country2.population) return 1;
          if (country2.population > country1.population) return -1;
          return 0;
        });
        sortedBArrTwo = state.allCountries.sort((country1, country2) => {
          if (country1.population > country2.population) return 1;
          if (country2.population > country1.population) return -1;
          return 0;
        });
      } else {
        sortedBArrOne = state.countries.sort((country1, country2) => {
          if (country1.population > country2.population) return 1;
          if (country2.population > country1.population) return -1;
          return 0;
        });
        sortedBArrTwo = state.allCountries.sort((country1, country2) => {
          if (country1.population > country2.population) return 1;
          if (country2.population > country1.population) return -1;
          return 0;
        });
      }
      return {
        ...state,
        countries: sortedBArrOne,
        allCountries: sortedBArrTwo,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
