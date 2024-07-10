import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import { donts } from "../Don'ts";
import { ScrollView } from "react-native-gesture-handler";
import DontItem from "../components/DontItem";

function ProductPreviewScreen({ item }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Header />
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={{ color: "gray" }}>{item.description}</Text>
          <Text style={{ color: "#E0A75E", fontSize: 24 }}>${item.price}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text>MATERIALS</Text>
          <Text style={{ color: "gray", marginBottom: 20 }}>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </Text>
          {donts.map((item) => (
            <DontItem item={item} key={item.id} />
          ))}
        </View>
        <View
          style={{
            width: "90%",
            height: 2,
            backgroundColor: "gray",
            marginBottom: 20,
          }}
        />
        <View style={styles.shippingInfo}>
          <Image source={require("../assets/images/Shipping.png")} />
          <View style={{ position: "relative" }}>
            <Text>Free Flat Rate Shipping</Text>
            <Text style={{ color: "gray" }}>Estimated to be delivered on</Text>
            <Text style={{ color: "gray" }}>09/11/2024 - 12/11/2024</Text>
          </View>
          <Image
            source={require("../assets/images/Up.png")}
            style={{ position: "absolute", right: 0 }}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addToBasket}>
        <MaterialCommunityIcons name="plus" color={"#fff"} size={30} />
        <Text style={{ color: "#fff" }}>ADD TO BASKET</Text>
        <MaterialCommunityIcons
          name="heart-outline"
          color={"#fff"}
          size={30}
          style={{ position: "absolute", right: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScrollView: {
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 420,
    marginBottom: 20,
  },
  productTitle: {
    fontWeight: "400",
    fontSize: 25,
  },
  shippingInfo: {
    marginBottom: 150,
    flexDirection: "row",
    gap: 20,
  },

  addToBasket: {
    position: "relative",
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});

export default ProductPreviewScreen;
