import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../Utility';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateState(state, { counter: state.counter + 1 });
    // {
    //   ...state,
    //   counter: state.counter + 1,
    // };
    case actionTypes.DECREMENT:
      return updateState(state, { counter: state.counter - 1 });
    // {
    //   ...state,
    //   counter: state.counter - 1,
    // }
    case actionTypes.INCREMENTBY5:
      return updateState(state, { counter: state.counter + action.payload });
    // {
    //   ...state,
    //   counter: state.counter + action.payload,
    // };
    case actionTypes.DECREMENTBY5:
      return updateState(state, { counter: state.counter - action.payload });
    // what updateState returns:
    // {
    //   ...state,
    //   counter: state.counter - action.payload,
    // };
    default:
      return state;
  }
};

export default counterReducer;
