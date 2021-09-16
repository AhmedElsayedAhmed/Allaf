import React from "react";
import { useState, useEffect } from "react";
import {
  I18nManager,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { useApiRequest } from "../apis/ApiHook";
import CustomCard from "../components/Card";
import { ActivityIndicator } from "react-native-paper";
import { mainColor } from "../components/Constants";
import Indicator from "../components/Indicator";
import I18n from "../locales/i18n";

const ShopByCategories = ({ navigation }) => {
  const [fetch, setFetch] = useState(false);
    const { error, isLoaded, data } = useApiRequest("Category", fetch);

  useEffect(() => {
    setFetch(true);
    // if (isLoaded) console.log(data);
  });

  const getItemByCategory = (categoryId, categoryName) => {
    navigation.navigate("Items", { categoryId, categoryName });
  };

  const categories = [
    {
      id: 1,
      title: "sheep Feed",
      img: require("../assets/cat_icons/aa.png"),
    },
    {
      id: 2,
      title: "Houbara Feed",
      img: require("../assets/cat_icons/bb.png"),
    },
    {
      id: 3,
      title: "Pigon Feed",
      img: require("../assets/cat_icons/cc.png"),
    },
    {
      id: 4,
      title: "Deer Feed",
      img: require("../assets/cat_icons/dd.png"),
    },
    {
      id: 5,
      title: "Ostrich Feed",
      img: require("../assets/cat_icons/ee.png"),
    },
    {
      id: 6,
      title: "Rabbit Feed",
      img: require("../assets/cat_icons/ff.png"),
    },
    {
      id: 7,
      title: "Deer Feed",
      img: require("../assets/cat_icons/dd.png"),
    },
    {
      id: 8,
      title: "Ostrich Feed",
      img: require("../assets/cat_icons/ee.png"),
    },
    // {
    //   id: 6,
    //   name: "Rabbit Feed",
    //   img: require("../assets/cat_icons/ff.png"),
    // },
  ];

  return (
    <CustomCard
      title={I18n.t("shopByCategory") }
      //   flexDirection={"row"}
      //   flexWrap={"wrap"}
      justifyContent={"space-between"}
      back={true}
    >
      {!isLoaded && <Indicator />}

      {isLoaded &&
        data.map((category, index) => {
          return (
            <TouchableOpacity
              index={index}
              key={category.id}
              onPress={() => getItemByCategory(category.id, I18nManager.isRTL? category.arTitle: category.title)}
            >
              <Card
                style={{
                  borderRadius: 20,
                  flexBasis: "30%",
                  marginTop: 20,
                  margin: 15,
                }}
              >
                <Card.Content>
                  <Text>{I18nManager.isRTL? category.arTitle: category.title}</Text>
                </Card.Content>

                <Card.Content>
                  <Image
                    source={categories[index].img}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "stretch",
                    }}
                  ></Image>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          );
        })}
    </CustomCard>
  );
};

export default ShopByCategories;

const styles = StyleSheet.create({});
