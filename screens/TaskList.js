import React, {useState} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ListHeader from '../components/List/ListHeader';
import { v4 as uuidv4 } from 'uuid';
import ListContent from '../components/List/ListContent';
import AddItem from '../components/List/AddItem';
import UpdateModal from '../components/List/UpdateModal';

const TaskList = ({title}) => {
  const [items, setItems] = useState([
    {id: uuidv4(), name: "Task Item A", completed: false},
    {id: uuidv4(), name: "Task Item B", completed: false},
    {id: uuidv4(), name: "Task Item C", completed: false},
    {id: uuidv4(), name: "Task Item D", completed: false},
    {id: uuidv4(), name: "Task Item E", completed: true},
    {id: uuidv4(), name: "Task Item F", completed: true},
    {id: uuidv4(), name: "Task Item G", completed: true},
    {id: uuidv4(), name: "Task Item H", completed: true},
  ]);
  const [modalItem, setModalItem] = useState({id: -1, name:'loading'});
  const [modalVisible, setModalVisible] = useState(false);

  const onPressCheckbox = (id) => {
    setItems( prevItems => {
      let updatedItems = [...prevItems];
      let index = updatedItems.findIndex(item => item.id === id);
      updatedItems[index].completed = !updatedItems[index].completed;
      return updatedItems;
    });
  };
  const onAddItem = (name) => {
    if (!name) {
      Alert.alert(
        'Error',
        'Please enter an item',
        [{text: 'OK'}]
      );
    } else {
      setItems( prevItems => {
        return [{id: uuidv4(), name: name, completed: false},...prevItems];
      });
    }
  };
  const onDeleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
    setModalVisible(false);
    setModalItem({id: -1, name:'loading'});

  }

  const onUpdateItem = (id, name) => {
    setItems(prevItems => {
      if (!name) {
        setModalVisible(false);
        setModalItem({id: -1, name:'loading'});
        return prevItems;
      } else {
        setItems( prevItems => {
          let updatedItems = [...prevItems];
          let index = updatedItems.findIndex(item => item.id === id);
          updatedItems[index].name = name;
          return updatedItems;
        });
        setModalVisible(false);
        setModalItem({id: -1, name:''});
      }
    });
  }

  return (
    <View>
      <UpdateModal
        onDeleteItem={onDeleteItem}
        onUpdateItem={onUpdateItem}
        item={modalItem}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <ListHeader title={title} />
      <AddItem onAddItem={onAddItem}/>
      <ListContent
      items={items.filter((item) => !item.completed)}
      onPressCheckbox={onPressCheckbox}
      setModalVisible={setModalVisible}
      setModalItem={setModalItem}
      />
      {
        (items.filter((item) => item.completed).length > 0 ) ?
          <View>
            <Text  style={styles.completedHeaderStyle} >Completed</Text>
            <ListContent
            items={items.filter((item) => item.completed)}
            onPressCheckbox={onPressCheckbox}
            setModalVisible={setModalVisible}
            setModalItem={setModalItem}
            />
          </View>
        :
          (<View />)
      }
    </View>
  );
};

TaskList.defaultProps = {
  title: 'My Tasks',
};
const styles = StyleSheet.create({
  completedHeaderStyle: {
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
  },
});

export default TaskList