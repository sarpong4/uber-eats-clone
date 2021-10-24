import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/Details/About";

export default function RestaurantDetail() {
  return (
    <View style={{ marginTop: 10 }}>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  );
}
