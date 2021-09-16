import { useNavigation } from "@react-navigation/native";
import React, { Children } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { mainColor } from "./Constants";

const CustomCard = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: props.flexDirection,
          justifyContent: props.justifyContent,
          flexWrap: props.flexWrap,
          borderRadius: 30,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", marginTop: 25 }} showsVerticalScrollIndicator={false}
        >
          {props.children}
        </ScrollView>

        {/* </ScrollView> */}
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 50,
          top: -15,

          position: "absolute",
          flexDirection: "row",
          backgroundColor: mainColor,
          flex: 1,
        }}
      >
        {!props.back && (
          <Button
            icon="chevron-left"
            mode={"text"}
            compact={"true"}
            labelStyle={{
              fontSize: 24,
              color: "white",
              alignSelf: "flex-start",
            }}
            onPress={() => navigation.goBack()}
          ></Button>
        )}

        <Text
          style={{
            alignSelf: "center",
            margin: 10,
            left: props.back ? 0 : -10,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Text>
      </View>
    </>
  );
};

export default CustomCard;

const styles = StyleSheet.create({});
