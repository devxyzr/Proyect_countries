import axios from 'axios';

export function getCharacters() {
  // cambiar por coutries
  return async function (dispatch) {
    let json = await axios.get('http://localhost:3001/countries');
    return dispatch({
      type: 'GET_CHARACTERS',
      payload: json.data,
    });
  };
}
