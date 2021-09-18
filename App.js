import React, { useState } from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
import * as Font from "expo-font";
// import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/Drawer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

const getFonts = () =>
  Font.loadAsync({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <SafeAreaProvider style={{ paddingTop: Constants.statusBarHeight }}>
        {/* <View> */}
        <Navigator />
        {/* </View> */}
      </SafeAreaProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   nav: {
//     color: 'red'
//   }
// });
