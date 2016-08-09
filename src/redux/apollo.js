import ApolloClient, { createNetworkInterface } from 'apollo-client';
import {AsyncStorage} from 'react-native';
import { AUTHENTICATION_STORAGE_KEY } from '../utils/authentication'

const networkInterface = createNetworkInterface('http://localhost:3000/graphql/');

// TODO: add auth info here
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers.authorization = AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY) || null;
    next();
  }
}]);


export const apolloClient = new ApolloClient({
  networkInterface
});

export const apolloMiddleware = apolloClient.middleware();
export const apolloReducer = apolloClient.reducer();