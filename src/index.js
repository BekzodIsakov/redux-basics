import React from 'react';
import ReactDOM from 'react-dom';
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose /*for combining enhancers*/,
} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] dispatching', action);
      setTimeout(() => {
        next(action);
      }, 3000);
      console.log('[Middleware] next state', store.getState());
      // return result;
    };
  };
};

// Connects devtools extension to javascript code in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    counterReducer: counterReducer,
    resultReducer: resultReducer,
  }),
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
