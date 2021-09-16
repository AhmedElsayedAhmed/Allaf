import React, { Component } from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
  Alert,
} from "react-native";
import { useApiRequest, useApiRequestPost } from "../apis/ApiHook";
import axios from "axios";

import { mainColor } from "../components/Constants";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const [fetch, setFetch] = useState(false);
  const { postError, postIsLoaded, postData } = useApiRequestPost(
    "Account/Login",
    { email, password },
    fetch
  );

  useFocusEffect(
    React.useCallback(() => {
      setFetch(false);
      if (postIsLoaded) {
        console.log('sign in');
        signIn();
      }
    }, [postIsLoaded])
  );

  const signIn = () => {
    navigation.navigate("HomePage");
    AsyncStorage.setItem("token", postData.token.token);
  };

  return (
    <>
      <View style={styles.mainBody}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View>
            <KeyboardAvoidingView enabled>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={{
                    width: "50%",
                    height: 100,
                    resizeMode: "contain",
                    margin: 30,
                  }}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(username) => setEmail(username)}
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="white"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(password) => setPassword(password)}
                  placeholder="Enter Password" //12345
                  placeholderTextColor="white"
                  keyboardType="default"
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>

              {postError && (   <View style={styles.SectionStyle}>
                
                  <Text style={{  color: "red", fontWeight: 'bold' }}>
                    *Invalid user name or password
                  </Text>
                
              </View>)}

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  setFetch(false);
                  setTimeout(() => {
                    setFetch(true);
                  }, 500);
                }}
              >
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate("Register")}
              >
                New Here ? Register
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: mainColor,
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
