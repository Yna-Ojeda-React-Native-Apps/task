import React, {useState} from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity} from 'react-native';


const UpdateModal = ({modalVisible, item, onDeleteItem, onUpdateItem}) => {
  const [newItemName, onChangeItemName] = useState('');
  return(
    // <View style={(modalVisible) ? {opacity: 1} : {opacity: 0}}>
    //   <Text>{item.name}</Text>
    // </View>
    <Modal
    transparent={true}
    visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <TextInput
              style={{borderBottomWidth: 1}}
              onChangeText={text => onChangeItemName(text)}
              defaultValue={item.name}
              multiline={true}
            />
          </View>
          <View style={styles.modalActions}>
            <Text
            style={{color: 'red', padding: 10}}
            onPress={() => {
              onDeleteItem(item.id);
            }}>
              Delete
            </Text>
            <Text
            style={{color: 'blue', padding: 10}}
            onPress={() => {
              onUpdateItem(item.id, newItemName);
            }}>
              Save
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBody: {
    paddingTop: 10,
  },
  modalActions: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default UpdateModal;