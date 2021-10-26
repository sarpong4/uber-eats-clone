import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/Details/About";
import MenuItems from "../components/Details/MenuItems";
import ViewCart from "../components/Details/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1}}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 30 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems restaurantName={route.params.name} />
      </ScrollView>
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
