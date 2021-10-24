import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/Details/About";
import MenuItems from "../components/Details/MenuItems";

export default function RestaurantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView>
        <MenuItems />
      </ScrollView>
    </View>
  );
}
