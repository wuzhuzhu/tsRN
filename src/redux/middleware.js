import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';
import { apolloClient } from './apollo';

// define store middlewares as an array
export default [
  promiseMiddleware,
  thunkMiddleware.withExtraArgument(),
  apolloClient.middleware(),
  loggerMiddleware,
];
