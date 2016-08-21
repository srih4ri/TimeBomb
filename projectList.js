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
import ProjectShow from './projectShow';
import AddListItemForm from './addListItemForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    flexDirection: 'column'
  },
  header: {
    padding: 10,
    flex: 0.05,
    flexDirection: 'row',
  },
  projectList: {
    flex: 0.8,
  },
  projectListContainer: {
    flex: 0.7,
    padding: 0
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
  addProjectForm: {
    flex: 0.2
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
    this._handleProjectArrowClick = this.handleProjectArrowClick.bind(this);
    this.state = {
      projects: data.projects,
      dataSource: ds.cloneWithRows(data.projects)
    }
  }


  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    )
  }

  handleProjectArrowClick(project) {
    this.props.navigator.push({
      component: ProjectShow,
      title: project.name,
      passProps: {project: project}
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingText}>PROJECTS</Text>
          <Text style={styles.plusIcon}></Text>
        </View>
        <View style={styles.addProjectForm} >
          <AddListItemForm/>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          automaticallyAdjustContentInsets={false}
          renderRow={(project, sectionID, rowID) =>
            <Row
              project={project}
              handleProjectArrowClick={this._handleProjectArrowClick}
            />
          }
          renderSeparator={this._renderSeparator}
          style={styles.projectList}
          contentContainerStyle={styles.projectListContainer}/>
      </View>
    );
  }
}

export default ProjectList;
