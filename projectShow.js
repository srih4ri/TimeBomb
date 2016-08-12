import React from 'react';
import {Text,
        View,
        StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    paddingTop: 60
  }
})

class ProjectShow extends React.Component{

  render(){
    return(
      <View style={styles.content}>
      <Text>{this.props.project.name}</Text>
      </View>
    )
  }
};


export default ProjectShow;
