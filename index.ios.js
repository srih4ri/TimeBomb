/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View,
  ListView,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

import Row from './Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  addProjectContainer: {
    borderColor: 'gray',
    borderWidth: 1
  }
});

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    const data = {
      projects: [
        {
          name: "Complete Timebomb",
          tasks: [
            {name: "Draw Screens"},
            {name: "Hire Labour"},
            {name: "Rebel"}
          ]
        },
        {
          name: "Capture the world",
          tasks: [
            {name: "Draw Screens"},
            {name: "Hire Labour"},
            {name: "Rebel"}
          ]
        }

      ]
    }
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log("Projects are", data.projects);
    this.state = {
      projects: data.projects,
      dataSource: ds.cloneWithRows(data.projects)
    }
  }

  handleAddProject() {
    let projects = this.state.projects;
    console.log("State", this.state);
    projects.push({name: this.state.newProjectName});
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({projects: projects, dataSource: ds.cloneWithRows(projects)});
  }

  handleTextInput(event) {
    let textInput = {newProjectName: event.nativeEvent.text}
    let newState = {}
    Object.assign(newState, this.state, textInput)
    this.setState(newState);
  }

  render(){
    console.log("Rendering List View")
    return (
      <View style={styles.container}>
      <Text>TimeBomb</Text>
      <View style={styles.addProjectContainer}>
      <TextInput
      style= {styles.textInput}
      onChange = {this.handleTextInput.bind(this)}
      />
      <TouchableHighlight
      onPress={this.handleAddProject.bind(this)}>
      <Text>Add a Project</Text>
      </TouchableHighlight>
      </View>
      <ListView
      dataSource= {this.state.dataSource}
      renderRow={(data) => <Row {...data} />}
      />
      </View>
    );
  }
}

export default ProjectList;

AppRegistry.registerComponent('Timebomb', () => ProjectList);
