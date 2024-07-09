import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./App/screens/HomeScreen";
import CartScreen from "./App/screens/CartScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [cartItems, setCartItems] = useState([{}]);
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {() => <HomeScreen handlePress={(item) => handlePressEvent(item)} />}
        </Tab.Screen>
        <Tab.Screen name="Cart">
          {() => (
            <CartScreen
              cartItems={cartItems}
              onDelete={(id) => handleDelete(id)}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("shoppingItems");
        if (storedItems) {
          setCartItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    };
    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem("shoppingItems", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Failed to save items:", error);
      }
    };
    saveItems();
  }, [cartItems]);

  const handleDelete = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handlePressEvent = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
