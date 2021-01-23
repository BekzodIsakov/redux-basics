import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../Utility';

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateState(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.payload,
        }),
      });
    // {
    //   ...state,
    //   results: state.results.concat({
    //     id: new Date(),
    //     value: action.payload,
    //   }),
    // };
    case actionTypes.DELETE_RESULT:
      const newResult = state.results.filter((res) => res.id !== action.id);
      return updateState(state, { results: newResult });
    // {
    //   ...state,
    //   results: newResult,
    // };
    default:
      return state;
  }
};

export default resultReducer;
