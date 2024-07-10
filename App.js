import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./App/screens/HomeScreen";
import CartScreen from "./App/screens/CartScreen";
import ProductPreviewScreen from "./App/screens/ProductPreviewScreen";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  // const TabNavigator = () => {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name="Home">
  //         {() => <HomeScreen handlePress={(item) => handlePressEvent(item)} />}
  //       </Tab.Screen>
  //       <Tab.Screen name="Cart">
  //         {() => (
  //           <CartScreen
  //             cartItems={cartItems}
  //             onDelete={(id) => handleDelete(id)}
  //           />
  //         )}
  //       </Tab.Screen>
  //     </Tab.Navigator>
  //   );
  // };

  const handleDelete = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handlePressEvent = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleOnSelect = (item) => {
    setSelectedItem(item);
  };

  const MyDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Store">
          {() => (
            <HomeScreen
              handlePress={(item) => handlePressEvent(item)}
              handleSelect={(item) => handleOnSelect(item)}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Cart">
          {() => (
            <CartScreen
              cartItems={cartItems}
              onDelete={(id) => handleDelete(id)}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Locations" component={CartScreen} />
        <Drawer.Screen name="Blog" component={CartScreen} />
        <Drawer.Screen name="Jewelery" component={CartScreen} />
        <Drawer.Screen name="Electronic" component={CartScreen} />
        <Drawer.Screen name="Preview">
          {() => <ProductPreviewScreen item={selectedItem} />}
        </Drawer.Screen>
      </Drawer.Navigator>
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer style={styles.container}>
        <MyDrawer />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
