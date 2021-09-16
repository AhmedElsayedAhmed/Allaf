import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { mainColor } from "./Constants";

const Indicator = () => {
  return (
    <ActivityIndicator
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50%",
      }}
      size="large"
      color={mainColor}
    />
  );
};

export default Indicator;
