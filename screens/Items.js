import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import CustomCard from "../components/Card";
import Header from "../components/Header";
import { Card, Button } from "react-native-paper";
import { mainColor } from "../components/Constants";
import { useApiRequest } from "../apis/ApiHook";
import Indicator from "../components/Indicator";
const Items = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;

  const getItemDetail = (item) => {
    navigation.navigate("ItemDetail", {
      item,
    });
  };

  const { error, isLoaded, data } = useApiRequest(
    `Product/category/${categoryId}`,
    true
  );

  const categories = [
    {
      id: 1,
      name: "sheep Feed",
      img: require("../assets/cat_icons/aa.png"),
    },
    {
      id: 2,
      name: "Houbara Feed",
      img: require("../assets/cat_icons/bb.png"),
    },
    {
      id: 3,
      name: "Pigon Feed",
      img: require("../assets/cat_icons/cc.png"),
    },
    {
      id: 4,
      name: "Deer Feed",
      img: require("../assets/cat_icons/dd.png"),
    },
    {
      id: 5,
      name: "Ostrich Feed",
      img: require("../assets/cat_icons/ee.png"),
    },
    {
      id: 6,
      name: "Rabbit Feed",
      img: require("../assets/cat_icons/ff.png"),
    },
  ];

  return (
    <>
      <Header />
      <View style={{ marginTop: 30, flex: 1, margin: 30 }}>
        <CustomCard
          title={categoryName}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          justifyContent={"space-between"}
          navigation={navigation}
        >
          {!isLoaded && <Indicator />}
          {isLoaded && (
            <ScrollView
              style={{ top: 30 }}
              showsVerticalScrollIndicator={false}
            >
              {data.map((item, index) => {
                return (
                  <TouchableOpacity
                    index={index}
                    key={index}
                    onPress={() => getItemDetail(item)}
                    style={{ margin: 10 }}
                  >
                    <Card
                      style={{
                        borderRadius: 20,
                      }}
                    >
                      <Card.Content
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Image
                          source={{ uri: item.photo}}
                          style={{
                            width: 100,
                            height: 100,
                          }}
                        ></Image>

                        <Text>{item.photo}</Text>

                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ flex: 1 }}>{item.title}</Text>
                          <Text style={{ flex: 1 }}>
                            {item.packageWeight} KG
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            icon="format-list-bulleted-square"
                            mode="text"
                            color="black"
                            style={{ flex: 1 }}
                            onPress={() => console.log("Pressed")}
                          ></Button>
                          <Text style={{ flex: 1 }}>{item.price} QAR</Text>
                        </View>
                      </Card.Content>

                      <Card.Actions
                        style={{
                          backgroundColor: mainColor,
                          height: 30,
                          marginTop: 20,
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <Button color="white" uppercase={false}>
                          Add to cart
                        </Button>
                      </Card.Actions>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
        </CustomCard>
      </View>
    </>
  );
};

export default Items;

const styles = StyleSheet.create({});
