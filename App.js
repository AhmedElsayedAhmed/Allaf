import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { I18nManager, StyleSheet } from "react-native";
import Splash from "./screens/Splash";
import { createStackNavigator } from "@react-navigation/stack";
import Navigations from "./components/Navigations";
import Toast from "react-native-toast-message";
import ErrorBoundary from "react-native-error-boundary";
import I18n from "react-native-i18n";
import { createContext } from "react";
import { LanguageDirectionContext } from "./context/context";
const Stack = createStackNavigator();

const errorHandler = (error, stackTrace) => {
  console.log(error);
};

export default function App() {
  const direction = "en"


 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
