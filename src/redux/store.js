import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';


import rootReducer from './root.reducer';

const middewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middewares));

export default store;