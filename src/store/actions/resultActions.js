import * as actionTypes from './actionTypes';

// aciton creator are useful for asynchronous actions. You can use them for synchronous actions as well.

const saveResult = (counter) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: counter,
  };
};

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log('[Middleware] dispatching', action);
//       const result = next(action);
//       console.log('[Middleware] next state', store.getState());
//       return result;
//     };
//   };
// };

////////// Isn't custom made middleware(logger) and the below one(redux-thunk) similar?

export const storeResult = (counter) => {
  return (
    dispatch,
    getState /*another argument passed by redux-thunk. This's needed in case you need state before reaching reducer*/
  ) => {
    console.log(getState().counterReducer); //could've used 'counter' argument as well. Try not to overuse getState(). Instead pass needed info as actionCreator function arguments.
    setTimeout(() => {
      dispatch(saveResult(counter));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id,
  };
};
