import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    props.onCancel(); // Call onCancel to close the modal
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter The Goal Name"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor="#cccccc" // Update placeholder text color
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={addGoalHandler}>
            <Text style={styles.buttonText}>ADD GOAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={props.onCancel}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    color: '#000000', // Update text color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#5e0acc',
  },
  cancelButton: {
    backgroundColor: '#f31282',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
