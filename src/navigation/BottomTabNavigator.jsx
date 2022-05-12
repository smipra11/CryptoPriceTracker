import React from "react";
import {
  BottomTabView,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "../screens/HomeScreen";
import { Entypo, FontAwesome, Foundation } from "@expo/vector-icons";
import WatchList from "../screens/WatchListScreen";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          )
        }}
      />
       <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
            ),
          }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
