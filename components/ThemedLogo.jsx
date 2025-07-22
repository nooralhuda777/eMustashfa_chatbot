import { Image, useColorScheme, StyleSheet } from "react-native";
import React from "react";
import DarkLogo from "../assets/img/dark_NA_logo.jpg";
import LightLogo from "../assets/img/light_NA_logo.jpg";
const ThemedLogo = (style, ...props) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return <Image source={logo} style={[styles.img, style]} {...props} />;
};

export default ThemedLogo;
const styles = StyleSheet.create({
  img: { width: 250, height: 250, marginVertical: 20 },
});
