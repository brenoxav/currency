import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import currencies from './currencies/currencies';

const reducer = currencies;

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
