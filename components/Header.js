import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { Platform, I18nManager } from "react-native";
import { mainColor } from "./Constants";
import { useNavigation } from "@react-navigation/native";
import I18n, { Trans } from "./../locales/i18n";
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const Header = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header
      style={{ justifyContent: "space-between", backgroundColor: mainColor }}
    >
      <Appbar.Action
        icon="view-headline"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomePage");
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 144, height: 30 }}
        />
      </TouchableOpacity>
      <Trans />
      <Appbar.Action
        icon="cart-outline"
        onPress={() => {
          navigation.navigate("Cart");
        }}
      />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
