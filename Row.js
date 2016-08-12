import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableHighlight } from'react-native';

const styles = StyleSheet.create({
  /* PROJECTS: */
  container: {
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  projectDetails: {
    flex: 0.6,
    flexDirection: 'row',
    padding: 1,
  },
  projectName: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    flex: 0.93,
  },
  projectTimeSpent: {
    flex: 0.4,
    fontSize: 14,
    color: '#808080'
  },
  openProjectArrow: {
    fontFamily: 'FontAwesome',
    fontSize: 22,
    color: 'rgba(12,128,128,10)',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  projectArrowTouchable: {
    flex: 0.08,
  }
});
class Row extends React.Component {

  render() {
    const project = this.props.project;
    return(<View style={styles.container}>
    <View style={styles.projectDetails}>
    <Text style={styles.projectName}>
      {project.name}
    </Text>
      <TouchableHighlight style={styles.projectArrowTouchable}  onPress={ () => this.props.handleProjectArrowClick(project) } >
    <Text style={styles.openProjectArrow} >
    
    </Text>
    </TouchableHighlight>
    </View>
    <Text style={styles.projectTimeSpent} >
    Total time worked 05:00 hours
    </Text>

    </View>)
  }
}

export default Row;
