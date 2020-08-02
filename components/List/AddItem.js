import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const AddItem = ({onAddItem}) => {
  const [newItem, onChangeText] = useState('');

  return (
    <View style={styles.addItemStyle}>
      <Icon
        name="add" size={20} color='lightskyblue'
        onPress={() => {
          onAddItem(newItem);
          onChangeText('');
        }}
      />
      <TextInput
        style={{borderWidth: 0}}
        placeholder="Add new to do"
        onChangeText={text => onChangeText(text)}
        defaultValue={newItem}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addItemStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});

export default AddItem;

