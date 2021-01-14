import * as actionTypes from '../types';

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
          value: action.counter,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const newResult = state.results.filter((res) => res.id !== action.id);
      return {
        ...state,
        results: newResult,
      };
  }
  return state;
};

export default resultReducer;
