import { useColorScheme, Text } from "react-native";
import { Colors } from "../constants/Color";
import React from "react";

const ThemedText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
