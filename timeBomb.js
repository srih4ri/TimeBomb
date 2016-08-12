import React from 'react';
import {
  NavigatorIOS
} from 'react-native';

import ProjectList from './projectList';

class TimeBomb extends React.Component {

  render() {
    return(
      <NavigatorIOS
      initialRoute={{
        component: ProjectList,
        title: ''
      }}
      style={{flex: 1}}
      />
    )
  }
}

export default TimeBomb;
