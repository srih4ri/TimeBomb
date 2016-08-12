import React from 'react';

import {
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
    marginTop: 30,
    flexDirection: 'column'
  },
  header: {
    padding: 10,
    flex: 0.04,
    flexDirection: 'row',
  },
  projectList: {
    flex: 0.96,
    padding: 10,
  },
  headingText: {
    fontSize: 16,
    color: '#27AE60',
    letterSpacing: 1.45,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    flex: 0.93,
    textAlign: 'left',
  },
  plusIcon: {
    fontFamily: 'FontAwesome',
    fontSize: 22,
    color: '#27AE60',
    fontWeight: '900',
    flex: 0.07,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE'
  }
});


class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    const data = {
      projects: [
        {
          name: "Timebomb Project",
          tasks: [
            {name: "Draw Screens"},
            {name: "Hire Labour"},
            {name: "Rebel"}
          ]
        },
        {
          name: "Emami Project",
          tasks: [
            {name: "Draw Screens"},
            {name: "Hire Labour"},
            {name: "Rebel"}
          ]
        },
        {
          name: "Blog Article",
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

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    console.log('Key',`${sectionID}-${rowID}`)
    return (
      <View
      key={`${sectionID}-${rowID}`}
      style={styles.separator}
      />
    )
  }


  render(){
    console.log("Rendering List View", this._renderSeparator)
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headingText}>PROJECTS</Text>
      <Text style={styles.plusIcon}></Text>
      </View>
      <ListView
      dataSource= {this.state.dataSource}
      renderRow={(data) => (<Row {...data}/>)}
      renderSeparator={this._renderSeparator}
      style={styles.projectList}/>
      </View>
    );
  }
}

export default ProjectList;
