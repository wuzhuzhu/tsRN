import {connect} from 'react-redux';
import CounterView from './CounterView';

import _ from 'lodash'

export default connect(
  state => ({
    counter: _.get(state, 'counter.value'),
    loading: _.get(state, 'counter.loading'),
    userName: _.get(state, 'auth.currentUser.name'),
    userProfilePhoto: _.get(state, 'auth.currentUser.picture'),
  })
)(CounterView);
