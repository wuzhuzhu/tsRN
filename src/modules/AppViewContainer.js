import {connect} from 'react-redux';
import AppView from './AppView';
import {get} from 'lodash'

export default connect(
  state => ({
    isReady: get(state, 'session.isReady'),
    isLoggedIn: get(state, 'auth.isLoggedIn'),
  })
)(AppView);
