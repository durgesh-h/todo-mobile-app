import { View, Text, Modal } from "react-native";
import React from "react";
import {
  colors,
  HeaderTitle,
  ModalAction,
  ModalActionGroup,
  ModalButton,
  ModalContainer,
  ModalIcon,
  ModalView,
  StyledInput,
} from "../styles/homeStyles";
import { AntDesign } from "@expo/vector-icons";
const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  handleEditTodo,
  todos,
}) => {
  const handleCloseModal = () => {
    setModalVisible(false);
    setTodoInputValue("");
  };
  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      });
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      });
    }
    setTodoInputValue("");
  };

  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={30} color={colors.secondary} />
      </ModalButton>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>Todos</HeaderTitle>
              <AntDesign name="edit" size={30} color={colors.tertiary} />
            </ModalIcon>
            <StyledInput
              Placeholder="Add a todo"
              PlaceholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={true}
              onChangeText={(text) => {
                setTodoInputValue(text);
              }}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />

            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
