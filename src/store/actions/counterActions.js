import * as actionTypes from './actionTypes';

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
