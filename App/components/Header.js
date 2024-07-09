import React from "react";
import { View, StyleSheet, Image } from "react-native";

function Header(props) {
  return (
    <View style={styles.header}>
      <Image style={styles.icon} source={require("../assets/Menu.png")} />
      <Image source={require("../assets/Logo.png")} />
      <View style={styles.navIcons}>
        <Image style={styles.icon} source={require("../assets/Search.png")} />
        <Image
          style={styles.icon}
          source={require("../assets/shoppingBag.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  navIcons: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default Header;
