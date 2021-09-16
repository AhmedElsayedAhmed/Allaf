import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

const Splash = ({ navigation }) => {
//   useFocusEffect(() => {
//     React.useCallback(() => {
//       setTimeout(() => {
//         const isLogged = AsyncStorage.getItem("token").then((a) => {
//           if (a) navigation.navigate("Home");
//           else navigation.navigate("Login");
//         });
//       }, 1000);
//     }, []);
//   });



  useFocusEffect(
    React.useCallback(() => {
        setTimeout(() => {
            const isLogged = AsyncStorage.getItem("token").then((a) => {
              if (a) navigation.navigate("Home");
              else navigation.navigate("Login");
            });
          }, 1000);
    }, [])
  );

  const image = require("../assets/splash.png");
  //uri: require('../assets/splash.png')
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="stretch"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
