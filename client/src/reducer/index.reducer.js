const initialState = {
  characters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return { ...state, characters: action.payload };
  }
}

export default rootReducer;
