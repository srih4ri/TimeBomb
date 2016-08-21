import React from 'react';

import {
  View,
  ListView,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 0.5,
    borderColor: '#eee',
    padding: 10,
    flex: 1
  },
  addButton: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  },
  addButtonContainer: {
    justifyContent: 'center',
    padding: 2,
    flex: 0.5,
    backgroundColor: '#27ae60',
  },
  textInputContainer: {
    flex: 0.5,
    marginBottom: 5,
  },
  textInput: {
   flex: 1,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1
  }
})

class AddListItemForm extends React.Component {
  state =  {
    newItem: 'Ushar'
  }
  render(){
    console.log("Rendering form")
    return (<View style={styles.formContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={this.state.newItem}
        />
      </View>
      <View style={styles.addButtonContainer} >
        <TouchableHighlight>
          <Text style={styles.addButton}>
            ADD
          </Text>
        </TouchableHighlight>
      </View>
    </View>)
  }

}

export default AddListItemForm;
