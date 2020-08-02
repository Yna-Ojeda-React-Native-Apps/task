import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{ title }</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 28,
  }
});

export default ListHeader;