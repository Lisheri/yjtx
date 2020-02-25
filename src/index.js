import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'lightbox2/src/css/lightbox.css';
import 'lightbox2/src/js/lightbox.js';
import {compose,createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer  from './store/reducers/index';
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
  ReactDOM.render(
    <Provider store={ store }>
      <App /></Provider>,
    document.getElementById('root'),
  );