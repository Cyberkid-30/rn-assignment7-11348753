import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import data from "../Items";
import Card from "./Card";

function CardContainer({ handlePress }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.containerHeader}>
        <Text style={{ fontSize: 25 }}>OUR STORY</Text>
        <View style={styles.navIcons}>
          <Image
            style={styles.icon}
            source={require("../assets/Listview.png")}
          />
          <Image style={styles.icon} source={require("../assets/Filter.png")} />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    paddingBottom: 200,
    backgroundColor: "#fff",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navIcons: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },
});

export default CardContainer;
