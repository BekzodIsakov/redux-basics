import * as actionTypes from './types';

// aciton creator are useful for asynchronous actions. You can use them for synchronous actions as well.

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const incrementBy5 = (payload) => {
  return {
    type: actionTypes.INCREMENTBY5,
    payload,
  };
};

export const decrementBy5 = (payload) => {
  return {
    type: actionTypes.DECREMENTBY5,
    payload,
  };
};

export const storeResult = (counter) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: counter,
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id,
  };
};
