import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalText) {
    setGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalText},
    ]);
  }

  function startGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startGoalHandler} />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => (
            <GoalItem
              text={itemData.item.value}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  goalsContainer: {
    flex: 4,
    marginTop: 20,
  },
});
