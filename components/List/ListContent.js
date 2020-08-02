import React, {useState} from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, FlatList, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import UpdateModal from './UpdateModal';


const ListContent = ({items, onPressCheckbox, onDeleteItem, onUpdateItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View>
      <FlatList 
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
          style={styles.listItem}
          onLongPress={()=>{setModalVisible(true);}}>
            <UpdateModal
              onDeleteItem={onDeleteItem}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              onUpdateItem={onUpdateItem}
              item={item}
            />
            <View style={styles.listItemView}>
              <Icon
              name={item.completed ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline"}
              size={15}
              onPress={() => onPressCheckbox(item.id)}/>
              <Text
              style={item.completed ? styles.listItemTextCompleted : styles.listItemText}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItemText: {
    paddingLeft: 10,
    fontSize: 14,
  },
  listItemTextCompleted: {
    fontSize: 14,
    paddingLeft: 10,
    textDecorationLine: 'line-through',
  },
});

export default ListContent;