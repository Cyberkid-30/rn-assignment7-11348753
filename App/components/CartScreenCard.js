import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function CartScreenCard({ item, onDelete }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.cardContent}>
        <Text
          style={{ fontWeight: 500, fontSize: 18, textTransform: "uppercase" }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "gray" }}>
          {item.description.substring(0, 50)}
        </Text>
        <Text style={{ color: "#E0A75E" }}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.removeBtn}
      >
        <Image source={require("../assets/remove.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    position: "relative",
    height: 170,
    gap: 10,
    marginBottom: 10,
  },
  image: {
    height: 170,
    width: "50%",
  },
  cardContent: {
    justifyContent: "center",
    width: 200,
  },
  removeBtn: {
    position: "absolute",
    bottom: 20,
    right: 3,
  },
});
export default CartScreenCard;
