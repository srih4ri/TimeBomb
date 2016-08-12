import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container :{
    flexDirection: 'row',
    flex: 1,
    padding: 10
  },
  radio: {
    flex: 0.07,
  },
  radioOuter: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#27AE60'
  },
  radioInner: {
    flex: 0.7,
    margin: 2,
    backgroundColor: '#27AE60',
    borderRadius: 10
  },
  taskName: {
    flex: 0.95,
    paddingLeft: 20,
    padding: 2,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
class TaskRow extends React.Component {
  render (){
    console.log("Rendering task with props", this.props.task.name)
    return(
      <View style={styles.container}>
      <View style={styles.radio}>
      <View style={styles.radioOuter}>

          <View style={styles.radioInner}>

          </View>
      </View>
      </View>
      <Text style={styles.taskName}>{this.props.task.name}</Text>
      </View>
    )
  }
}


export default TaskRow;
