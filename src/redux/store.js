import {applyMiddleware, createStore, compose} from 'redux';
import { install as installReduxLoop } from 'redux-loop';
import devTools from 'remote-redux-devtools';

import middleware from './middleware';
import reducer from './reducer';

const enhancer = compose(
  installReduxLoop(),
  applyMiddleware(...middleware),
  devTools()
);

// create the store
const store = createStore(reducer, null, enhancer);

export default store;
