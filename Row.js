import React from 'react';
import { View, Text,StyleSheet, Image } from'react-native';

const styles = StyleSheet.create({
  /* PROJECTS: */
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15
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
    flex: 0.07,
    textAlign: 'center'
  }
});

const Row = (project) => (
  <View style={styles.container}>
    <View style={styles.projectDetails}>
      <Text style={styles.projectName}>
       {project.name}
      </Text>
      <Text style={styles.openProjectArrow} >
         
      </Text>
    </View>
  <Text style={styles.projectTimeSpent} >
    Total time worked 05:00 hours
  </Text>

  </View>
);

export default Row;
