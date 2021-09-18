import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../shared/header";
import React from "react";
import { GlobalStyles } from "../styles/Global";
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            title="About Gamezone"
            style={GlobalStyles.titleText}
          />
        ),
      };
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#d3d3d3", height: 60 },
  },
});

export default AboutStack;
