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
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [address, setAddress] = useState("");
  const navigation = useNavigation();

  const [fetch, setFetch] = useState(false);
  const [passwordInvalid, setpasswordInvalid] = useState(false);

  const { postError, postIsLoaded, postData } = useApiRequestPost(
    "Account/Register",
    { email, password, address },
    fetch
  );

  useFocusEffect(
    React.useCallback(() => {
      setFetch(false);
      if (postIsLoaded) {
        register();
      }
    }, [postIsLoaded])
  );

  const checkPassword = () => {
    setTimeout(() => {
      console.log(confirmPassword);

      if (password !== confirmPassword) setpasswordInvalid(true);
      else setpasswordInvalid(false);
    }, 500);
  };

  const register = () => {
    navigation.navigate("Login");
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
              {postError && (
                <View>
                  <Text  style={{marginTop:5, color:"red", fontWeight:'bold',   marginLeft: 35,}}>*Email is already exists </Text>
                </View>
              )}
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

              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(confirmpassword) => {
                    setConfirmPassword(confirmpassword);
                    if(confirmpassword != password){
                      setpasswordInvalid(true)
                    }else setpasswordInvalid(false)
                  }}
                  placeholder="Confirm Password" //12345
                  placeholderTextColor="white"
                  keyboardType="default"
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
              {passwordInvalid && (
                <View>
                  <Text style={{color:'red', fontWeight:'bold', marginTop:5, marginLeft: 35}}>*Password doesn't match</Text>
                </View>
              )}

              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(address) => setAddress(address)}
                  placeholder="Enter Address" //12345
                  placeholderTextColor="white"
                  keyboardType="default"
                  blurOnSubmit={false}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>

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
                <Text style={styles.buttonTextStyle}>Register</Text>
               
              </TouchableOpacity>

              <Text style={styles.buttonTextStyle}  onPress={() => navigation.navigate("Login")}>Have already account? Login</Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Register;

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
