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
  },
  addButtonTouchable: {
    flex: 0.5,
  },
  addButtonContainer: {
    justifyContent: 'center',
    padding: 2,
    backgroundColor: '#27ae60',
    flex: 1,
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

  onSubmit(){
    console.log("Called with", this.state.newItem)
    this.props.onSubmit(this.state.newItem)
  }

  render(){
    console.log("Rendering form")
    return (<View style={styles.formContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={this.state.newItem}
          onChangeText={(newItem) => this.setState({newItem})}
        />
      </View>
      <TouchableHighlight
        style={styles.addButtonTouchable}
        onPress={this.onSubmit.bind(this)}
      >
        <View style={styles.addButtonContainer} >
          <Text style={styles.addButton}>
            ADD
          </Text>
        </View>
      </TouchableHighlight>

    </View>)
  }

}
AddListItemForm.propTypes = {
  defaultText: React.PropTypes.string,
  onSubmit: React.PropTypes.func.isRequired
}

export default AddListItemForm;
