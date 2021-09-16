import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card } from "react-native-paper";
import CustomCard from "../components/Card";
import { useApiRequest, useApiRequestPost } from "../apis/ApiHook";
import Header from "../components/Header";
import { mainColor } from "../components/Constants";
import Indicator from "../components/Indicator";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// export default class ConfirmInvoice extends React.Component {

const ConfirmInvoice = () => {
  const nav = useNavigation();
  const [fetch, setFetch] = useState(false);
  const [postfetch, setPostFetch] = useState(false);

  const { error, isLoaded, data } = useApiRequest("Invoice/User/Cart", fetch);
  const { postError, postIsLoaded, postData } = useApiRequestPost(
    "Invoice/User/checkout",
    {},
    postfetch
  );

  useFocusEffect(
    React.useCallback(() => {
      if (postfetch) nav.navigate("My Order");
      setFetch(false);

      setTimeout(() => {
        setFetch(true);
      }, 500);
    }, [postfetch])
  );

  const checkData = () => {
    return data.length > 0 && isLoaded;
  };

  return (
    <>
      <Header />
      <ScrollView style={{ marginTop: 10 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#009edf",
            borderBottomWidth: 1,
            textAlign: "center",
            color: "#fff",
            padding: 15,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Total : {data.totalPrice ? data.totalPrice : 0} QAR
          </Text>
        </View>

        <View style={{ borderBottomColor: "#b8b8b8", borderBottomWidth: 1 }} />

        <View style={{ marginTop: 30, flex: 1 }}>
          <CustomCard
            title="My Carts"
            flexDirection={"column"}
            flexWrap={"nowrap"}
            justifyContent={"space-between"}
          >
            {!isLoaded && <Indicator />}
            <ScrollView
              style={{ top: 30 }}
              showsVerticalScrollIndicator={false}
            >
              {isLoaded &&
                data != null &&
                data.orders != null &&
                data.orders.length > 0 &&
                data.orders.map((order, index) => {
                  return (
                    <Card
                      style={{
                        borderRadius: 20,
                        margin: 20,
                      }}
                      key={order.id}
                    >
                      <Card.Content
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ flex: 1 }}>
                            Product Name : {order.productTitle}
                          </Text>
                          <Text style={{ flex: 1 }}>{order.createdAt}</Text>
                        </View>
                      </Card.Content>

                      <Card.Content
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 20,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ flex: 1 }}>
                            Quantity : {order.quantity}
                          </Text>
                          <Text style={{ flex: 1 }}>Price : {order.price}</Text>
                        </View>
                      </Card.Content>
                    </Card>
                  );
                })}

              {isLoaded &&
                data != null &&
                data.orders != null &&
                data.orders.length > 0 && (
                  <Button
                    color="white"
                    style={{
                      textAlign: "center",
                      backgroundColor: mainColor,
                      color: "white",
                      margin: 20,
                    }}
                    textStyle={{ fontSize: 13, color: "white" }}
                    radius={10}
                    onPress={() => setPostFetch(true)}
                  >
                    Checkout
                  </Button>
                )}

              {isLoaded && (data.orders == null || data.orders.length == 0) && (
                <Text
                  style={{
                    fontWeight: "bold",
                    margin: 50,
                    alignSelf: "center",
                  }}
                >
                  Empty Card
                </Text>
              )}
            </ScrollView>
          </CustomCard>
        </View>
      </ScrollView>
    </>
  );
};

export default ConfirmInvoice;
const styles = StyleSheet.create({
  myRow: {
    // shadowColor: "#000",
    // shadowOffset: {width: 0,height: 3,},
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    margin: 10,
    elevation: 6,
    // paddingTop:11,
    // paddingBottom:11,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
