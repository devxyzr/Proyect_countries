import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as actions from '../../redux/actions/index.actions';
import {
  difficulties,
  seasons,
  duration as durationOptions,
  reg_ex,
} from '../utils';
import { useHistory } from 'react-router-dom';
// import Style from './CreateTour.module.css';

const CreateActivityComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allcountries = useSelector((state) => state.countries);

  /*TRAIGO UN ESTADO LOCAL DE MIS ACTIVITIES PARA PODER MAPEAR**********************/
  /*SUS NOMBRES Y PODER USARLOS PARA LA VALIDACION DE NOMBRES REPETIDOS*************/
  // const activities = useSelector((state) => state.activities);
  // const activitiesNames = activities.map((activity) => activity.name);
  /*********************************************************************************/

  React.useEffect(() => {
    dispatch(actions.getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.viewActivity());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [season, setSeason] = useState('');
  const [duration, setDuration] = useState(0);
  const [countries, setCountries] = useState([]);
  const [difficulty, setDifficulty] = useState(0);

  const [errors, setErrors] = useState({
    name: '',
  });

  /*FUNCIÓN VALIDADORA DEL INPUT DEL NOMBRE DE LA ACTIVIDAD************************/
  const validateActivityName = () => {
    let errors = {};

    if (!name) errors.name = 'Activity name is required';
    else if (!reg_ex.test(name))
      errors.name =
        'Activity name is invalid: simbols or numbers are not allowed';
    else errors.name = '';
    return errors;
  };

  const handlerChangeName = (event) => {
    let value = event.target.value;
    value = value.charAt(0).toUpperCase() + value.slice(1);
    setName(value);
    setErrors(validateActivityName());
  };

  /*GUARDO EN MI ESTADO COUNTRIES LOS PAISES QUE VOY SELECCIONANDO EN MI SELECT****/
  /*Y UTILIZO EL NEW SET PARA ELIMINAR DUPLICADOS**********************************/
  const handlerSelectCountry = (e) => {
    setCountries([...countries, e.target.value]);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const values = {
      season,
      countries,
      name: name.trim(),
      length_time: Number(duration),
      difficulty: Number(difficulty),
    };

    dispatch(actions.createActivity(values));

    setName('');
    setSeason('');
    setDuration(0);
    setCountries([]);
    setDifficulty(0);

    history.push('/countries');
  };

  const handlerDelete = (event) => {
    const deleteCountry = countries.filter(
      (country) => country !== event.target.value
    );
    setCountries(deleteCountry);
  };

  const disabledSubmit = () =>
    !name ||
    !season ||
    !duration ||
    errors.name ||
    !difficulty ||
    !name.trim() ||
    !countries.length;

  return (
    <div className="">
      <div className="">CREATE YOUR CUSTOMIZED ACTIVITY</div>
      <form className="" onSubmit={handlerSubmit}>
        <div className="">
          <label className="">Name: </label>
          <input
            type="text"
            name="name"
            onChange={handlerChangeName}
            onBlur={() => {
              setName(name.trim());
              setErrors(validateActivityName());
            }}
            placeholder={"Here goes the activity's name"}
            value={name}
            className=""
            required
          />
          {/*Renderizo un parrafo que indica el tipo de error del input del name*/}
          {errors.name && <p className="">{errors.name}</p>}

          <label className="">Difficulty: </label>
          <div className="">
            <select
              className=""
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <option hidden selected>
                Select from 1 to 5
              </option>
              {difficulties.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <label className="">Duration: </label>
          <div className="">
            <select
              className=""
              name="duration"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
            >
              <option hidden selected>
                Set the duration
              </option>
              {durationOptions.map((durationTime, index) => (
                <option key={index} value={durationTime.value}>
                  {durationTime.label}
                </option>
              ))}
            </select>
          </div>

          <label className="">Season: </label>
          <div className="">
            <select
              className=""
              name="season"
              onChange={(e) => setSeason(e.target.value)}
              value={season}
            >
              <option hidden selected>
                Select a season
              </option>
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="">
          <label className="">Countries: </label>
          <div className="">
            <select
              className=""
              name="countries"
              onChange={handlerSelectCountry}
            >
              <option hidden selected>
                Select one or more countries
              </option>
              {allcountries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {/*Renderizo un parrafo que indica el error si no se selecciona ningún country*/}
            {/* {!countries.length && (
              <p className="">Select at least one Country</p>
            )} */}
          </div>
          {/*Aquí renderizo las countries seleccionadas en el "select", con un botón para poder
                        eliminarlas si se agregan por error*/}
          <div className="">
            {countries &&
              countries.map((country, index) => (
                <div className="" key={index}>
                  {country}
                  <button className="" value={country} onClick={handlerDelete}>
                    X
                  </button>
                </div>
              ))}
          </div>

          <button className="" disabled={disabledSubmit()} type="submit">
            Create Activity
          </button>
          {disabledSubmit() && (
            <p className="">Button disabled, one or more fields are empty</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateActivityComponent;
