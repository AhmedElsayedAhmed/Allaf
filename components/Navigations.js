import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Items from "../screens/Items";
import Splash from "../screens/Splash";
import Card from "./Card";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import MyOrder from "../screens/MyOrder";
import ConfirmInvoice from "../screens/Checkout";
import { Login } from "../screens/Login";
import Register from "../screens/Register";
import Logout from "../screens/Logout";
import I18n from '../locales/i18n';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        
        
      }}
      initialRouteName="Home"
      
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="Items" component={Items} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

const AppNavigations = () => {
  return (
    <Drawer.Navigator  initialRouteName={I18n.t('homepage') } drawerPosition={I18n.locale === "en"? "left" : "right"}>
      <Drawer.Screen name={I18n.t('homepage') } component={HomeStack}></Drawer.Screen>
      <Drawer.Screen name={I18n.t('myOrder') } component={MyOrder}></Drawer.Screen>
      <Drawer.Screen name={I18n.t('cart') } component={ConfirmInvoice}></Drawer.Screen>
      <Drawer.Screen name={I18n.t('logout') } component={Logout}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Aalaf" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Home" component={AppNavigations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
