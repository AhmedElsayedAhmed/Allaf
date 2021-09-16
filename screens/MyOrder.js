import React from "react";
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
import Header from "../components/Header";
import { mainColor } from "../components/Constants";
import { useApiRequest } from "../apis/ApiHook";
import { useState, useEffect, useRef } from "react";
import Indicator from "../components/Indicator";
import { useFocusEffect } from "@react-navigation/native";

const MyOrder = () => {
  const [fetch, setFetch] = useState(false);
  const { error, isLoaded, data } = useApiRequest("Invoice/User", fetch);

  useFocusEffect(

    React.useCallback(()=>{
        setFetch(false);

        setTimeout(() => {
          setFetch(true)
            
        }, 500);
    },[])
   
  );

  return (
    <>
      <Header />

      <View style={{ flex: 1, margin: 30 }}>
        <CustomCard
          title="My Orders"
          flexDirection={"column"}
          flexWrap={"nowrap"}
          justifyContent={"space-between"}
        >
          {!isLoaded && <Indicator />}
          <ScrollView style={{ top: 30 }} showsVerticalScrollIndicator={false}>
            {isLoaded && data.length > 0 && 
              data.map((invoice, index) => {
                return (
                  <Card
                    style={{
                      borderRadius: 20,
                      margin: 20,
                    }}
                    key={invoice.id}
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
                        <Text style={{ flex: 1, fontWeight:'bold' }}>Order Id : {invoice.id}</Text>
                        <Text style={{ flex: 1 }}>{invoice.createdAt}</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ flex: 1, color: "green" }}>
                          {invoice.totalPrice}
                        </Text>
                        <Text style={{ flex: 1 }}>{invoice.status}</Text>
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
                        <Text style={{ flex: 1, fontWeight:'bold' }}>Delivery Address</Text>
                        <Text style={{ flex: 1 }}>{invoice.address}</Text>
                      </View>
                    </Card.Content>
                  </Card>
                );
              })}

              {isLoaded && data.length == 0 && <Text style={{fontWeight:'bold', margin:50, alignSelf:'center'}}> No orders</Text>}
          </ScrollView>
        </CustomCard>
      </View>
    </>
  );
};

export default MyOrder;

const styles = StyleSheet.create({});
