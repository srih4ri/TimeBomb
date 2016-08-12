/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import ProjectList from './projectList';
import TimeBomb from './timeBomb'
class App extends React.Component {
  render() {
    return(
      <TimeBomb />
    )
  }
}
AppRegistry.registerComponent('Timebomb', () => App);
