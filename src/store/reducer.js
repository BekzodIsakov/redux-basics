import * as actionTypes from './types';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.INCREMENTBY5:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionTypes.DECREMENTBY5:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
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

export default reducer;
