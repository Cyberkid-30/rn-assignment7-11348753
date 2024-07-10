import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function DontItem({ item }) {
  return (
    <View style={styles.doNots}>
      <Image source={item.image} />
      <Text style={{ color: "gray" }}>{item.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  doNots: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
});

export default DontItem;
