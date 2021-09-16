import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";

const Logout = () => {
  const navigation = useNavigation();


  useFocusEffect(

    React.useCallback(()=>{
      AsyncStorage.removeItem("token").then(a=>{
        navigation.navigate("Login");
      });     
    },[])
   
  );

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Logout;
