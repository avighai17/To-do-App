import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Checkbox from "expo-checkbox";

export default function App() {
  //let index = 1
  let task = [];
  const [Task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [deleteTask, setdeleteTask] = useState("");
  const [prevName, setprevName] = useState("");
  const [newName, setnewName] = useState("");
  const [editingKey, setEditingKey] = useState(null);

  const addTask = () => {
    if (!Task.trim()) {
      alert("Task cannnot be empty!");
      return;
    }

    setList((prev) => [...prev, { name: Task, status: "Pending" }]);

    // console.log(list)
    setTask("");
  };

  const removeTask = (key) => {
    const updatedList = [...list];
    updatedList.splice(key, 1);
    setList(updatedList);
    setdeleteTask("");
  };

  const editTask = (key) => {
    setTask(list[key].name);
    setEditingKey(key);
  };

  const saveEdit = () => {
    if (editingKey === null) return;

    const updatedList = [...list];
    updatedList[editingKey].name = Task;
    setList(updatedList);
    setTask("");
    setEditingKey(null);
  };

  const toggleCompletion = (key) => {
    const updatedList = [...list];
    updatedList[key].status =
      updatedList[key].status === "Completed" ? "Pending" : "Completed";
    setList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TO DO APP</Text>

      <TodoInput
        Task={Task}
        setTask={setTask}
        editingKey={editingKey}
        saveEdit={saveEdit}
        addTask={addTask}
      />

      {/* <Todos /> */}
      <toDos list={list} editTask={editTask} removeTask={removeTask} />
    </View>
  );
}

function toDos({ list, editTask, removeTask }) {
  return (
    <FlatList
      data={list}
      // <Todo item index />
      renderItem={({ item, index }) => (
        <toDo
          list={list}
          editTask={editTask}
          removeTask={removeTask}
          item={item}
          index={index}
        />
      )}
    />
  );
}

function toDo({ list, editTask, removeTask, item, index }) {
  return (
    <View style={styles.task}>
      <Checkbox
        style={styles.checkbox}
        value={item.status === "Completed" ? true : false}
        onValueChange={() => toggleCompletion(index)}
      />
      <Text style={styles.text}>{item.name}</Text>

      <AntDesign
        name="edit"
        size={24}
        color="black"
        onPress={() => editTask(index)}
      />

      <AntDesign
        style={styles.del}
        name="delete"
        size={24}
        color="black"
        onPress={() => removeTask(index)}
      />
    </View>
  );
}

function TodoInput({ setTask, Task, editingKey, saveEdit, addTask }) {
  return (
    <View style={styles.add}>
      <TextInput
        style={styles.input}
        placeholder="e.g Office Work"
        onChangeText={setTask}
        value={Task}
      />
      <Button
        style={styles.bu}
        title={editingKey !== null ? "Save Edit" : "Add Task"}
        onPress={editingKey !== null ? saveEdit : addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    // justifyContent: 'space-around',
  },
  heading: {
    backgroundColor: "gray",
    textAlign: "center",
    verticalAlign: "center",
    padding: "20",
    width: 350,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: "8",
    margin: "10",
    width: "250",
    fontSize: "24",
  },
  task: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "pink",
    width: 350,
    padding: 20,
    fontSize: 20,
    justifyContent: "space-around",
  },
  text: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 8,
  },
  add: {
    flexDirection: "row",
  },
  bu: {
    backgroundColor: "grey",
  },
  del: {
    paddingRight: 10,
    paddingLeft: 15,
  },
});
