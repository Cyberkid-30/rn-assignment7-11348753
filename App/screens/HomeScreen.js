import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function HomeScreen({ handlePress }) {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <CardContainer handlePress={handlePress} />
    </View>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
