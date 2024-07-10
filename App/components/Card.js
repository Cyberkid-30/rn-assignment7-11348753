import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function Card({ item, onPress, onSelect }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Preview");
          onSelect();
        }}
      >
        <ImageBackground style={styles.background} source={{ uri: item.image }}>
          <TouchableOpacity style={styles.add} onPress={onPress}>
            <Image source={require("../assets/add_circle.png")} />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
      <View>
        <Text style={{ fontWeight: "600" }}>{item.title}</Text>
        <Text style={{ color: "gray" }}>
          {item.description.substring(0, 50)}
        </Text>
        <Text style={{ color: "#E0A75E" }}>${item.price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "47%",
    // backgroundColor: "dodgerblue",
    paddingBottom: 10,
  },
  background: {
    height: 250,
    position: "relative",
  },
  add: {
    position: "absolute",
    bottom: 10,
    right: 10,
    cursor: "pointer",
  },
});
export default Card;
