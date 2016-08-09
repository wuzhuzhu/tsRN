import 'es6-symbol/implement';
// import {Provider} from 'react-redux';  //Use ApolloProvider instead.
import { ApolloProvider } from 'react-apollo';
import store from '../redux/store';
import { apolloClient } from '../redux/apollo'
import AppViewContainer from './AppViewContainer';
import React from 'react';
import {Platform, BackAndroid} from 'react-native';
import * as NavigationStateActions from './navigation/NavigationState';
import gql from 'graphql-tag';
import get from 'lodash';

// init Apollo gql tags.
global['gql'] = gql;

const iHealth = (Platform.OS === 'ios') ?
  React.createClass({ //

    render() {
      return (
        <ApolloProvider store={store} client={apolloClient}>
          <AppViewContainer />
        </ApolloProvider>
      );
    }
  }) :
  React.createClass({

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
  },

  navigateBack() {
    const navigationState = store.getState().navigationState;
    const currentTab = get(navigationState, `routes.${navigationState.index}`);

    // if we are in the beginning of our tab stack
    if (currentTab.index === 0) {

      // if we are not in the first tab, switch tab to the leftmost one
      if (navigationState.index !== 0) {
        store.dispatch(NavigationStateActions.switchTab(0));
        return true;
      }

      // otherwise let OS handle the back button action
      return false;
    }

    store.dispatch(NavigationStateActions.popRoute());
    return true;
  },

  render() {
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <AppViewContainer />
      </ApolloProvider>
    );
  }
});

export default iHealth
