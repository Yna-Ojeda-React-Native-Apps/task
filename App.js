import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from './screens/TaskList';

const App = () => {
  return (
    <View style={styles.container}>
      <TaskList title="My Tasks"/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;