import React from 'react';
import {Text,
        View,
        StyleSheet,
        TouchableHighlight,
        ListView,
} from 'react-native';

import TaskRow from './taskRow'

const styles = StyleSheet.create({
  content: {
    paddingTop: 60,
    flex: 1,
  },
  timer: {
    flex: 0.2,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  timerText: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 64,
    color: '#808080',
    textAlign: 'center',
  },
  startTimerButton: {
    flex: 0.07,
    backgroundColor: '#27AE60',
    justifyContent: 'center'
  },
  startTimerText: {
    fontFamily: 'HelveticaNeue',
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  taskListContainer: {
    flex: 0.2,
    justifyContent: 'center',
    padding: 5,
    marginTop: 20
  },
  taskHeader:{
    flex: 0.2,
    fontSize: 16,
    letterSpacing: 1.45,
    color: '#27AE60',
    fontWeight: 'bold',
    marginBottom: 10
  },
  taskList:{

  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE'
  },
  addTaskButtonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskButton: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#27AE60',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addTaskButtonText: {
    color: '#27AE60',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1.45,
    textAlign: 'center',
  }
})

class ProjectShow extends React.Component{

  state = {
    tasksList: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.project.tasks)
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
      key={`${sectionID}-${rowID}`}
      style={styles.separator}
      />
    )
  }

  render(){
    return(
      <View style={styles.content}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            00:00:00
          </Text>
        </View>
        <View style={styles.startTimerButton}>
           <TouchableHighlight style={styles.startTimerTouchable}>
             <Text style={styles.startTimerText}>START TIMER</Text>
           </TouchableHighlight>
        </View>
        <View style={styles.taskListContainer}>
          <Text style={styles.taskHeader}> TASKS </Text>
          <ListView
           dataSource={this.state.tasksList}
           automaticallyAdjustContentInsets= {false}
      renderRow={(task) => <TaskRow task={task} />}
      renderSeparator={this._renderSeparator}
           style={styles.taskList} />
      </View>
      <View style={styles.addTaskButtonContainer}>
        <View style={styles.addTaskButton}>
          <Text style={styles.addTaskButtonText}>
           ADD TASK
          </Text>
      </View>
      </View>
      </View>
    )
  }
};


export default ProjectShow;
