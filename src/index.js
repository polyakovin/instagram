import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import photos from './photos.json';

import {BrowserRouter} from "react-router-dom";

import {createStore,applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import counter from './reducers';
import photosReducer from './reducers/photos';

const initialState = localStorage['redux-store']
    ? JSON.parse(localStorage['redux-store'])
    : {
  counter: {
    value: 0,  
  },
  photos
};
const logger = store => next => action => {
  let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
const saver = store => next => action => {
  let result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
};
const storeFactory = (initialState = {}) => {
  return applyMiddleware
    (logger, saver) // middlewares
    (createStore)
    (combineReducers({ counter, photosReducer }), initialState);
};
const store = storeFactory(initialState);




ReactDOM.render(( 
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>),
	 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
