import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function HomeScreen({handlePress}) {
  return (
    <View>
      <Header />
      <CardContainer handlePress={handlePress} />
    </View>
  );
}

export default HomeScreen;
