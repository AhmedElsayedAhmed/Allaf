import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Carousel from "pinar";

const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297"
  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  }
};
const CarouselComponent = () => {
  return (
    <Carousel>
      <View style={styles.slide1}>
        <Image source={require('../assets/cat_icons/aa.png')} style={{resizeMode:'stretch', width:'100%'}}/>
      </View>
      <View style={styles.slide2}>
      <Image source={require('../assets/cat_icons/bb.png')} style={{resizeMode:'stretch', width:'100%'}}/>
      </View>
      <View style={styles.slide3}>
      <Image source={require('../assets/PP.png')} style={{resizeMode:'stretch', width:'100%'}}/>
      </View>
    </Carousel>
  );
};

export default CarouselComponent;

