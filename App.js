import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  let index = 1
  let task = []
  const [Task,setTask] = useState('')
  const [list, setList] = useState([])
  
  
  var addTask = () => {
    setList(prev => [...prev, {name: Task, status: 'Pending', key: index}])
    index++;
    console.log(list)
    setTask('');
  }
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>TO DO APP</Text>


      
      <TextInput
        style = {styles.input}
        placeholder='e.g Office Work'
        onChangeText={setTask}
        value={Task}
      />
      <Button title = 'Add Task' onPress={addTask}/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading:{
    backgroundColor: 'gray',
    textAlign: 'center',
    verticalAlign: 'center',
    padding: '20',
  },
  
  input:{
    borderWidth: 1,
    borderColor: 'black',
    padding: '8',
    margin: '10',
    width: '250',
    fontSize: '24',
  }
});
