import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Demo() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //   const [count, setCount] = useState(0);
  //   const [timer, setTimer] = useState(0);

  const [id, setId] = useState(null);
  const [pause, setPause] = useState(false);

  const startTimer = () => {
    if (!id)
      setId(
        setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000)
      );
  };

  const pauseTimer = () => {
    // setId((timer) => clearInterval(timer));

    setId((timer) => clearInterval(timer));
    console.log(id);
  };

  const resumeTimer = () => {
    //   setPause(false);
    if (!id) {
      setId(
        setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000)
      );
    }

    console.log(id);
  };

  const stopTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    // clearInterval(id);
    setId((timer) => clearInterval(timer));
  };

  useEffect(() => {
    if (seconds >= 60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
    if (minutes >= 60) {
      setMinutes(0);
      setHours(hours + 1);
    }
  }, [seconds, minutes, hours]);

  //   useEffect(() => {
  //     if (count === 10 && timer === 10) {
  //       setCount(0);
  //       setTimer(0);
  //     }
  //   }, [count, timer]);

  //   const createTimer = () => {
  //     setTimer(timer + 1);
  //     console.log(timer);
  //   };

  //   const createTwoButtonAlert = () => {
  //     setCount(count + 1);
  //     // setTimeout(5000);
  //     console.log(count);

  //     // Alert.alert("Alert", "My Alert Msg", [
  //     //   {
  //     //     text: "Cancel",
  //     //     //onPress: () => console.log("Cancel Pressed"),
  //     //     style: "cancel",
  //     //   },
  //     //   { text: "OK", onPress: () => console.log("OK Pressed") },
  //     // ]);
  //   };
  return (
    <View style={styles.view}>
      <View style={styles.display}>
        <Text style={styles.text}>
          {hours < 10 ? "0" + hours : hours}:{" "}
          {minutes < 10 ? "0" + minutes : minutes}:{" "}
          {seconds < 10 ? "0" + seconds : seconds}{" "}
        </Text>
      </View>
      <View style={styles.Btn}>
        <Button title="Start" onPress={startTimer} />
      </View>

      <View style={styles.Btn}>
        <Button title="Pause" onPress={pauseTimer} />
      </View>

      <View style={styles.Btn}>
        <Button title="Resume" onPress={resumeTimer} />
      </View>

      <View style={styles.Btn}>
        <Button title="Reset" onPress={stopTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flexDirection: "row",
  },
  text: {
    justifyContent: "center",
    paddingTop: 10,
    flexDirection: "row",
    fontSize: 30,
    margin: 20,
  },
  Btn: {
    width: 100,
    margin: 10,
  },
});
