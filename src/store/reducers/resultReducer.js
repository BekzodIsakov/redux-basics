import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.payload,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const newResult = state.results.filter((res) => res.id !== action.id);
      return {
        ...state,
        results: newResult,
      };
    default:
      return state;
  }
};

export default resultReducer;
