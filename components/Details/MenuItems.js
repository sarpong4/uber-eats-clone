import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Lasagna",
    description: "With butter, lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1614961908593-2c6bf2bdf2ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFzYWduYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Tandori Chicken",
    description:
      "Amazing Indian dish with a tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image:
      "https://images.unsplash.com/photo-1606659894340-67897be51c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhbmRvcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious Mexican dish.",
    price: "$14.50",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with chicken caesar salad. Healthy and Delicious 🤤",
    price: "$21.50",
    image:
      "https://images.unsplash.com/photo-1567121938596-6d9d015d348b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBjYWVzYXIlMjBzYWxhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Lasagna",
    description: "With butter, lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1614961908593-2c6bf2bdf2ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFzYWduYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Tandori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image:
      "https://images.unsplash.com/photo-1606659894340-67897be51c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhbmRvcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious Mexican dish",
    price: "$14.50",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy and Delicious 🤤",
    price: "$21.50",
    image:
      "https://images.unsplash.com/photo-1567121938596-6d9d015d348b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBjYWVzYXIlMjBzYWxhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <>
      {foods.map((food, index) => (
        <TouchableOpacity key={index} activeOpacity={0.9}>
          <View>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "lightgray",
                  borderRadius: 0,
                }}
                fillColor="green"
                size={20}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 15 }}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: "63%", justifyContent: "space-between", padding: 5 }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{ width: 100, height: 100, borderRadius: 10, marginHorizontal: 5 }}
  />
);
