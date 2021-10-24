import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 5,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" page={props.page} />
      <Icon icon="search" text="Browse" page={props.page} />
      <Icon icon="shopping-bag" text="Grocery" page={props.page} />
      <Icon icon="receipt" text="Orders" page={props.page} />
      <Icon icon="user" text="Account" page={props.page} />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
          color: props.text === props.page ? "#000" : "#888",
        }}
      />
      <Text style={{ color: props.text === props.page ? "#000" : "#888" }}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
