import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Header from "../shared/header";
import React from "react";
import ReviewDetails from "../screens/ReviewDetails";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Gamzone" />,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      headerStyle: { backgroundColor: "#eee", height: 80 },
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#d3d3d3", height: 60 },
  },
});

export default HomeStack;
