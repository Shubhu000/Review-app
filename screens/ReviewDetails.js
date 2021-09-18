import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GlobalStyles, images } from "../styles/Global";
import Card from "../shared/Card";
const ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam("rating");
  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View>
          <Text style={styles.rating}>Gamezone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  rating: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "red",
  },
});

export default ReviewDetails;
