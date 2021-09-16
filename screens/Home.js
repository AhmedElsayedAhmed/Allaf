import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarouselComponent from "../components/Carousel";
import Header from "../components/Header";
import ShopByCategories from "./ShopByCategories";

const Home = ({navigation}) => {
  return (
    <>
      <Header />
      <View style={{ marginTop: 10, flex: 2, margin: 30, borderRadius: 50 }}>
        <CarouselComponent />
      </View>
      <View style={{ marginTop: 10, flex: 6, margin:30 }}>
          <ShopByCategories navigation={navigation}/>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
