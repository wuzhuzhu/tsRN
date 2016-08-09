import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import _ from 'lodash'

import * as NavigationState from '../../modules/navigation/NavigationState';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const ColorView = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  },

  onNextPress() {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    }));
  },

  render() {
    const invitationCount = _.get(this.props, 'stats.getStats.invitationCount')
    const measurePatientCount = _.get(this.props, 'stats.getStats.measurePatientCount')
    const patientTotalCount = _.get(this.props, 'stats.getStats.patientTotalCount')
    const index = this.props.index;
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={this.onNextPress}>
          <Text onPress={this.onNextPress}>发出的邀请数目:{invitationCount}</Text>
          <Text>总患者数目: {patientTotalCount}</Text>
          <Text>总测量过的患者数: {measurePatientCount}</Text>
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ColorView;
