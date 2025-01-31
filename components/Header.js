import { View, Text } from "react-native";
import React from "react";
import {
  colors,
  HeaderButton,
  HeaderTitle,
  HeaderView,
} from "../styles/homeStyles";
import { Entypo } from "@expo/vector-icons";
const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
