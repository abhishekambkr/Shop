import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components /ListItem';
import Additem from './components/Additem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Fruits'},
    {id: uuidv4(), text: 'Veggies'},
    {id: uuidv4(), text: 'Nuts'},
    {id: uuidv4(), text: 'Bakes'},
    {id: uuidv4(), text: 'Pickles'},
    {id: uuidv4(), text: 'Juices'},
    {id: uuidv4(), text: 'Chips'},
    {id: uuidv4(), text: 'Dips'},
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'Empty',
        'Enter an item while adding to your shopping cart!',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems((prevItems) => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };
  const deleteItem = (id) => {
    setItems((previtems) => {
      return previtems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping list" />
      <Additem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});

export default App;
