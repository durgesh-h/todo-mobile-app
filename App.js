import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./styles/homeStyles";
import Home from "./components/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);
  const loadTodos = () => {
    AsyncStorage.getItem("storedTodos")
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Container>
      <Home todos={todos} setTodos={setTodos} />
      <StatusBar style="light" />
    </Container>
  );
}
