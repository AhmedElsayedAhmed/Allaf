import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Card, Button, List, TextInput } from "react-native-paper";
import CustomCard from "../components/Card";
import Header from "../components/Header";
import { mainColor } from "../components/Constants";
import Accordion from "../components/Accordion";
import { useApiRequestPost } from "../apis/ApiHook";
import Toast from "react-native-toast-message";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const ItemDetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [text, setText] = useState("1");
  const [total, setTotal] = useState(1);

  const [productId, setProductId] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [postfetch, setPostFetch] = useState(false);
  const { error, isLoaded, data } = useApiRequestPost(
    "Invoice/User/addtocart",
    { productId: productId, quantity: quantity, total: total },
    postfetch
  );

  const addToCart = (productId) => {
    setProductId(productId);
    setPostFetch(true);
    navigation.goBack();
  };

  useFocusEffect(

    React.useCallback(()=>{
        if (isLoaded) {
            console.log("sucess");
            navigation.goBack();
      
            Toast.show({
              type: "success",
              position: "top",
              text1: "Hello",
              text2: "This is some something 👋",
              visibilityTime: 4000,
              autoHide: true,
              topOffset: 30,
              bottomOffset: 40,
              onShow: () => {},
              onHide: () => {},
              onPress: () => {},
            });
          }
    },[isLoaded])
    
  );

  return (
    <>
      <Header />

      <View style={{ flex: 4, margin: 30 }}>
        <CustomCard
          title={item.title}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          justifyContent={"flex-start"}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card
              style={{
                borderRadius: 20,
                margin: 20,
              }}
            >
              <Card.Content>
                <Image
                  source={{uri: item.photo}}
                  style={{
                    width: 150,
                    height: 150,
                    alignSelf: "center",
                    resizeMode: "stretch",
                  }}
                ></Image>
              </Card.Content>
            </Card>

            <Card
              style={{
                borderRadius: 20,
                margin: 20,
              }}
            >
              <Card.Title
                title={item.title}
                titleStyle={{ alignSelf: "center" }}
              ></Card.Title>
              <Card.Content style={{ justifyContent: "space-between" }}>
                <Accordion item={item} />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    margin: 20,
                  }}
                >
                  <Text
                    placeholder="Enter Quantity"
                    style={{
                      flex: 4,
                      backgroundColor: "white",
                      color: "gray",
                      alignSelf: "center",
                    }}
                  >
                    Enter Quantity
                  </Text>
                  <TextInput
                    placeholder="1"
                    mode="outlined"
                    label=""
                    style={{
                      alignSelf: "center",
                      height: 30,
                      flex: 1,
                      backgroundColor: "white",
                    }}
                    value={text}
                    keyboardType = 'numeric'
                    onChangeText={(q) => {
                      setText(q);
                      setQuantity(+q);
                      setTotal(+q * +item.price);
                    }}
                  ></TextInput>
                  <Text
                    style={{
                      flex: 1,
                      alignSelf: "center",
                      color: "gray",
                      marginLeft: 5,
                    }}
                  >
                    Bag
                  </Text>
                </View>

                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                />

                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    margin: 20,
                  }}
                >
                  <Text style={{ color: "green" }}>Total Amount</Text>

                  <Text style={{ color: "green" }}>
                    {" "}
                    <Text style={{ color: "green" }}>
                      {+text * +item.price}
                    </Text>
                  </Text>
                </View>
              </Card.Content>

              <Card.Actions
                style={{
                  backgroundColor: mainColor,
                  height: 30,
                  marginTop: 20,
                  marginBottom: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  color="white"
                  uppercase={false}
                  onPress={() => addToCart(item.id)}
                >
                  Add to cart
                </Button>
              </Card.Actions>
            </Card>
          </ScrollView>
        </CustomCard>
      </View>
    </>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
