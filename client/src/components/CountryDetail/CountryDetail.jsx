import React from 'react';
import * as actions from '../../redux/actions/index.actions';
import { useSelector, useDispatch } from 'react-redux'; // ≈ a mapStatetoProps
import { useHistory, Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loanding/Loanding';
import {
  setContinentImg,
  setPopulation,
  sqrmetters,
  location,
  imgcontinents,
} from '../utils';

const CountryDetail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.loading);
  const CountryId = props.match.params.id;

  React.useEffect(() => {
    dispatch(actions.getDetailCountry(CountryId));
  }, [dispatch, CountryId]);

  const countryDetail = useSelector((state) => state.countryDetail);
  const {
    continent,
    flag_image,
    name,
    id,
    capital,
    subregion,
    area,
    population,
    activities,
  } = countryDetail;

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : Object.entries(countryDetail).length === 0 ? (
        <NotFound />
      ) : (
        <>
          {' '}
          <button onClick={() => history.goBack()}>Back</button>
          <div className="">
            <div className="">
              <img className="" src={flag_image} alt="Default png" />
              <h1 className="">{name}</h1>
            </div>
            <div className="">
              <div className="">
                <h2 className="">{continent.toUpperCase()}</h2>
                {setContinentImg[continent]}
              </div>

              <div className="">
                <h3 className="">COUNTRY ID: {id}</h3>
                <img src={flag_image} alt="IMG" width="38px" height="35px" />
              </div>
              <div className="">
                <h3>CAPITAL: {capital}</h3>
                <img src={location} alt="IMG" width="38px" height="35px" />
              </div>

              <div className="">
                <h3 className="">
                  SUBREGION: {subregion ? subregion : 'None'}
                </h3>
                <img src={imgcontinents} alt="IMG" width="40px" height="40px" />
              </div>

              <div className="">
                <h3>
                  AREA: {`${new Intl.NumberFormat('en-US').format(area)} km²`}
                </h3>
                <img src={sqrmetters} alt="IMG" width="40px" height="40px" />
              </div>
              <div className="">
                <h3 className="">
                  POPULATION:{' '}
                  {`${new Intl.NumberFormat('en-US').format(population)} hab.`}
                </h3>
              </div>
              <div className="">
                <p className="">{setPopulation(population)}</p>
              </div>
              <div className="">
                <h3>TOURS:</h3>

                {activities.length ? (
                  activities?.map((tour) => (
                    <div>
                      <p>Activity name: {tour.name}</p>
                      <p>Difficulty: {`${tour.difficulty}/5`}</p>
                      <p>Duration: {tour.length_time}</p>
                      <p>Season: {tour.season}</p>
                    </div>
                  ))
                ) : (
                  <div>
                    <h4>No tours yet for this country,</h4>
                    <h4>Want to cr eate one?</h4>
                    <Link to={{ pathname: '/activities/create' }}>
                      <button>Create New Tour</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
