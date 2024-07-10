import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ProductPreviewScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/dress1.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "pink",
  },
});

export default ProductPreviewScreen;
