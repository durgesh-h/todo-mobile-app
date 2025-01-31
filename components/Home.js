import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {
  const initialTodos = [
    {
      title: "Hello",
      date: "Fri, 08 Jan 2021 16:32:11 GMT",
      key: "1",
    },
    {
      title: "Hi",
      date: "Fri, 08 Jan 2021 16:32:11 GMT",
      key: "2",
    },
    {
      title: "byee",
      date: "Fri, 08 Jan 2021 16:32:11 GMT",
      key: "3",
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const handleClearTodos = () => {
    setTodos([]);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
  };
  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems todos={todos} setTodos={setTodos} />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
