import React from 'react';
import {
  NavigatorIOS
} from 'react-native';

import ProjectList from './projectList';
import AddListItemForm from './addListItemForm';

class TimeBomb extends React.Component {

  render() {
    return(
      <NavigatorIOS
        initialRoute={{
          component: ProjectList,
          title: 'Form'
        }}
        style={{flex: 1}}
      />
    )
  }
}

export default TimeBomb;
