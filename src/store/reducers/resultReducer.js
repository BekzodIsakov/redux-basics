import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../Utility';

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const newResult = state.results.filter((res) => res.id !== action.id);
  return updateState(state, { results: newResult });
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
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultReducer;
