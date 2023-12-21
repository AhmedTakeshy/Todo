import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,Button } from "react-native";
import React, { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const  [isModalVisible, setIsModalVisible] = useState(false);


  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  }

  const addGoalHandler = (enteredGoal) => {
    setGoalList((currentGoals) => [
      {
        text: enteredGoal,
        id: Math.random().toString(),
      },
      ...currentGoals,
    ]);
  };


    const removeGoalHandler = (goalId) => {
      setGoalList((currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== goalId);
      });
    }

  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.appContainer}>
      <Button color="#311b6b" title="Add New Goal" onPress={startAddGoalHandler} />
      {isModalVisible&&(<GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} onCancel={()=>setIsModalVisible(false)}/> )}
      <GoalItem goalList={goalList} onRemoveGoal={removeGoalHandler}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "start",
    marginTop: 50,
    backgroundColor: "#fff",
  },
});
