import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function App() {
  const computedValue = 123456.23;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.computedValue}>{computedValue.toLocaleString()}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.firstLineButton}>
          <Text style={styles.btnText}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.firstLineButton}>
          <Text style={styles.btnText}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.firstLineButton}>
          <Text style={styles.btnText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lastColButton}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lastColButton}>
          <Text style={styles.btnText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lastColButton}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lastColButton}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BTN_MARGIN = 5;
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4 - BTN_MARGIN * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
    padding: 10,
  },

  computedValue: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
  },

  firstline: {
    flexDirection: "row",
    backgroundColor: "grey",
  },

  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
  },

  firstLineButton: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: buttonWidth / 2,
    height: buttonWidth - 5,
  },
  lastColButton: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: buttonWidth / 2,
    height: buttonWidth - 5,
  },
});
